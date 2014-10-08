define(["/static/js/v3/Feat.min.js", "/static/js/v3/FeatDescription.min.js"],
    function (Feat, FeatDescription) {

return function() {
 return {
            treeNames: ["Thunder", "Lightning"],
            id: "11c",
            feats: [
	new Feat(230000, 1, 1, 3, 26, 5, null,
	    new FeatDescription('Growing Storm',
	        [],
	        "<div class='small-title'>Affects:</div><ul><li>Call Lightning</li><li>Storm Field</li><li>Lightning Strike</li><li>Charged Blast</li></ul>The mana cost of Life of Set is reduced for a short time after casting some offensive spells. This effect can be applied up to four times. Investing feat points further reduces the mana cost.")),
    new Feat(230100, 1, 2, 2, 28, 3, null,
        new FeatDescription('Spell - Storm Crown',
            [],
            "Grants a spell that surrounds the priest with a nimbus of electricity that will shock one nearby enemy every few seconds.<br/><br/> Investing feat points increases the damage done and the number of targets affected.")),
    new Feat(421000, 1, 2, 3, 29, 2, [2,2],
        new FeatDescription('Storm Throne',
            [
                {s: [100, 200], suf: '%', t: 'Increase to damage or healing on Storm Crown'}
            ],
            "Augments the Storm Crown spell by increasing the damage done and number of targets affected. In addition, targets struck by the tempest's Storm Crown have a 50% chance of becoming more vulnerable to elemental damage.")),
    new Feat(230900, 1, 3, 3, 32, 1, [2,3],
        new FeatDescription('Storm Regalia',
            [],
            "Augments the Storm Crown spell by increasing the electrical damage done by all team members and granting their weapon attacks a chance of restoring the team's mana.")),
    new Feat(231200, 1, 2, 5, 30, 3, null,
        new FeatDescription('Spell - Power of the Serpent Ring',
            [],
            "Grants the tempest an invocation which makes them incredibly resistant to magical damage for a short period of time. Additional ranks will increase the resistance granted by the effect.")),
    new Feat(232300, 1, 2, 6, 52, 2, null,
        new FeatDescription("Serpent's Twist",
            [
                {s: [5, 10], suf: '%', t: 'resistance to Snare'}
            ],
            "Increases the tempest's chance to resist most Snare effects.")),
    new Feat(235400, 1, 3, 2, 5, 4, null,
        new FeatDescription('Faithful of Set',
            [],
            "Casting Charged Blast, Call Lightning, Lightning Strike, and Storm Field increases the strength of the tempest's next Life of Set spell. This effect can be applied up to five times. Investing feat points increases the power of the effect.")),
    new Feat(235100, 1, 3, 5, 33, 5, [2,5],
        new FeatDescription('Wrath of the Serpent Ring',
            [],
            "Augments the Power of the Serpent Ring invocation, increasing the tempest's damage for a short period of time after being cast. Additional ranks will increase the power of the effect.")),
    new Feat(230300, 1, 4, 2, 53, 5, null,
        new FeatDescription('Spell - Static Blood',
            [],
            "Grants a spell that, for a short time, turns the tempest's blood static. Converting part of the electrical damage inflicted by the priest into healing. In addition, anyone attacking the tempest is inflicted with retributive damage.<br/><br/> Investing feat points increases the magic health tap and the retributive damage effects.")),
    new Feat(230800, 1, 4, 5, 35, 3, null,
        new FeatDescription('Spell - Idol of Set',
            [],
            "Grants a spell that enables the tempest to summon a stone idol that pulses lightning at a single nearby target. It also restores mana to nearby allies.<br/><br/> Investing feat points increases the damage inflicted by the idol.")),
    new Feat(234300, 1, 4, 6, 35, 2, [4,5],
        new FeatDescription("Idol of Set's Power",
            [],
            "Improves Idol of Set, enabling it to hit an additional target. The Idol also empowers the attacks of nearby allies with additional electrical damage and increases the damage done by all spells.<br/><br/> Any active Storm Field spells will be triggered by an Idol of Set's Power, damaging nearby enemies. Investing another feat point increases the electrical damage bonuses.")),
    new Feat(231500, 1, 5, 2, 36, 1, null,
        new FeatDescription("Spell - Set's Life Spark",
            [],
            "If the priest dies while Set   's Life Spark is running, they are automatically brought back to life after a short period of time so they can continue Set's work.")),
    new Feat(230600, 1, 5, 3, 37, 1, null,
        new FeatDescription('Empowered Life of Set',
            [],
            "Augments the Life of Set healing spell by empowering any affected target's next successful Lightning Strike, Storm Field, Charged Blast or melee attack with additional electrical damage.")),
    new Feat(235000, 1, 5, 5, 38, 5, [4,5],
        new FeatDescription('Symbiotic Idol of Set',
            [],
            "Augments the Idol of Set, granting the Tempest increased lightning damage for each friendly target affected by the Idol.")),
    new Feat(233700, 1, 6, 1, 20, 2, null,
        new FeatDescription('Titanic Storm',
            [],
            "Augments the Storm Field spell by increasing the damage radius by 1 meter per rank.")),
    new Feat(231700, 1, 6, 2, 54, 5, null,
        new FeatDescription('Thunder Storm',
            [],
            "Augments the Call Lightning and Storm Crown spells by increasing the base spell damage bonus granted through the Thunderhead buff and the electrical combat rating bonus granted through the Storm Regalia team buff.")),
    new Feat(231100, 1, 6, 4, 55, 1, null,
        new FeatDescription('Spell - Thundering Voice',
            [],
            "Using the authority of mighty Set, the priest compels their foe to complete silence for a short time, preventing spells from being cast. This spell will also interrupt any combo being performed.")),
    new Feat(231400, 1, 6, 5, 45, 1, null,
        new FeatDescription('Spell - Storm Blood',
            [],
            "Grants a spell that, for a short time, converts all electrical damage inflicted on the tempest into healing. While in effect any active hostile self centered area spell will stop running and cannot be recast until Storm Blood expires.")),
    new Feat(234500, 1, 6, 6, 43, 1, [4,6],
        new FeatDescription("Idol of Set's Supremacy",
            [],
            "Improves Idol of Set by allowing it to hit an additional target and cursing enemies damaged by the idol to also suffer additional damage from most of the attacks of the tempest's allies.")),
    new Feat(231000, 1, 7, 2, 49, 5, null,
        new FeatDescription('Spell - Triumphant Life of Set',
            [
                {s: [1,2,3,4,5], suf: '%', t: ' Spell Critical Chance on Triumphant Life of Set'},
                {s: [0,15,30,45,60], suf: '%', t: ' Increase to damage or healing on Triumphant Life of Set'}
            ],
            "Grants a spell that, when active, allows Life of Set to inflict electrical damage on up to 12 enemies nearby the tempest.<br/><br/> Investing feat points increases the chance of Triumphant Life of Set inflicting critical damage, and increases the damage it inflicts.")),
    new Feat(230700, 1, 7, 5, 46, 5, null,
        new FeatDescription('Spell - Vital Shock',
            [],
            "Grants a spell that inflicts electrical damage on the target and restores the health, mana, energy, and stamina of nearby friendly targets.<br/><br/> Investing feat points increases the health, mana, energy, and stamina gained, and decreases the reuse time of this spell.")),
    new Feat(233500, 1, 8, 2, 18, 5, [7,2],
        new FeatDescription("Set's Brutal Storm",
            [
                {s: [1,2,3,4,5], suf: '%', t: 'Spell Critical Chance on Storm Field'},
                {s: [10,20,30,40,50], suf: '%', t: 'Decrease casting time on Storm Field'},
                {s: [-1,-2,-3,-4,-5], suf: 's', t: 'Modify recast time on Storm Field'}
            ],
            "The awesome might of the snake god is brought to bear by the priest. Increasing the chance of Storm Field inflicting critical damage, and reducing the reuse and casting time of the spell.")),
    new Feat(235200, 1, 8, 4, 48, 1, [6,4],
        new FeatDescription('Staggering Voice',
            [],
            "Improves Thundering Voice, causing the target to be staggered by the authority of Set, slowing down their movement for a short time.")),
    new Feat(231300, 1, 8, 5, 55, 5, [7,5],
        new FeatDescription('Vitality of Set',
            [
                {s: [2.5,5,7.5,10,12.5], suf: '%', t: 'Spell Critical Chance on Vital Shock'},
                {s: [2,4,6,8,10], suf: '%', t: 'Increase to damage or healing on Vitalizing Jolt'}
            ],
            "The tempest calls upon the mighty power of Set to increase the magntiude and critical chance of healing and restoring their companions.")),
    new Feat(231600, 1, 9, 2, 50, 1, [8,2],
        new FeatDescription('Spell - Summon Aura of Nebthu',
            [],
            "Grants a spell that enables the tempest to summon a nebulous aura from Stygia's most ancient city, capable of blasting up to 12 enemies with lightning storms.<br/><br/> This feat also passively increases the maximum number of targets affected by the Storm Field spell by 2.")),
    new Feat(231800, 1, 9, 5, 51, 1, [8,5],
        new FeatDescription('Spell - Serpent Transmutation',
            [],
            "Grants a spell that enables the tempest to absorb most forms of damage so that they are healed instead of injured.")),
    new Feat(231900, 2, 1, 3, 0, 5, null,
        new FeatDescription('Arcing Charged Blast',
            [
                {s: [1,2,3,4,5], suf: '%', t: ' Spell Critical Chance on Charged Blast'},
                {s: [15,30,45,60,80], suf: '%', t: 'Splash Damage on Charged Blast'}
            ],
            "Augments the Charged Blast spell by Increasing the spell's critical chance and the splash damage it inflicts.")),
    new Feat(232000, 2, 2, 2, 1, 5, null,
        new FeatDescription('Improved Lightning Strike',
            [
                {s: [1.5,3,4.5,6,7.5], suf: '%', t: 'Increase to damage or healing on Lightning Strike'}
            ],
            "Augments the Lightning Strike spell by increasing the damage it inflicts.")),
    new Feat(233000, 2, 2, 5, 57, 5, null,
        new FeatDescription("Set's Empowerment",
            [
                {s: [18, 36, 54, 72, 92], suf: '', t: 'Hit Rating'},
                {s: [18, 36, 54, 72, 92], suf: '', t: 'Constitution'}
            ],
            "Increases the tempest's Constitution and Hit Rating.")),
    new Feat(233800, 2, 2, 6, 3, 1, null,
        new FeatDescription('Spell - Rousing Shock',
            [
            ],
            "Grants an ability that removes all Stun effects from the group, in addition to providing a short period of Stun immunity. Can be used while stunned.")),
    new Feat(234900, 2, 3, 2, 44, 3, null,
        new FeatDescription('Spark Storm',
            [
                {s: [0, 1.5, 3], suf: '%', t: 'Increase to damage or healing on Charged Blast.'}
            ],
            "Augments the Lightning Sparks spell by increasing the damage it inflicts. In addition, your Charged Blast and Lightning Strike spells have a chance to apply the Spark Storm effect. Spark Storm reduces the casting time of Lightning Sparks by 2 seconds and causes the sparks to be fired every 0.5 seconds. This effect cannot be triggered while Storm Field is active.<br/><br/>Investing feat points increases the damage of Lightning Sparks and the chance of gaining the Spark Storm effect.")),
    new Feat(230500, 2, 3, 3, 31, 3, null,
        new FeatDescription("Set's Entrapment",
            [
                {s: [0.5, 1, 1.5], suf: '', t: 'Duration'}
            ],
            "<div class='small-title'>Affects:</div><ul><li>Cobra Stare</li><li>Quicksand</li><li>Constriction</li></ul>Increases the duration of the tempest's Cobra Stare and Quicksand spells.")),
    new Feat(234000, 2, 3, 5, 6, 5, null,
        new FeatDescription('Static Charge',
            [
                {s: [12.4,24.7,37,49.4,61.8], suf: '', t: 'Magic Damage (Electrical)'}
            ],
            "Increases the damage done by the tempest's electrical attacks.")),
    new Feat(232200, 2, 4, 1, 7, 1, [4,2],
        new FeatDescription('Spell - Inner Charge',
            [
            ],
            "Grants the priest an ability which ensures their next Lightning Strike inflicts critical damage.")),
    new Feat(232100, 2, 4, 2, 8, 5, null,
        new FeatDescription('Brutal Lightning',
            [
                {s: [2,4,6,8,10], suf: '%', t: 'Spell Critical Chance'}
            ],
            "Increases the chance of Lightning Sparks and Lightning Strike causing critical damage.")),
    new Feat(233200, 2, 4, 4, 9, 1, [4,5],
        new FeatDescription('Spell - Blood Mana',
            [
            ],
            "Grants a quick casting invocation that increases the ability of the tempest and his allies to convert magical damage inflicted into mana points for themselves.")),
    new Feat(233300, 2, 4, 5, 10, 3, null,
        new FeatDescription('Ether Absorption',
            [
                {s: [1.5, 3, 4.5], suf: '%', t: 'Magical Mana Tap'}
            ],
            "Increases the amount of mana recovered by the tempest's magical attacks.")),
    new Feat(234100, 2, 4, 6, 11, 3, [4,5],
        new FeatDescription('Coalesce Ether',
            [
            ],
            "The Tempest and their teammates gain a proportion of the magical damage they inflict back as mana. All physical attacks by the tempest's teammates have a chance of giving mana back to the Tempest.")),
    new Feat(233400, 2, 5, 2, 12, 1, null,
        new FeatDescription('Spell - Elemental Fury',
            [
            ],
            "Grants a quick casting spell that blasts the area around the tempest with an electrical storm.")),
    new Feat(232400, 2, 5, 5, 4, 1, null,
        new FeatDescription('Spell - Force of Lightning',
            [
            ],
            "Grants a spell that enables the tempest to infuse a friendly target with electrical energy for 10 seconds, improving the Armor and Spell penetration of the target's attacks. Allies near the target also receive a lesser penetration bonus.")),
    new Feat(232600, 2, 6, 1, 14, 5, [4,1],
        new FeatDescription('Fury of the Storm',
            [
                {s: [8,16,24,32,40], suf: '%', t: ' Spell Critical Damage'}
            ],
            "<div class='small-title'>Affects:</div><ul><li>Cyclone of Set's Lightning Bolt</li><li>Lightning Sparks</li><li>Lightning Strike</li></ul>Increases the critical damage done by the Lightning Sparks and Lightning Strike invocations.")),
    new Feat(232500, 2, 6, 2, 15, 1, null,
        new FeatDescription('Spell - Column Lightning',
            [
            ],
            "Grants a spell that throws a powerful column of lightning at the target, inflicting area of effect electrical damage to all enemies between the target and the priest.")),
    new Feat(234700, 2, 6, 3, 16, 3, [6,2],
        new FeatDescription('Lightning Arc',
            [
                {s: [0, 100, 200], suf: '%', t: ' Increase to damage or healing on Lightning Arc'}
            ],
            "Augments the Column Lightning invocation, causing targets hit to pulse additional lingering electrical damage after being struck.<br/><br/>In addition, there is a significant chance to gain the Spark Storm effect when casting Charged Blast on a target affected by Lightning Arc.<br/><br/>Investing feat points increases the chance of triggering the Spark Storm effect by 33% per rank in addition to increasing the lingering electrical damage of Lightning Arc.")),
    new Feat(230400, 2, 6, 4, 44, 2, null,
        new FeatDescription('Spell - Lightning Cast',
            [
            ],
            "Grants the priest an ability to cast their next Lightning Strike or Healing Lotus spell instantaneously, but slightly increases the spell's reuse time.<br/><br/>Investing another feat point reduces the reuse time of this ability.")),
    new Feat(235300, 2, 6, 5, 1, 5, null,
        new FeatDescription('Improved Call Lightning',
            [
                {s: [-0.1,-0.2,-0.3,-0.4,-0.5], suf: 's', t: 'Decrease casting time on Call Lightning'},
                {s: [10,20,30,40,50], suf: '%', t: 'Increase to damage or healing on Call Lightning'}
            ],
            "Augments the Call Lightning spell by decreasing the casting time and increasing the damage it inflicts.")),
    new Feat(232700, 2, 7, 2, 2, 5, null,
        new FeatDescription('Jurisdiction of Set',
            [
                {s: [1,2,3,4,5], suf: 'm', t: 'Attack Range'},
                {s: [1,2,3,4,5], suf: '%', t: 'Increase to damage or healing'}
            ],
            "Augments the Charged Blast and Lightning Strike spells by increasing the range and the damage they inflict.")),
    new Feat(234800, 2, 7, 5, 58, 5, null,
        new FeatDescription('Spell - Fangs of Set',
            [
            ],
            "Grants a quick casting spell that numbs the enemy, severly reducing their chance to hit with physical attacks for 6 seconds. In addition, there is a significant chance of removing any snare immunity running on the target.<br/><br/>Investing feat points increases the target's miss chance by 18% and the chance of removing a snare immunity by 20% per rank.")),
    new Feat(232800, 2, 8, 2, 59, 5,[7,2],
        new FeatDescription('Lightning Storm Nimbus',
            [
            ],
            "Improves the Storm Nimbus invocation by increasing the magnitude of the team's critical hits, in addition to increasing the armor and spell penetration effect.")),
    new Feat(234400, 2, 8, 5, 23, 5, [7,5],
        new FeatDescription('Spell - Slip Free',
            [
            ],
            "Grants a spell that, when active, attempts to catch a snare or root for 12s. If a snare or root is caught, it is negated and the Tempest gains damage deflection and increased spell damage for 15s.")),
    new Feat(232900, 2, 9, 2, 19, 1, [8,2],
        new FeatDescription('Spell - Cyclone of Set',
            [
            ],
            "Grants a spell that enables the tempest to summon an elemental cyclone. The cyclone continually shocks enemies with lightning damage and slows down their movement within a 5 meter radius. The cyclone also inflicts forceful lightning bolt damage to enemies within a 3 meter radius. Investing points in Fury of the Storm increases the critical damage done by these lightning bolts.<br/><br/>In addition, the lightning bolts have a 15% chance to apply the Spark Storm effect. Spark Storm can only be triggered this way once every 15 seconds.")),
    new Feat(233900, 2, 9, 5, 25, 1, [8,5],
        new FeatDescription('Spell - Puppets of Set',
            [
            ],
            "Grants a ground target area spell that enables the priest to fear and damage up to 6 enemies. Making them confused and unable to take any action, while also affecting them with lingering Lightning Arc damage."))
]}};

    });