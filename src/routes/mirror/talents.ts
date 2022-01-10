interface Talent {
	name: string;
	description: string;
	value: string;
}

interface TalentPair {
	red: Talent;
	green: Talent;
	isRedSelected: boolean
}

export const talents: TalentPair[] = [
	{
		red: {
			name: 'Shadow Presence',
			description: 'Deal bonus <strong>Attack & Special</strong> damage when striking foes from behind, +10% per rank. ',
			value: '+50%',
		},
		green: {
			name: 'Fiery Presence',
			description: 'Deal bonus <strong>Attack & Special</strong> damage when striking undamaged foes, +15% per rank. ',
			value: '+75%',
		},
		isRedSelected: true
	},
	{
		red: {
			name: 'Chthonic Vitality',
			description: 'Restore a small amount of your <img alt="health icon" class="small-icon" src="/Heart.webp" /> (health) when you exit a chamber, +1 per rank. ',
			value: '3 <img alt="health up icon" class="small-icon" src="/HealthUp.webp" />',
		},
		green: {
			name: 'Dark Regeneration',
			description:
				'Restore some of your <img alt="health icon" class="small-icon" src="/Heart.webp" /> (health) when you collect <img alt="darkness icon" class="small-icon" src="/Darkness_Small.webp" /> 30% of the collected amount per rank. ',
			value: '+60% of <img alt="darkness icon" class="icon" src="/Darkness_Small.webp" />',
		},
		isRedSelected: true
	},
	{
		red: {
			name: 'Death Defiance',
			description:
				'Restore 50% <img alt="health icon" class="small-icon" src="/Heart.webp" /> (health) instead of dying when your Life Total is depleted, 1 time per rank. ',
			value: '3',
		},
		green: {
			name: 'Stubborn Defiance',
			description:
				'Restore 30% <img alt="health icon" class="small-icon" src="/Heart.webp" /> (health) instead of dying when your Life Total is depleted, 1 time <em>per chamber</em> ',
			value: '',
		},
		isRedSelected: true
	},
	{
		red: {
			name: 'Greater Reflex',
			description: 'Perform +1 additional <strong>Dash</strong> in quick succession. ',
			value: '+1 Dash',
		},
		green: {
			name: 'Ruthless Reflex',
			description:
				'Gain +50% damage and dodge chance for 2 Sec. when you <strong>Dash</strong> just before getting hit. ',
			value: '',
		},
		isRedSelected: true
	},
	{
		red: {
			name: 'Boiling Blood',
			description:
				'Each rank gives you +10% <strong>Attack & Special</strong> damage to foes with <img alt="cast ammo icon" class="small-icon" src="/Ammo.webp" /> (cast ammo) in them. ',
			value: '+50%',
		},
		green: {
			name: 'Abyssal Blood',
			description:
				"Remove move speed and damage of foes with <img alt='cast ammo icon' class='small-icon' src='/Ammo.webp' /> (cast ammo) in them, 6% per rank. ",
			value: '30%',
		},
		isRedSelected: true
	},
	{
		red: {
			name: 'Infernal Soul',
			description: 'Raise your supply of <img alt="cast ammo icon" class="small-icon" src="/Ammo.webp" /> (cast ammo) for your <strong>Cast</strong>, +1 per rank. ',
			value: '+2 <img alt="cast ammo icon" class="icon" src="/Ammo.webp" />',
		},
		green: {
			name: 'Stygian Soul',
			description:
				'Regenerate your <img alt="cast ammo icon" class="small-icon" src="/Ammo.webp" /> (cast ammo) for your <strong>Cast</strong> (<em>rather than pick it up</em>), faster by -1 Sec. per rank. ',
			value: '3 Sec.',
		},
		isRedSelected: true
	},
	{
		red: {
			name: 'Deep Pockets',
			description: 'Start each escape attempt from the House of Hades with some wealth, 10 <img alt="obol icon" class="small-icon" src="/Obol.webp" /> (obol) per rank. ',
			value: '100 <img alt="obol icon" class="icon" src="/Obol.webp" />',
		},
		green: {
			name: 'Golden Touch',
			description:
				'Gain wealth when you clear an Underworld region, 5% of your current <img alt="obol icon" class="small-icon" src="/Obol.webp" /> (obol) per rank. ',
			value: '+15% <img alt="obol icon" class="icon" src="/Obol.webp" />',
		},
		isRedSelected: true
	},
	{
		red: {
			name: 'Thick Skin',
			description:
				'Raise your Life Total, +5 <img alt="health up icon" class="small-icon" src="/HealthUp.webp" /> (health) per rank. ',
			value: '+50 <img alt="health up icon" class="small-icon" src="/HealthUp.webp" />',
		},
		green: {
			name: 'High Confidence',
			description: 'Deal bonus damage while your Life Total is at 80% <img alt="health icon" class="small-icon" src="/Heart.webp" /> (health) or above, +5% damage per rank. ',
			value: '+25%',
		},
		isRedSelected: true
	},
	{
		red: {
			name: 'Privileged Status',
			description:
				'Deal bonus damage vs. foes afflicted by at least 2 <em>Status Curse</em> effects, +20% per rank. ',
			value: '+40% vs.<img alt="status curse icon" class="icon" src="/Status_Curse.webp" />',
		},
		green: {
			name: 'Family Favorite',
			description:
				'Deal bonus damage for each Olympian whose Boons you have, +2.5% per rank. ',
			value: '+5% per Olympian',
		},
		isRedSelected: true
	},
	{
		red: {
			name: 'Olympian Favor',
			description: 'Raise your chance for a <strong>Boon</strong> to be Rare, +1% per rank. ',
			value: '+40%',
		},
		green: {
			name: 'Dark Foresight',
			description:
				'Raise your chance for Gold Laurel rewards (Boons, Hammers, Obol and Poms). ',
			value: '+20%',
		},
		isRedSelected: true
	},
	{
		red: {
			name: "Gods' Pride",
			description: 'Raise your chance for a <strong>Boon</strong> to be Epic, +1% per rank. ',
			value: '+20%',
		},
		green: {
			name: "Gods' Legacy",
			description:
				'Raise your chance for a <strong>Boon</strong> to be Legendary or Duo (<em>if possible</em>). 1% per rank. ',
			value: '+10%',
		},
		isRedSelected: true
	},
	{
		red: {
			name: 'Fated Authority',
			description:
				'Randomly alter the reward for the next chamber, 1 Dice total chances per rank',
			value: '8 dice',
		},
		green: {
			name: 'Fated Persuasion',
			description:
				'Randomly alter <strong>Boon</strong> and Well of Charon choices, 1 Dice per rank (<em>at a time</em>.',
			value: '4 dice',
		},
		isRedSelected: true
	},
];
