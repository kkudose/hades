<script lang="ts">
	import '@fontsource/alegreya-sans';
	import { SvelteToast, toast } from '@zerodevx/svelte-toast';

	import { onMount } from 'svelte';
	import { page } from '$app/stores';

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

	interface Condition {
		name: string;
		description: string;
		heat: number[];
		selected: number[];
	}

	const conditions: Condition[] = [
		{
			name: 'Hard Labor',
			description: 'All foes deal bonus damage, +20% per rank. ',
			heat: [1, 1, 1, 1, 1],
			selected: []
		},
		{
			name: 'Lasting Consequences',
			description: 'Any Health effects restore less of your Life Total than usual, -25% per rank. ',
			heat: [1, 1, 1, 1],
			selected: []
		},
		{
			name: 'Convenience Fee',
			description: 'All Obols prices are higher, +40% per rank. ',
			heat: [1, 1],
			selected: []
		},
		{
			name: 'Jury Summons',
			description: 'Foes in standard Encounters appear in greater nummbers, +20% per rank. ',
			heat: [1, 1, 1],
			selected: []
		},
		{
			name: 'Extreme Measures',
			description:
				"Each Underworld region's Bosses gain new techniques, 1 region per rank (Tartarus first). ",
			heat: [1, 2, 3, 4],
			selected: []
		},
		{
			name: 'Calisthenics Program',
			description: 'All foes have higher Life Totals, +15% Health per rank. ',
			heat: [1, 1],
			selected: []
		},
		{
			name: 'Benefits Package',
			description:
				'Most Armored foes have Perks (dangerous traits that vary per Encounter), +1 per rank. ',
			heat: [2, 3],
			selected: []
		},
		{
			name: 'Middle Management',
			description:
				'Each Mini-boss Encounter contains +1 Armored foe (or some additional problem). ',
			heat: [2],
			selected: []
		},
		{
			name: 'Underworld Customs',
			description: 'The exit to each Underworld region requires you to purge 1 Boon to unlock it. ',
			heat: [2],
			selected: []
		},
		{
			name: 'Forced Overtime',
			description: 'All foes have bonus move speed and attack speed, +20% per rank. ',
			heat: [3, 3],
			selected: []
		},
		{
			name: 'Heightened Security',
			description: 'All Traps and Magma deal +400% bonus damage. ',
			heat: [1],
			selected: []
		},
		{
			name: 'Routine Inspections',
			description:
				'Your Talents from the Mirror of Night are deactivated, -3 per rank, (from the bottom up). ',
			heat: [2, 2, 2, 2],
			selected: []
		},
		{
			name: 'Damage Control',
			description:
				'All foes have Shielded Health, making them ignore initial instances of damage, 1 hit per rank. ',
			heat: [1, 1],
			selected: []
		},
		{
			name: 'Approval Process',
			description: 'You have fewer choices when offered Boons, items or upgrades, -1 per rank. ',
			heat: [2, 3],
			selected: []
		},
		{
			name: 'Tight Deadline',
			description:
				'You get 9 Min. to clear each Underworld region (or else!), reduced by -2 Min. per rank. ',
			heat: [1, 2, 3],
			selected: []
		}
	];

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

<div class="header">
	<h1>Conditions</h1>
	<div>
		<h2>{totalHeat}</h2>
		<img alt="heat icon" id="heatIcon" src="/Heat.webp" />
	</div>
</div>

{#each conditions as { name, description, heat }, index}
	<div class="condition">
		<div class="name">{name}</div>
		<div class="checkboxes">
			{#each heat as h, heatIndex}
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
	<div class="description">{description}</div>
{/each}

<div id="getLink" on:click={handleGetLinkClick}>Get shareable link!</div>
<SvelteToast />

<style>
	:global(body) {
		background-color: #393330;
		color: white;
		display: flex;
		justify-content: center;
		font-family: 'Alegreya Sans';
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

	#getLink {
		cursor: pointer;
		padding: 20px;
		text-align: center;
	}
</style>
