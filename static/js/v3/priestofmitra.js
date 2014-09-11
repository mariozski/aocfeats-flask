define(["/static/js/v3/Feat.min.js", "/static/js/v3/FeatDescription.min.js"],
    function (Feat, FeatDescription) {

return function() {
return {
    treeNames: ["Divinity", "Vengeance"],
    id: "118",
    feats: [
    // 0
    new Feat(190200, 1, 1, 3, 7, 5, null,
        new FeatDescription('Spiritual Vigor',
            [
                {s: [1, 2, 3, 4, 5], suf: '%', t: "Magical Health Tap"}
            ],
            "Converts part of the damage inflicted by priest into healing.")),
        // 1
        new Feat(190000, 1, 2, 2, 0, 5, null,
            new FeatDescription('Spell - Lance of Mitra',
                [],
                "Grants a spell that blasts all enemies in a column between the priest and their target with lance of holy damage.")),
        // 2
        new Feat(190300, 1, 2, 5, 2, 5, null,
            new FeatDescription('Holy Accession',
                [],
                "While the Wave of Life is in effect, the priest may be blessed with divine might and, for a short time, be able to cast their next holy damage spell at a decreased mana cost (20% for each point invested).")),
        // 3
        new Feat(190100, 1, 3, 2, 1, 5, [2, 2],
            new FeatDescription('Divine Lance',
                [
                    {s: [20, 40, 60, 80, 100], suf: '%', t: "Mana Cost on Lance of Mitra"},
                    {s: [0, 100, 200, 300, 400], suf: '%', t: "Increase to damage or healing on Divine Lance"}
                ],
                "Augments the Lance of Mitra prayer by healing all friendly targets in close proximity to enemies damaged by this divine spell. It also increases the mana cost of the Lance of Mitra prayer.")),
        // 4
        new Feat(191500, 1, 3, 4, 4, 1, null,
            new FeatDescription('Spell - Clarity of Mind',
                [],
                "Grants a spell that enables the Priest of Mitra to cast their next holy damage spell at no mana cost.")),
        // 5
        new Feat(190400, 1, 3, 5, 5, 5, null,
            new FeatDescription('Spiritual Feedback',
                [],
                "Every ally in the area of the priest's Wave of Life prayer increases the holy damage inflicted by the Priest of Mitra's spells for a short time")),
        // 6
        new Feat(190500, 1, 4, 2, 52, 3, null,
            new FeatDescription('Divine Intervention',
                [],
                "Improves the Avert Thine Eyes spell by increasing the target's chance to miss physical attacks by 5% for each feat point invested.")),
        // 7
        new Feat(190700, 1, 4, 5, 8, 5, null,
            new FeatDescription('Wrath of Mitra',
                [
                    {s: [17, 22.7, 28.4, 34.1, 56.8], suf: '', t: "Magic Damage (Holy)"}
                ],
                "The priest channels a portion of Mitra's divine wrath, increasing the holy damage inflicted by their spells.")),
        // 8
        new Feat(190600, 1, 5, 1, 6, 2, [5, 2],
            new FeatDescription('Blistering Radiance',
                [],
                "Augments the Light of Mitra prayer by infusing the Radiance prayer to inflict Blistering Wounds on enemies within the area of effect. Blistering Wounds reduces the power of incoming heals for a short time. Investing a second feat point doubles the effect.")),
        // 9
        new Feat(190900, 1, 5, 2, 10, 1, null,
            new FeatDescription('Spell - Light of Mitra',
                [],
                "Grants a prayer that, when active, improves Emanation of Life or Wave of Life spells with an additional stamina and mana regeneration increase for the priest and their companions. This prayer can not be invoked while Purification of Mitra is in effect.")),
        // 10
        new Feat(191800, 1, 5, 3, 18, 2, [5, 2],
            new FeatDescription('Improved Rejuvenation',
                [
                    {s: [2, 4], suf: '', t: "Duration on Rejuvenating Light"},
                    {s: [25, 50], suf: '%', t: "Increase to damage or healing on Rejuvenating Light"}
                ],
                "Improves the Light of Mitra prayer by increasing the duration of the stamina and mana regeneration effect. Additionally, increases the stamina and mana regeneration effect for the Priest of Mitra only.")),
        // 11
        new Feat(191600, 1, 5, 4, 11, 3, [3, 4],
            new FeatDescription('Force of Will',
                [],
                "The spell granted by Clarity of Mind is also empowered, increasing the damage of Mitra's Searing Eye by (5%, 10%, 15%), Cleansing Fire, and Repulse by (10%, 20%, 30%), and Lance of Mitra, Rebuke and Smite by (15%, 35%, 50%) depending on points invested.")),
        // 12
        new Feat(190800, 1, 5, 5, 9, 1, null,
            new FeatDescription('Spell - Condemnation',
                [],
                "Grants a spell that channels holy damage on a target. The cast time and damage intervals are reduced when the priest has the Holy Storm effect active. Demons or Undead affected by the full duration of this spell will sustain additional holy damage at the end of channeling, while minions affected by this spell will be instantly destroyed. The minion killing effect can only occur once every minute.")),
        // 13
        new Feat(191400, 1, 6, 1, 14, 2, null,
            new FeatDescription('Empowered Repulse',
                [
                    {s: [5, 10], suf: '%', t: " Increase to damage or healing on Repulse"}
                ],
                "Empowers the Repulse spell by increasing the damage done and the knockback distance by 1 meter per rank.")),
        // 14
        new Feat(191700, 1, 6, 2, 17, 5, null,
            new FeatDescription('Blessed Armor of Faith',
                [],
                "Improves the Armor of Faith prayer by increasing the Armor value by 10% per rank.")),
        // 15
        new Feat(191200, 1, 6, 4, 16, 2, [6, 5],
            new FeatDescription('Vengeful Blessing',
                [],
                "Augments the Blessing of Mitra spell by also increasing the friendly target's ranged and melee weapon damage by 50% and their and the priest's base spell damage by 12,5%")),
        // 16
        new Feat(191000, 1, 6, 5, 12, 1, null,
            new FeatDescription('Spell - Blessing of Mitra',
                [],
                "Grants a spell that enables the priest to bless a friendly target in the name of Mitra, reducing all damage inflicted on their ally for a short time.")),
        // 17
        new Feat(191900, 1, 7, 2, 21, 5, null,
            new FeatDescription('Divine Halo',
                [
                    {s: [0, 25, 50, 75, 100], suf: '%', t: " Increase to damage or healing on Divine Halo"}
                ],
                "<div class='small-title'>Added Chance on Hit Effect:</div><ul><li>Divine Blessing on self, 200 Procs per Minute</li></ul><div class='small-title'>Affects:</div><ul><li>Rebuke</li><li>Repulse</li><li>Smite</li></ul><div class='small-title'>Added Chance on Hit Effect:</div><ul><li>100% chance of Divine Blessing on self</li></ul><div class='small-title'>Affects:</div><ul><li>Cleansing Fire</li></li>Condemnation</li><li>Lance of Mitra</li><li>Mitra's Searing Eye</li></ul>Spells that inflict holy damage build up a Divine Blessing effect on the priest. Each stack of Divine Blessing increases the damage of Condemnation. When this effect reaches 5 stacks, the priest gains the Divine Halo effect which periodically heals the lowest health friendly target. A successful heal will consume one charge of the Divine Blessing stack. The Divine Halo effect ends when the Divine Blessing stack is removed. Secondary effects causing holy damage will not trigger Divine Blessing.")),
        // 18
        new Feat(191100, 1, 7, 5, 22, 5, null,
            new FeatDescription('Holy Conviction',
                [
                    {s: [2, 4, 6, 8, 10], suf: '%', t: 'Increase to damage or healing'}
                ],
                "<div class='small-title'>Affects:</div><ul><li>Condemnation</li><li>Lance of Mitra</li></ul>Increases the damage done by the Condemnation and Lance of Mitra spells")),
        // 19
        new Feat(192400, 1, 7, 6, 20, 1, null,
            new FeatDescription('Spell - Exorcism',
                [],
                "Grants a spell that removes Fear and Silence effects from the group, in addition to providing a short period of immunity.")),
        // 20
        new Feat(192100, 1, 8, 2, 13, 5, [7, 2],
            new FeatDescription('Divine Salvation',
                [
                    {s: [2, 4, 6, 8, 10], suf: '%', t: 'Spell Critical Chance on Divine Halo'},
                    {s: [2, 4, 6, 8, 10], suf: '%', t: 'Increase to damage or healing on Radiance'},
                    {s: [10, 20, 30, 40, 50], suf: '%', t: 'Increase to damage or healing on Divine Lance'}
                ],
                "The priest can call upon Mitra's divine might to increase the magnitude and critical chance of healing their companions.")),
        // 21
        new Feat(192200, 1, 8, 5, 13, 5, [7, 5],
            new FeatDescription('Holy Surge',
                [
                    {s: [3, 6, 9, 12, 15], suf: '%', t: 'Spell Critical Damage'},
                    {s: [2, 4, 6, 8, 10], suf: '%', t: ' Spell Critical Chance'}
                ],
                "<div class='small-title'>Affects:</div><ul><li>Condemnation</li><li>Lance of Mitra</li><li>Repulse</li><li>Smite</li></ul>The priest can call upon Mitra's divine might to increase the chance of critically striking their enemies.")),
        // 22
        new Feat(192500, 1, 8, 6, 19, 3, [7, 6],
            new FeatDescription('Spiritual Warding',
                [
                    {s: [10, 20, 30], suf: '%', t: 'resistance to Fear'},
                    {s: [10, 20, 30], suf: '%', t: ' resistance to Silence'}
                ],
                "Mitra protects his faithful servant, increasing the priest's resistances to Fear and Silence effects.")),
        // 23
        new Feat(192000, 1, 9, 2, 24, 1, [8, 2],
            new FeatDescription('Spell - Holy Cleansing',
                [
                    {s: [50], suf: '%', t: 'Increase to damage or healing on Divine Halo'}
                ],
                "Passively increases the amount of healing done by Divine Halo and grants a spell that cleanses the team through holy power, thereby greatly reducing all unholy and poison damage received while increasing the team's resistance to magic. All allies also inflict periodic holy damage on nearby enemies while Holy Cleansing is active. The holy damage inflicted increases substantially if the priest has Divine Halo running.<br /><br />Additionally, Holy Cleansing resets the cooldown of Condemnation and grants the priest Condemnation's Holy Storm effect.")),
        // 24
        new Feat(192600, 2, 1, 3, 26, 5, null,
            new FeatDescription('Improved Smite',
                [
                    {s: [1, 2, 3, 4, 5], suf: '%', t: 'Increase to damage or healing on Smite'}
                ],
                "Increases the damage done by the Smite incantation.")),
        // 25
        new Feat(192700, 2, 2, 2, 27, 5, null,
            new FeatDescription('Holy Vengeance',
                [
                ],
                "<div class='small-title'>Added Chance on Hit Effect:</div><ul><li>Holy Vengeance on self, 200 Procs per Minute on Wave of Life</li></ul>After casting Wave of Life, the priest is infused with the vengeance of Mitra. For a short time, the holy damage inflicted by their spells is increased. This effect starts at 5 stacks and decreases over time.")),
        // 26
        new Feat(193000, 2, 2, 5, 28, 5, null,
            new FeatDescription('Spell - Cleansing Fire',
                [
                    {s: [0, 10, 20, 30 , 40], suf: '%', t: 'Increase to damage or healing on Cleansing Fire'}
                ],
                "Grants a spell that sends out a wave of holy fire, burning enemies in a cone area in front of the Priest. Investing feat points increases the damage.")),
        // 27
        new Feat(192900, 2, 3, 1, 53, 2, null,
            new FeatDescription('Crucify',
                [
                    {s: [5, 10], suf: '%', t: 'Spell Critical Damage on Smite'},
                    {s: [1, 2], suf: '%', t: 'Spell Critical Chance on Smite'}
                ],
                "Increases the critical chance and critical damage multiplier of the Smite spell.")),
        // 28
        new Feat(193500, 2, 3, 2, 34, 3, null,
            new FeatDescription('Prolific Strikes',
                [
                    {s: [0.5, 1, 1.5], suf: '', t: 'Splash Radius'},
                    {s: [15, 30, 50], suf: '%', t: 'Splash Damage'}
                ],
                "<div class='small-title'>Affects:</div><ul><li>Rebuke</li><li>Smite</li></ul>Improves the Rebuke and Smite spells by increasing the damage and radius of their splash effects.")),
        // 29
        new Feat(193100, 2, 3, 5, 31, 3, [2, 5],
            new FeatDescription('Sacred Fire',
                [
                    {s: [0, 2, 4], suf: '', t: 'Duration on Sacred Fire'},
                    {s: [0, 100, 200], suf: '%', t: 'Increase to damage or healing on Sacred Fire'}
                ],
                "Augments the Cleansing Fire spell by addiny a lingering damage effect that bums the victim for a short time. Investing feat points increases the damage and duration of this effect.")),
        // 30
        new Feat(193200, 2, 4, 2, 32, 3, null,
            new FeatDescription('Glowing Radiance',
                [
                ],
                "Any allies affected by the Priest of Mitra's Radiance spell also have the damage inflicted by their attacks increased for a minute. Investing feat points increases the damage bonus.")),
        // 31
        new Feat(193300, 2, 4, 3, 33, 2, [4, 2],
            new FeatDescription('Inspiring Light',
                [
                ],
                "After casting the Radiance spell, the next Rebuke, Smite, Cleansing Fire, or Mitra's Searing Eye spell's mana cost is reduced by (50%, 100%) depending on points invested.")),
        // 32
        new Feat(194800, 2, 4, 4, 41, 3, [4, 5],
            new FeatDescription('Eye of Penance',
                [
                ],
                "Augments the Mitra's Searing Eye spell by infusing it with Eye of Penance, causing victims to lose mana and stamina over time. It also restores mana to the priest for each undead or demon affected by Mitra's Searing Eye. Investing feat points increases the amount of mana and stamina drained.")),
        // 33
        new Feat(194000, 2, 4, 5, 38, 1, null,
            new FeatDescription("Spell - Mitra's Searing Eye",
                [
                ],
                "Grants a spell that sears enemies in a column in front of the priest with a blast of holy energy.")),
        // 34
        new Feat(193600, 2, 4, 6, 35, 3, null,
            new FeatDescription('Revivication',
                [
                ],
                "When struck in combat, there is a high chance of triggering an Emanation of Life on the priest. More feat points significantly increase this chance, until it occurs every time. This effect can only refresh once every 10 seconds.")),
        // 35
        new Feat(193400, 2, 5, 1, 36, 1, [5, 2],
            new FeatDescription('Searing Light',
                [
                ],
                "Augments the Purification of Mitra prayer by infusing the Radiance prayer to inflict Searing Light damage on all enemies within the area of effect.")),

        // 36
        new Feat(193800, 2, 5, 2, 37, 1, null,
            new FeatDescription('Spell - Purification of Mitra',
                [
                ],
                "Grants a prayer that, when active, will inflict bursts of Purifying Light damage on enemies around the priest when either Emanation of Life or Wave of Life is cast. This prayer cannot be invoked while Light of Mitra is in effect.")),
        // 37
        new Feat(193900, 2, 5, 3, 45, 3, [5, 2],
            new FeatDescription('Improved Purification',
                [
                    {s: [2, 4, 6], suf: '', t: 'Duration on Purifying Light'}
                ],
                "Improves the Purification of Mitra prayer by increasing the duration of the Purifying Light effect.")),
        // 38
        new Feat(194500, 2, 5, 5, 40, 1, [4, 5],
            new FeatDescription('Sacred Smite',
                [
                ],
                "When you cast Mitra's Searing Eye on a target affected by your Sacred Fire effect, there is a 33/66/100% chance, based on the number of feats spent in Sacred Fire, to gain the Sacred Smite effect. Sacred Smite makes your next Smite instant cast and mana free, but the damage is reduced.")),
        // 39
        new Feat(194200, 2, 6, 1, 39, 2, [6, 2],
            new FeatDescription('Empowered Hand of Mitra',
                [
                    {s: [-50, -100], suf: '%', t: 'Decrease casting time on Hand of Mitra'}
                ],
                "Decreases the casting time and reduces the Magic Damage penalty on the Hand of Mitra prayer.")),

        // 40
        new Feat(194100, 2, 6, 2, 40, 3, null,
            new FeatDescription('Guiding Hand of Mitra',
                [
                    {s: [-30, -60, -90], suf: 's', t: 'Decrease recast time on Hand of Mitra'}
                ],
                "The benevolent guidance of Mitra reduces the refresh time of the Hand of Mitra prayer, enabling the priest to cast the spell at a faster rate.")),
        // 41
        new Feat(194900, 2, 6, 4, 50, 2, null,
            new FeatDescription('Relentless Faith',
                [
                    {s: [0.5, 1], suf: '', t: 'Duration'}
                ],
                "Increases the duration of the Condemn, Eye of Judgement and Repudiate spells.")),
        // 42
        new Feat(195100, 2, 6, 5, 46, 5, null,
            new FeatDescription('Revelation',
                [
                    {s: [-3, -6, -9, -12, -15], suf: '%', t: 'Mana Cost'}
                ],
                "Decreases the mana cost of the priest's Avert Thine Eyes, Condemn, Eye of Judgment, Repudiate, Repulse, and Soul of Mitra prayers.")),
        // 43
        new Feat(193700, 2, 6, 6, 43, 1, [4, 6],
            new FeatDescription('The Light Within',
                [
                    {s: [-3, -6, -9, -12, -15], suf: '%', t: 'Mana Cost'}
                ],
                "When triggered, Revivication will place an Emanation of Life on the priest's group. In addition, <ul><li>if Purification of Mitra is active, Revivication will inflict Purifying Light on enemies around the priest.</li><li>if Light of Mitra is active, Revivication will add a stamina and mana regeneration increase for the priest and their companions.</li><ul>")),
        // 44
        new Feat(194300, 2, 7, 2, 44, 5, null,
            new FeatDescription('Guardian Spirit',
                [
                    {s: [0, 100, 200, 300, 400], suf: '%', t: 'Increase to damage or healing on Guardian Spirit'}
                ],
                "Grants a spell that summons personal guardian spirits that inflict damage on anyone physically attacking group members. If this damage effect is not triggered by the end of the duration, a Health, Mana and Stamina renew effect will trigger instead. Investing feat points increases the damage inflicted by the priest's personal guardian spirit in addition to the renew effect.")),
        // 45
        new Feat(195200, 2, 7, 4, 49, 3, null,
            new FeatDescription('Undying Belief',
                [
                    {s: [-40, -80, -120], suf: 's', t: 'Decreast recast time on Sustaining Faith'}
                ],
                "Reduces the reuse time of the Sustaining Faith prayer.")),
        // 46
        new Feat(195000, 2, 7, 5, 54, 5, null,
            new FeatDescription('Ruthless Glare',
                [
                    {s: [2, 4, 6, 8, 10], suf: '%', t: 'Increase to damage or healing'}
                ],
                "Increases the damage done by the Cleansing Fire and Mitra's Searing Eye spells.")),
        // 47
        new Feat(194400, 2, 8, 2, 55, 5, [7, 2],
            new FeatDescription('Vengeful Devotion',
                [
                    {s: [-4, -8, -12, -16, -20], suf: 's', t: 'Modify recast time on Guardian Spirit'},
                    {s: [-20, -40, -60, -80, -100], suf: '%', t: 'Decrease casting time on Litany of Protection'}
                ],
                "The priest devotes their spirit to war by increasing the hit rating bonus bestowed by the Devotional Prayer, decreasing the casting time of the Litany of Protection, and by reducing the reuse time of the Guardian Spirit spell. Unyielding Wrath")),
        // 48
        new Feat(192800, 2, 8, 5, 32, 5, [7, 5],
            new FeatDescription('Unyielding Wrath',
                [
                    {s: [3, 6, 9, 12, 15], suf: '%', t: 'Spell Critical Damage'},
                    {s: [2, 4, 6, 8, 10], suf: '%', t: 'Spell Critical Chance'}
                ],
                "<div class='small-title'>Affects:</div><ul><li>Cleansing Fire</li><li>Mitra's Searing Eye</li><li>Purifying Light</li><li>Sacred Fire</li><li>Searing Light</li></ul>The priest can call upon Mitra's vengeful might to increase the chance of critically striking their enemies.")),
        // 49
        new Feat(194600, 2, 9, 2, 51, 1, [8, 2],
            new FeatDescription('Spell - Manifestation of Mitra',
                [
                    {s: [10], suf: '%', t: 'Decrease casting time on Mitra\'s Searing Eye'}
                ],
                "Passively decreases the casting time of Mitra's Searing Eye and grants a spell that summons a spirit to aid in battle, augmenting the attacks of all friendly targets close to the priest with a boosted critical chance, as well as converting parts of the damage they inflict into healing. It also increments soldier's Sadism, Furious Inspiration, or Vengeance counters.")),
        // 51
        new Feat(192300, 1, 9, 5, 25, 1, [8, 5],
            new FeatDescription('Spell - Avatar of Mitra',
                [
                    {s: [25], suf: '%', t: 'Spell Critical Damage on Condemnation'},
                    {s: [5], suf: 'm', t: 'Attack Range on Condemnation'},
                    {s: [5], suf: '%', t: 'Increase to damage or healing on Condemnation'}
                ],
                "Grants a spell that fills the priest with the essence of Mitra. This stuns nearby enemies for a short period of time, and fears undead and minions for a slightly longer time. <br /><br />This feat also passively increases the damage and range of Condemnation. In addition, if Holy Accession is trained, the priest gains Condemnation's Holy Storm effect when Holy Accession triggers. <br/><br />Holy Storm cannot trigger from this effect more than once every 15 seconds.")),
        // 50
        new Feat(194700, 2, 9, 5, 56, 1, [8, 5],
            new FeatDescription('Spell - Immortal Wrath',
                [
                    {s: [5], suf: 'm', t: 'Attack Range on Mitra\'s Searing Eye'},
                    {s: [5], suf: '%', t: 'Increase to damage or healing on Mitra\'s Searing Eye'}
                ],
                "Passively increases the damage and range of Mitra's Searing Eye and grants a spell that reduces the casting time and mana cost of Smite and Mitra's Searing Eye. Rebuke and Cleansing Fire can be cast instantly and also cost less mana. These effects last for 15 seconds."))

    ]
}};

    });
