<script lang="ts">
	import '@fontsource/alegreya-sans';
	import { SvelteToast, toast } from '@zerodevx/svelte-toast';

	import { onMount } from 'svelte';
	import { page } from '$app/stores';
	import { talents } from './talents';

	onMount(async () => {
		if ($page.query.has('q')) {
			const q = $page.query.get('q');
			if (q.length === talents.length) {
				talents.forEach((_, index) => {
					talents[index].isRedSelected = Boolean(Number(q[index]));
				});
			}
		}
	});

	const handleGetLinkClick = () => {
		const query = talents
			.map((c) => {
				return c.isRedSelected ? 1 : 0;
			})
			.join('');
		const base = $page.host;
		navigator.clipboard.writeText(`https://${base}/mirror?q=${query}`);
		toast.push('Link copied to clipboard!');
	};
</script>

<svelte:head>
	<title>Mirror of Night</title>
</svelte:head>

<div class="link" on:click={handleGetLinkClick}>Get shareable link!</div>

<div class="header">
	<h1>Talents</h1>
</div>

{#each talents as { red, green, isRedSelected }}
	{#if isRedSelected}
		<div class="talent">
			<label class="checkbox">
				<div class="red name">{red.name}</div>
				<input type="checkbox" bind:checked={isRedSelected} />
			</label>
			<div class="value">{@html red.value}</div>
		</div>
		<div class="description">{@html red.description}</div>
	{:else}
		<div class="talent">
			<label class="checkbox">
				<div class="green name">{green.name}</div>
				<input type="checkbox" bind:checked={isRedSelected} />
			</label>
			<div class="value">{@html green.value}</div>
		</div>
		<div class="description">{@html green.description}</div>
	{/if}
{/each}

<a href="/" class="link">Looking for the Pact of Punishment?</a>

<SvelteToast />

<style>
	:global(body) {
		background-color: black;
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

	input[type='checkbox'] {
		display: none;
	}

	.header {
		align-items: baseline;
		display: flex;
		justify-content: space-between;
		width: 450px;
	}

	.green {
		color: #cdf62e;
	}

	.red {
		color: #fd401d;
	}

	.talent {
		display: flex;
		font-size: 20px;
		height: 32px;
		justify-content: space-between;
		margin-bottom: 32px;
		width: 450px;
	}

	.name {
		align-items: center;
		display: flex;
		font-weight: bold;
		padding: 3px 0;
		text-shadow: -1px -1px 1px #291f1a, 1px -1px 1px #291f1a, -1px 1px 1px #291f1a,
			1px 1px 1px #291f1a;
		text-transform: uppercase;
	}

	.checkbox {
		cursor: pointer;
	}

	.checkbox input {
		cursor: pointer;
	}

	.value {
		color: #73c645;
		font-weight: bold;
	}

	.description {
		display: none;
		margin-top: -32px;
		position: absolute;
	}

	.talent:hover + .description {
		display: block;
	}
</style>
