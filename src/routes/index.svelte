<script lang="ts">
	import '@fontsource/alegreya-sans';
	import { SvelteToast, toast } from '@zerodevx/svelte-toast';

	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { conditions } from './conditions';

	let totalHeat = 0;

	onMount(async () => {
		if ($page.query.has('q')) {
			const q = $page.query.get('q');
			if (q.length === conditions.length) {
				conditions.forEach((c, index) => {
					const initValue = Number(q[index]);
					if (initValue < c.heat.length) {
						conditions[index].selected = [...Array(initValue + 1).keys()];
					}
				});
				totalHeat = getTotalHeat();
			}
		}
	});

	const getTotalHeat = () => {
		return conditions.reduce((total, c) => {
			const maxIndex = Math.max(...c.selected);
			const totalHeatForCondition = c.heat
				.slice(0, maxIndex + 1)
				.reduce((heatSum, h) => heatSum + h, 0);
			return total + totalHeatForCondition;
		}, 0);
	};

	const handleCheckboxClick = (event, index: number) => {
		const v = Number(event.target.value);
		if (conditions[index].selected.includes(v)) {
			conditions[index].selected = conditions[index].selected.filter((s) => s < v);
		} else {
			conditions[index].selected = [...Array(v + 1).keys()];
		}

		totalHeat = getTotalHeat();
	};

	const handleGetLinkClick = () => {
		const query = conditions
			.map((c) => {
				return c.selected.length ? Math.max(...c.selected) : 9;
			})
			.join('');
		const base = $page.host;
		navigator.clipboard.writeText(`${base}/?q=${query}`);
		toast.push('Link copied to clipboard!');
	};
</script>

<svelte:head>
	<title>Pact of Punishment</title>
</svelte:head>

<div class="link" on:click={handleGetLinkClick}>Get shareable link!</div>

<div class="header">
	<div>
		<h1>Conditions</h1>
	</div>
	<div>
		<h2>{totalHeat}</h2>
		<img alt="heat icon" id="heatIcon" src="/Heat.webp" />
	</div>
</div>

{#each conditions as { name, description, heat }, index}
	<div class="condition">
		<div class="name">{name}</div>
		<div class="checkboxes">
			{#each heat as _h, heatIndex}
				<label class="checkbox">
					<input
						type="checkbox"
						bind:group={conditions[index].selected}
						value={heatIndex}
						on:click={(event) => handleCheckboxClick(event, index)}
					/>
				</label>
			{/each}
		</div>
	</div>
	<div class="description">{@html description}</div>
{/each}

<a href="/mirror" class="link">Looking for the Mirror of Night?</a>

<SvelteToast />

<style>
	:global(body) {
		background-color: #393330;
		color: white;
		display: flex;
		justify-content: center;
		font-family: 'Alegreya Sans';
	}

	.link {
		color: white;
		cursor: pointer;
		display: flex;
		justify-content: center;
		margin-top: 8px;
		text-align: center;
		text-decoration: none;
	}

	.link:hover {
		text-decoration: underline;
	}

	:global(.icon) {
		height: 26px;
		margin-left: 2px;
		vertical-align: middle;
	}

	:global(.small-icon) {
		height: 20px;
		vertical-align: middle;
	}

	.header {
		align-items: baseline;
		display: flex;
		justify-content: space-between;
		width: 450px;
	}

	.header div:last-child {
		display: flex;
		align-items: center;
	}

	#heatIcon {
		height: 24px;
		margin-left: 8px;
	}

	.condition {
		display: flex;
		height: 40px;
		justify-content: space-between;
		margin-bottom: 20px;
		width: 450px;
	}

	.name {
		align-items: center;
		color: #fd401d;
		display: flex;
		font-size: 20px;
		font-weight: bold;
		text-shadow: -1px -1px 1px #291f1a, 1px -1px 1px #291f1a, -1px 1px 1px #291f1a,
			1px 1px 1px #291f1a;
		text-transform: uppercase;
	}

	.checkboxes {
		display: flex;
	}

	.checkbox {
		cursor: pointer;
		filter: hue-rotate(150deg);
		margin: 8px;
		transform: scale(1.5);
	}

	.checkbox input {
		cursor: pointer;
	}

	.description {
		display: none;
		margin-top: -20px;
		position: absolute;
	}

	.condition:hover + .description {
		display: block;
	}

	#getLink,
	#mirrorLink {
		cursor: pointer;
		padding: 4px;
		margin: 16px;
		text-align: center;
	}
</style>
