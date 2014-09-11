define(["/static/js/v3/Feat.js", "/static/js/v3/FeatDescription.js"],
    function (Feat, FeatDescription) {

return function() {
return [
    // 0
    new Feat(420600,3, 1, 3, 14, 5, null,
        new FeatDescription('Rejuvenating Spirit',
            [{s: [2.5, 5, 7.5, 10, 12.5], suf: '%',  t: "Increase to damage or healing"}],
            "This spirit increases the power of the priest's Emanation of Life, Renewal and Healing Lotus spells.")),
    // 1
    new Feat(421400, 3, 2, 1, 1, 5, null,
        new FeatDescription('Spirit Armor',
            [{s: [132,263,395,527,659], suf: '',  t: "Armor"}],
            "Increases the priest's Armor.")),
    // 2
    new Feat(420000, 3, 2, 2, 2, 5, null,
        new FeatDescription('Ether Discharge',
            [],
            "Upgrades the Life of Set, Wave of Life and Blood Flow spells by adding an effect that restores the priest's mana over time. Each additional target which has the priest's healing spell running increases the power of the effect. Additional ranks in this feat increases the base effect.")),
    // 3
    new Feat(421200, 3, 2, 3, 0, 3, null,
        new FeatDescription('Ether Flow',
            [{s: [10, 20, 30], suf: '',  t: "Natural Mana Regen"}],
            "Increases the priests mana regeneration rate in and out of combat.")),
    // 4
    new Feat(420700, 3, 2, 4, 4, 2, null,
        new FeatDescription('Far-Reaching Spirit',
            [{s: [1, 2], suf: 'm',  t: "Increases the area of effect"}],
            "Increases the range of the priest's healing prayers Radiance, Vitalizing Jolt or Fierce Recovery.")),
    // 5
    new Feat(421100, 3, 2, 5, 3, 5, null,
        new FeatDescription('Grace',
            [{s: [-1, -2, -3, -4, -5], suf: '%',  t: "Hate Modifier"}],
            "An aura of divinity makes enemies less likely to break off from their current target to retaliate against the priest's attacks.")),
    // 6
    new Feat(421600, 3, 2, 6, 6, 5, null,
        new FeatDescription('Spirit Aegis',
            [{s: [44,88,133,177,221], suf: '',  t: "Protection"}],
            "Increases the priest's Protection, reducing the damage taken from magical attacks.")),
    // 7
    new Feat(421500, 3, 3, 1, 7, 3, [2,1],
        new FeatDescription('Saintly Warrior',
            [{s: [-1,-2,-3], suf: 's',  t: "Decrease recast time"}],
            "This spirit of renewal improves the priest's healing spells Wave of Life, Life of Set or Blood Flow by reducing the reuse time.")),
    // 8
    new Feat(420200, 3, 3, 2, 15, 3, null,
        new FeatDescription('Guiding Spirit',
            [{s: [-1,-2,-3], suf: 's',  t: "Decrease recast time"}],
            "This spirit of renewal improves the priest's healing spells Wave of Life, Life of Set or Blood Flow by reducing the reuse time.")),
    // 9
    new Feat(420800, 3, 3, 3, 9, 2, null,
        new FeatDescription('All-Encompassing Spirit',
            [],
            "The priest's enriched spirit increases the area of effect of their healing spells Wave of Life, Life of Set or Blood Flow by 1 meter per rank.")),
    // 10
    new Feat(420100, 3, 3, 4, 18, 3, [2,4],
        new FeatDescription('Presence of Mind',
            [{s: [-33, -66, -100], suf: '%', t: 'Decrease casting time'}],
            "Divine influence is never far from the priest, reducing the casting time of the healing spells Radiance, Vitalizing Jolt or Fierce Recovery.")),
    // 11
    new Feat(420500, 3, 3, 5, 5, 2, null,
        new FeatDescription('Vindicator',
            [],
            "Causes soldiers in Defensive Stance to provoke more hatred from their foes.")),
    // 12
    new Feat(421700, 3, 3, 6, 5, 2, [2,6],
        new FeatDescription('Saintly Martyr',
            [{s: [0, 100, 200], suf: '%', t: 'Increase to damage or healing on Saintly Martyr'}],
            "The priest has a chance of recovering mana and stamina when damaged by hostile magic.")),
    // 13
    new Feat(420300, 3, 4, 2, 13, 5, null,
        new FeatDescription('Exemplar',
            [
                {s: [3.5, 7, 10.5, 14, 17.5], suf: '%', t: 'Weapon Damage (Melee)'},
                {s: [11.4, 22.8, 34.2, 45.5, 57], suf: '', t: 'Magic Damage (Holy & Electrical)'}
            ],
            "The priest's divine spirit increases their melee damage and damage done by electrical and holy spells.")),
    // 14
    new Feat(432000, 3, 4, 4, 8, 5, null,
        new FeatDescription('Healing Spirit',
            [
                {s: [10, 20, 30, 40 ,50], suf: '%', t: 'Increase to damage or healing'}
            ],
            "This spirit increases the power of the priests self-heal component of the Wave of Life, Blood Flow and Life of Set spells.")),
    // 15
    new Feat(421300, 3, 4, 5, 17, 1, null,
        new FeatDescription('Spell - Shroud of the Gods',
            [
            ],
            "Grants the priest a spell that makes enemies in the vicinity less likely to attack the priest.")),
    // 16
    new Feat(420400, 3, 5, 2, 16, 1, null,
        new FeatDescription('Spell - Vengeance of the Gods',
            [
            ],
            "Grants the priest a spell which substantially increases the damage inflicted by their attacks for short period of time.")),
    // 17
    new Feat(420900, 3, 5, 4, 11, 1, null,
        new FeatDescription('Spirit of Vitality',
            [
            ],
            "Augments the Divine Vigor, Mark of Set and Spirit of the Bear spells by increasing the amount of life the priest and his team gain"))
]};

    });