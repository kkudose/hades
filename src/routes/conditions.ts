interface Condition {
    name: string;
    description: string;
    heat: number[];
    selected: number[];
}

export const conditions: Condition[] = [
    {
        name: 'Hard Labor',
        description: 'All foes deal bonus damage, +20% per rank. ',
        heat: [1, 1, 1, 1, 1],
        selected: []
    },
    {
        name: 'Lasting Consequences',
        description: 'Any <img alt="health restore icon" class="small-icon" src="/HealthRestore.webp" /> (health) effects restore less of your Life Total than usual, -25% per rank. ',
        heat: [1, 1, 1, 1],
        selected: []
    },
    {
        name: 'Convenience Fee',
        description: 'All <img alt="obol icon" class="small-icon" src="/Obol.webp" /> (obol) prices are higher, +40% per rank. ',
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
            "Each Underworld region's <strong>Bosses</strong> gain new techniques, 1 region per rank (<em>Tartarus first</em>). ",
        heat: [1, 2, 3, 4],
        selected: []
    },
    {
        name: 'Calisthenics Program',
        description: 'All foes have higher Life Totals, +15% <img alt="health up icon" class="small-icon" src="/HealthUp.webp" /> (health) per rank. ',
        heat: [1, 1],
        selected: []
    },
    {
        name: 'Benefits Package',
        description:
            'Most <strong>Armored</strong> foes have <strong>Perks</strong> (<em>dangerous traits that vary per Encounter</em>), +1 per rank. ',
        heat: [2, 3],
        selected: []
    },
    {
        name: 'Middle Management',
        description:
            'Each <strong>Mini-boss</strong> Encounter contains +1 <strong>Armored</strong> foe (<em>or some additional problem</em>). ',
        heat: [2],
        selected: []
    },
    {
        name: 'Underworld Customs',
        description: 'The exit to each Underworld region requires you to purge 1 <strong>Boon</strong> to unlock it. ',
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
        description: 'All <strong>Traps</strong> and <strong>Magma</strong> deal +400% bonus damage. ',
        heat: [1],
        selected: []
    },
    {
        name: 'Routine Inspections',
        description:
            'Your <strong>Talents</strong> from the <strong>Mirror of Night</strong> are deactivated, -3 per rank, (<em>from the bottom up</em>). ',
        heat: [2, 2, 2, 2],
        selected: []
    },
    {
        name: 'Damage Control',
        description:
            'All foes have <img alt="shielded health icon" class="small-icon" src="/ShieldHealth.webp" /> (shielded health), making them ignore initial instances of damage, 1 hit per rank. ',
        heat: [1, 1],
        selected: []
    },
    {
        name: 'Approval Process',
        description: 'You have fewer choices when offered <strong>Boon</strong>, items or upgrades, -1 per rank. ',
        heat: [2, 3],
        selected: []
    },
    {
        name: 'Tight Deadline',
        description:
            'You get 9 Min. to clear each Underworld region (<em>or else!</em>), reduced by -2 Min. per rank. ',
        heat: [1, 2, 3],
        selected: []
    }
];