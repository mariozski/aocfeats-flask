define(["/static/js/v3/Feat.min.js", "/static/js/v3/FeatDescription.min.js"],
    function (Feat, FeatDescription) {

return function() {
 return {
            treeNames: ["Juggernaut", "Tempest"],
            id: "114",
            feats: [
new Feat(20000, 1, 1, 3, 0, 5, null,
    new FeatDescription("Toughness",
        [{s:[1,2,3,4,5], suf:'%', t:"Bonus armor"},
        {s:[31.9,40.3,48,56.6,72.8], suf:'', t:"Natural Health Regen"}],
   	   "Increases the guardian's armor and health regeneration rate.")),
new Feat(20100, 1, 2, 2, 1, 5, null,
    new FeatDescription("Ability - Cry of Havoc",
        [{s:[0,100,200,300,400], suf:'%', t:"Increase to damage or healing on Cry of Havoc"}],
    	   "Grants an ability which allows the guardian to unleash a furious shout which inflicts a minor amount of damage on the closest 4 enemies. This ability generates a high amount of threat. Investing feat points increases both effects.")),
new Feat(21700, 1, 2, 5, 13, 5, null,
    new FeatDescription("Prowess",
    	   [],
    	   "Increases the damage done by the Dulling Blow and the Overreach combos by 1% per feat point invested")),
new Feat(21300, 1, 3, 2, 3, 3, null,
    new FeatDescription("Ability - Battle Cry",
    	   [],
    	   "Grants a special ability that increases the rate of Stamina and Energy regeneration for all team members.")),
new Feat(21400, 1, 3, 3, 4, 3, [3,2],
    new FeatDescription("Ardent Battle Cry",
        [{s:[2,3,5], suf:'%', t:"Base Spell Damage"},
        {s:[14,28,42], suf:'%', t:"Weapon Damage"}],
   	   "Augments the Battle Cry ability with a team-wide damage bonus on attacks.")),
new Feat(20200, 1, 3, 5, 2, 5, null,
    new FeatDescription("Savage Counterstrike",
    	   [],
    	   "Increases all retaliatory damage on Counterstrike combos by 5% per feat point invested.")),
new Feat(21500, 1, 4, 2, 6, 5, null,
    new FeatDescription("Morale Boost",
        [{s:[0,7.5,15,22.5,30], suf:'%', t:"Increase to damage or healing on Plexus Strike"},
        {s:[0,100,200,300,400], suf:'%', t:"Increase to damage or healing on Morale Boost"}],
   	    "Augments the Plexus Strike combo by bestowing a portion of the drained Stamina and Energy on all team members. Invested feat points also increase the power of the draining effect on Plexus Strike.")),
new Feat(25300, 1, 4, 3, 7, 5, null,
    new FeatDescription("Momentum",
        [{s:[20,40,60,80,100], suf:'%', t:"Increase to damage or healing on Impale"},
        {s:[4,8,12,16,20], suf:'%', t:"Increase to Damage Per Second on Charge, Impale and Stunning Charge"}],
   	   "Increases the damage inflicted by any of the guardian's charge abilities and reduces the cooldown of them.")),
new Feat(20400, 1, 4, 5, 23, 5, null,
    new FeatDescription("Enraged Spirit",
    	   [],
    	   "Augments the weapon damage bonus granted by the guardian's Wrath stack. The initial Wrath effect is increased by 20% per feat point invested.")),
new Feat(21600, 1, 5, 2, 9, 1, null,
    new FeatDescription("Readiness",
        [{s:[-6], suf:'s', t:"Reduce cooldown on Shield Sweep"},
        {s:[-5], suf:'s', t:"Reduce cooldown on Titanic Smash"},
        {s:[-4], suf:'s', t:"Reduce cooldown on Strike and Guard"},
        {s:[-3], suf:'s', t:"Reduce cooldown on Bloody Vengeance, Guard Destroyer and Shield Strike"},
        {s:[-2], suf:'s', t:"Reduce cooldown on Counterstrike, Counterweight, Overreach and Deliberate Reprisal"},
        {s:[-1], suf:'s', t:"Reduce cooldown on Dulling Blow and Shield Slam"}],
    "Increases the rate of all one-handed weapon combos, reducing the time between uses.")),
new Feat(20600, 1, 5, 5, 10, 1, null,
    new FeatDescription("Ability - Stunning Charge",
    	   [],
    	   "Grants an ability that initiates a charge, which briefly stuns the target for 3 seconds.")),
new Feat(20500, 1, 5, 6, 11, 2, null,
    new FeatDescription("Improved Shield Bash",
        [],
    	"Improves the Shield Sweep combo by adding a Snare effect, reducing the movement speed of the target by 35/60%.")),
new Feat(21800, 1, 6, 1, 12, 1, null,
    new FeatDescription("Brutal Blows",
    	   [],
    	   "Improves the Dulling Blow and Overreach combos by increasing their Critical Chance by 10%.")),
new Feat(20300, 1, 6, 2, 8, 5, null,
    new FeatDescription("Savage Strikes",
        [{s:[86,172,258,344,430], suf:'', t:"Combat Rating"}],
    	"Increases the damage of the guardian's blows.")),
new Feat(21000, 1, 6, 4, 24, 1, null,
    new FeatDescription("Shield Mastery",
    	   [],
    	   "The guardian specializes in using shields. Grants the Shield Slam and Shield Strike combos.<br/><br/>Shield Slam lets the guardian slam his shield into enemies causing a high amount of Hate.<br/><br/>Shield Strike lets the guardian stun their target for 4.5 seconds.")),
new Feat(20800, 1, 6, 5, 15, 1, null,
    new FeatDescription("Ability - Stand Your Ground",
    	   [],
    	   "Makes all team members less suspectible to knockbacks effects. Also while this effect is active the guardian's Shield Sweep combo will fling targets further away from the guardian.")),
new Feat(20700, 1, 6, 6, 16, 5, null,
    new FeatDescription("Improved Dulling Blow",
            [],
    	   "Augments the Dulling Blow combo with an increased Evade Chance effect for a short time afterwards.")),
new Feat(22000, 1, 7, 2, 25, 5, null,
    new FeatDescription("Brutal Destroyer",
    	   [],
    	   "Augments the Guard Destroyer combo by increasing the Critical Chance of your next Overreach, Titanic Smash and Dulling Blow combos by 6% per feat point invested.")),
new Feat(20900, 1, 7, 4, 24, 2, [6,4],
    new FeatDescription("Improved Shield Mastery",
        [{s:[2,5], suf:'%', t:"Increase Hate Adjustment on Shield Slam"},
        {s:[-7.5,-15], suf:'', t:"Decrease to cooldown time on Shield Strike"}],
   	   "Improves the Shield Mastery combos by increasing the hate generated by Shield Slam and lowering the reuse time on Shield Strike.")),
new Feat(21900, 1, 7, 5, 19, 5, null,
    new FeatDescription("Ability - Call to Arms",
    	   [],
    	   "Grants the guardian an ability which makes their attacks even more threatening. Also while this effect is active the guardian's team members do extra damage.")),
new Feat(22100, 1, 8, 2, 27, 5, [7,2],
    new FeatDescription("Retribution",
    	   [],
    	   "Grants the guardian a chance of increasing his Vengeance counter when being struck in combat. This effect can be applied only once every few seconds. Investing feat points increases the chance of this happening.")),
new Feat(25800, 1, 8, 3, 22, 1, null,
    new FeatDescription("Combo - Titanic Smash",
    	   [],
    	   "Grants the guardian the Titanic Smash combo - a powerful attack that has a high chance of critically injuring enemies and applies physical torment debuff on the target.")),
new Feat(21100, 1, 8, 5, 21, 5, [7,5],
    new FeatDescription("Combo - Strike and Guard",
        [],
   	   "Grants the guardian the Strike and Guard combo - delivering a powerful strike before increasing the guardian's defense for a short time. Investing more feat points increases the defense.")),
new Feat(25100, 1, 9, 2, 20, 1, [8,2],
    new FeatDescription("Ability - Powerhouse",
    	   [],
    	   "Grants an ability that increases the guardian's Weapon Damage and Critical Rating. Also when this effect is active the guardian's critical hits will increase their Critical Bonus Damage for a short time.")),
new Feat(21200, 1, 9, 5, 26, 1, [8,5],
    new FeatDescription("Ability - Juggernaut",
    	   [],
    	   "Grants the soldier an ability which makes the guardian an unstoppable hulk for 20 seconds, increasing their resistance to physical and magical attacks. The Juggernaut feat also passively adds a reactive healing proc to the Counterstrike and Deliberate Reprisal combos.")),
new Feat(22300, 2, 1, 3, 28, 5, null,
    new FeatDescription("Storm Blade",
        [{s:[0,5,10,20,30], suf:'%', t:"Increase to damage on Storm Blade"}],
    	"All of the guardian's melee attacks have a small chance of inflicting additional slashing damage.")),
new Feat(22400, 2, 2, 2, 29, 5, null,
    new FeatDescription("Relentless",
    	   [{s:[2,4,6,8,10], suf:'%', t:"Resistance to Stun and Fear effects"}],
    	   "Increases the guardian's resistance to Stun and Fear effects.")),
new Feat(23500, 2, 2, 5, 30, 5, null,
    new FeatDescription("Revenge",
    	   [{s:[5,10,15,20,25],suf:'%',t:"Increase to damage or healing on Deliberate Reprisal and Guard"}],
    	   "Increases the damage inflicted by the retaliatory strikes of the guardian's Guard combos.")),
new Feat(22500, 2, 3, 2, 31, 5, null,
    new FeatDescription("Power Sweeps",
    	   [{s:[1,2,3,4,5], suf:'%', t:"Increase to Damage Per Second on Flashing Arc"}],
    	   "Increases the damage inflicted by Flashing Arc combos.")),
new Feat(22700, 2, 3, 3, 32, 1, [3,2],
    new FeatDescription("Brutal Sweeps",
    	   [{s:[10], suf:'%',t:"Increase Critical Chance on Flashing Arc and Counterweight"}],
    	   "Increases the chance of inflicting critical damage with Flashing Arc combos.")),
new Feat(23600, 2, 3, 5, 33, 5, null,
    new FeatDescription("Ability - Intimidating Shout",
    	   [{s:[0,2,4,6,8],suf:'s',t:"Duration on Traumatic Wounds"}],
    	   "Grants the guardian the ability to unleash an intimidating shout, inflicting Traumatic Wounds to the four closest enemies. Investing more feat points increases the duration of the bleed.")),
new Feat(22600, 2, 4, 2, 34, 5, null,
    new FeatDescription("Stalwart",
        [{s:[40,80,120,160,200], suf:'', t:"Hit Rating"},
        {s:[40,80,120,160,200], suf:'', t:"Critical Damage Rating"}],
    	   "Increases the guardian's Hit and Critical Damage Ratings.")),
new Feat(22900, 2, 4, 3, 35, 3, null,
    new FeatDescription("Ability - Disarming Aggression",
        [],
    	"Grants an ability that increases the damage done by pole arm combos by 4/8/12% for 15 seconds. If the guardian is in Frenzy Stance, this will also reduce the hate generated by the guardian's attacks by 10/20/30%.")),
new Feat(25400, 2, 4, 5, 36, 5, null,
    new FeatDescription("Redoubt",
    	   [],
    	   "When struck with a melee attack, there is a small chance of increasing the chance to evade future attacks for a short period of time. This effect is limited to occur once every few seconds.")),
new Feat(23000, 2, 5, 2, 37, 1, null,
    new FeatDescription("Relentless Assault",
        [{s:[-10], suf:'s', t:"Reduce cooldown on Disable, Skewer and Stagger"},
        {s:[-5], suf:'s', t:"Reduce cooldown on Guard, Storm Strike"},
        {s:[-3], suf:'s', t:"Reduce cooldown on Riposte and Bloody Vengeance"},
        {s:[-1], suf:'s', t:"Reduce cooldown on Counterweight and Flashing Arc"}],
    	"Reduces the reuse time for all pole arm combos.")),
new Feat(23700, 2, 5, 5, 38, 1, null,
    new FeatDescription("Ability - Impale",
    	   [],
    	   "Grants the guardian an ability allowing them to charge their target and inflict a bleeding wound. A pole arm must be equipped.")),
new Feat(23900, 2, 5, 6, 42, 2, null,
    new FeatDescription("Sweep the Field",
    	   [],
    	   "Increases the knockback distance of the guardian's Stagger combos.")),
new Feat(23100, 2, 6, 2, 52, 5, null,
    new FeatDescription("Precise Attacks",
        [{s:[122,243,364,486,610], suf:'', t:"Armor Penetration"}],
   	   "The guardian becomes more adept at exploiting weaknesses in the target's armor.")),
new Feat(23300, 2, 6, 3, 41, 3, null,
    new FeatDescription("Combo - Skewer",
        [{s:[0,1.5,3], suf:'s', t:"Duration on Skewered"}],
   	   "Grants the guardian the Skewer combo - a powerful pole arm attack that impales the target, reducing their movement speed. Investing more feat points increases the duration of the snare effect.")),
new Feat(22800, 2, 6, 4, 39, 1, null,
    new FeatDescription("Brutal Maiming",
    	   [],
    	   "Increases the chance of the Disable combo inflicting critical damage.")),
new Feat(23800, 2, 6, 5, 43, 5, null,
    new FeatDescription("Master Pikeman",
        [{s:[2,4,6,8,19],suf:'%',t:'Increase to Damage Per Second'}],
    	"<div class='small-title'>Affects:</div><ul><li>Counterweight</li><li>Deliberate Reprisal</li><li>Disable</li><li>Flashing Arc</li><li>Guard</li><li>Riposte</li><li>Stagger</li></ul>Increases the damage done by many pole arm combos.")),
new Feat(24000, 2, 6, 6, 44, 3, [6,5],
    new FeatDescription("Crippling Thrusts",
    	   [{s:[15,30,50], suf:'%', t:"Increase to damage or healing on Disable"}],
    	   "Increases the Stamina drained by all the guardian's Disable combos.")),
new Feat(24900, 2, 7, 2, 53, 5, null,
    new FeatDescription("Fortitude",
    	   [],
    	   "Increases the guardian's Combat Rating based on his Constitution by (10/20/30/40/50%).")),
new Feat(25700, 2, 7, 3, 45, 1, null,
    new FeatDescription("Combo - Riposte",
    	   [],
    	   "Grants the guardian the Riposte combo - a quick combo that inflicts greatly increased damage if used shortly after the guardian evades an attack.")),
new Feat(23200, 2, 7, 5, 46, 5, null,
    new FeatDescription("Hateful Vengeance",
    	   [],
    	   "Improves the damage bonus received from the Vengeance effect.")),
new Feat(24100, 2, 8, 2, 47, 5, [7,2],
    new FeatDescription("Subterfuge",
    	   [],
    	   "When dropping below 30% health, the guardian gains increased 4/8/12/16/20% evade and immunity chance for 10 seconds. This effect is limited to once every 40 seconds.")),
new Feat(25500, 2, 8, 3, 48, 1, null,
    new FeatDescription("Defiance",
    	   [],
    	   "When the guardian is below 50% health, attacks against them have a high chance of regenerating health. This healing effect is limited to once every 30 seconds.")),
new Feat(25000, 2, 8, 5, 49, 5, [7,5],
    new FeatDescription("Vengeance is Mine",
    	   [],
    	   "Attacks have a chance of increasing the guardian's Vengeance counter. This effect is limited to once every few seconds. Additionally critical attacks have a 10/20/30/40/50% chance of triggering this effect.")),
new Feat(23400, 2, 9, 2, 50, 1, [8,2],
    new FeatDescription("Ability - Lightning Reflexes",
    	   [],
    	   "Grants an ability that increases the guardian's Evade Chance by 35% for 8 seconds. Redoubt and Subterfuge will not run while this effect is active. In addition, when this effect ends, the guardian will get a damage and hate increase based on the number of times evaded while the effect was active.")),
new Feat(24200, 2, 9, 5, 51, 1, [8,5],
    new FeatDescription("Combo - Storm Strike",
    	   [],
    	   "Grants the guardian the Storm Strike combo - a mighty lightning-charged attack that batters all nearby enemies."))
]}};

    });
