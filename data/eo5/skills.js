const buildTitleClasses = (sharedSkillData, titleTreeData) => {
  let classes = {};

  for (let [titleName, tree] of Object.entries(titleTreeData)) {
    classes[titleName] = {};

    for (let [skillName, node] of Object.entries(tree)) {
      let base = sharedSkillData[skillName];
      if (!base) continue;

      classes[titleName][skillName] = {
        ...base,
        stats: [...(base.stats || [])],
        dep: { ...(node.dep || {}) },
        forward: { ...(node.forward || {}) },
        coords: { ...(node.coords || {}) }
      };
    }
  }

  return classes;
};

let templateSharedSkills = {

  

  speedUp: {
    name_en: "Speed Up",
    desc: "Increases the user's accuracy, evasion and speed.",
    stats: [],
    maxLevel: 8
  },
  hpUp: {
    name_en: "HP Up",
    desc: "Increases maximum HP.",
    stats: [],
    maxLevel: 8
  },
  statusAtkUp: {
    name_en: "Status ATK Up",
    desc: "Increases bind/ailment success rate.",
    stats: [],
    maxLevel: 8
  },
  physatkUp: {
    name_en: "Phys ATK Up",
    desc: "Increases physical attack power.",
    stats: [],
    maxLevel: 8
  },
  elematkUp: {
    name_en: "Elem ATK Up",
    desc: "Increases elemental attack power.",
    stats: [],
    maxLevel: 8
  },
  defUp: {
    name_en: "Def Up",
    desc: "Increases defense.",
    stats: [],
    maxLevel: 8
  },

  

  
  keeperOfSouls: {
    name_en: "Keeper of Souls", 
    desc: "When an ally dies, the user has a chance to immediately revive them.\nThe user gains Miasma Armor at the start of a battle.",
    
    stats: [],
    maxLevel: 6
  },
  erodingMiasma: {
    name_en: "Eroding Miasma",
    desc: "Reduces all enemies' defense for a set amount of turns.",
    stats: [],
    maxLevel: 8
  },
  stiflingMiasma: {
    name_en: "Stifling Miasma",
    desc: "Reduces all enemies' attack for a set amount of turns.",
    stats: [],
    maxLevel: 8
  },
  spiritAbsorb: {
    name_en: "Spirit Absorb",
    desc: "When the user inflicts a debuff, their HP is restored. \nThe restoration from Spirit Absorb can increase the user's maximum HP for one turn.",
    stats: [],
    maxLevel: 8
  },
  enshroud: {
    name_en: "Enshroud",
    desc: "Gain Miasma Armor for 3 turns, and for this turn, increases the user's evasion, damage taken and their chances to be targeted by enemies. \nWhen the user evades an attack, their evasion and chance to be targeted are decreased.",
    stats: [],
    maxLevel: 8
  },
  spectralSeep: {
    name_en: "Empty Moment",
    desc: "Places a buff on one row that enables party members to dodge one physical attack. \nWhen an attack is dodged, the buff is dispelled.",
    stats: [],
    maxLevel: 8
  },
  spitefulSpirit: {
    name_en: "Spiteful Spirit",
    desc: "When the user dodges an attack, they will counterattack the attack source with their equipped weapon. \nEach time the user counterattacks, the chance of activating again on that turn is decreased by 40%.",
    stats: ["INT"],
    maxLevel: 8
  },
  voidReaping: {
    name_en: "Void Reaping",
    desc: "Deals melee STR-based cut damage to one enemy. \nAttempts to inflict blind on the target.",
    stats: [],
    maxLevel: 8
  },
  temporalChimera: {
    name_en: "Temporal Chimera",
    desc: "Dispels Miasma Armor to use. The user will be replaced by an illusion, and take extra damage. \nAt the end of the turn if this illusion is still alive, the user returns to battle and deals ranged STR-based cut damage to all enemies. Reduced damage per enemy in battle.",
    
    
    stats: [],
    maxLevel: 8
  },
  bloodyReap: {
    name_en: "Bloody Reap",
    desc: "Consumes a percentage of the user's current HP to deal 2-4 of melee STR-based cut damage to random enemies.",
    stats: [],
    maxLevel: 8
  },

  bloodMoon: {
    name_en: "Blood Moon",
    desc: "When the user dodges an attack, their chance to be targeted and defense are increased. \nWhen the user is damaged, the effects are reset.",
    stats: [],
    maxLevel: 8
  },
  weightlessSoul: {
    name_en: "Weightless Soul", 
    desc: "Increases the user's evasion based on how many of their equipment slots are empty.",
    stats: [],
    maxLevel: 8
  },
  maskingMiasma: {
    name_en: "Masking Miasma",
    desc: "Reduces all enemies' accuracy for a set amount of turns.",
    stats: [],
    maxLevel: 8
  },
  nightfall: {
    name_en: "Nightfall",
    desc: "Gives the user a chance to automatically use Empty Moment at the start of a battle.",
    stats: [],
    maxLevel: 8
  },
  grimStalk: {
    name_en: "Grim Stalk", 
    desc: "Deals melee STR-based cut damage to one enemy. \nFor the rest of the turn, the user's evasion and chance to be targeted are increased.",
    stats: [],
    maxLevel: 8
  },

  reapersCall: {
    name_en: "Reaper's Call",
    desc: "For one turn, when the caster dodges an attack, all other party members in their row will counterattack the attack source.",
    stats: [],
    maxLevel: 8
  },
  gluttony: {
    name_en: "Gluttony",
    desc: "When the user dodges an attack, their Union gauge is restored.",
    stats: [],
    maxLevel: 8
  },
  darkPassenger: {
    name_en: "Dark Passenger",
    desc: "For one turn, increases all party members' evasion. \nEach time a party member dodges an attack, the bonus provided is decreased.",
    stats: [],
    maxLevel: 8
  },
  shredStrawman: {
    name_en: "Shred Strawman",
    desc: "Deals melee STR-based cut damage to one enemy. \nThe damage is multiplied by the amount of times the user has dodged an attack since the last use of this skill. ",
    stats: [],
    maxLevel: 8
  },


  endlessShroud: {
    name_en: "Endless Shroud",
    desc: "Gives the user a chance to gain the Miasma Armor state when using a debuff skill.",
    stats: [],
    maxLevel: 8
  },
  wiltingMiasma: {
    name_en: "Wilting Miasma",
    desc: "Increases all enemies' chance of being inflicted with ailments and binds for a set amount of turns.",
    stats: [],
    maxLevel: 8
  },
  relapseMiasma: {
    name_en: "Relapse Miasma",
    desc: "Reduces all enemies' recovery rate from ailments and binds for a set amount of turns.",
    stats: [],
    maxLevel: 8
  },
  atonement: {
    name_en: "Atonement",
    desc: "Requires the Miasma Armor state to use. \nEnds the Miasma Armor state, and restores all party members' HP. Also has a chance to cure ailments.",
    stats: [],
    maxLevel: 8
  },
  deathsAsylum: {
    name_en: "Death's Asylum",
    desc: "Gives the user's row a chance to nullify debuffs and ailments.",
    
    stats: [],
    maxLevel: 8
  },
  fadingScourge: {
    name_en: "Fading Scourge",
    desc: "Deals multiple instances of melee STR-based cut damage to one enemy and extend their de/buffs once per hit. \nThe amount of attacks is equal to the number of times the user hit an enemy on the last turn.",
    stats: [],
    maxLevel: 8
  },
  miasmaWall: {
    name_en: "Miasma Wall",
    desc: "Requires the Miasma Armor state to use. \nEnds the Miasma Armor state, and gives all party members a chance to nullify any ailments or binds for one turn. ",
    stats: [],
    maxLevel: 8
  },
  soulTransfer: {
    name_en: "Soul Transfer",
    desc: "Removes all debuffs from one enemy, and gives all party members a chance to revive at 1 HP after being killed for one turn.",
    stats: [],
    maxLevel: 8
  },
  ephemeralReap: {
    name_en: "Ephemeral Reap",
    desc: "Removes all debuffs from one enemy, and deals multiple instances of melee STR-based cut damage to the target equal to the number of debuffs removed. ", 
    
    stats: [],
    maxLevel: 8
  },
  speedUpHarb: {
    name_en: "Speed Up",
    desc: "Increases the user's accuracy, evasion and speed.",
    stats: [],
    maxLevel: 8
  },

  

  
  perfectTiming: {
    name_en: "Perfect Timing",
    desc: "Increases the user's damage and accuracy when they attack before any enemies have acted.",
    stats: [],
    maxLevel: 10
  },
  harvestTime: {
    name_en: "Harvest Time", 
    desc: "Reduces all enemies' action speed for the turn.\nThe user gains the Haste state for 3 turns.",
    stats: [],
    maxLevel: 6
  },
  writtenAgain: {
    name_en: "Written Again",
    desc: "At the end of the turn, deal ranged INT-based almighty damage to all enemies.\nRepeat this skill every turn until disabled.",
    stats: [],
    maxLevel: 8
  },
  blankChapter: {
    name_en: "Blank Chapter",
    desc: "Removes ailments/binds from all combatants, and recover their TP. If an ailment was removed from the user, gain Haste.",
    stats: [],
    maxLevel: 6
  },

  fateweaver: {
    name_en: "Fateweaver",
    desc: "When the user has the Haste state, increases their defense when they inflict an ailment.\nGives the user a chance to gain Haste for one turn at the start of battle.",
    stats: [],
    maxLevel: 6
  },
  wildParadox: {
    name_en: "Wild Paradox",
    desc: "Deals ranged INT-based fire+volt damage to one enemy, with splash damage.\nHas a 70% speed modifier and a base accuracy of 130% at all levels.",
    stats: [],
    maxLevel: 8
  },
  dustToDust: {
    name_en: "Dust to Dust",
    desc: "Requires Haste. Attempts to inflict poison on one row of enemies.",
    stats: [],
    maxLevel: 10
  },
  smearTheSoul: {
    name_en: "Smear the Soul", 
    desc: "Deals ranged INT-based ice damage on one row of enemies. Attempts to inflict curse on hit targets.",
    stats: [],
    maxLevel: 8
  },
  splitMoment: {
    name_en: "Split Moment",
    desc: "On the next turn, multi-target skills will become multi-hit.",
    stats: [],
    maxLevel: 8
  },
  anamnesis: {
    name_en: "Anamnesis",
    desc: "Requires and reduces the Haste state by 3 turns. \nRestores an allys' HP and TP.",
    stats: [],
    maxLevel: 10
  },

  inevitableEnd: {
    name_en: "Inevitable End", 
    desc: "Increases damage done against cursed targets.",
    stats: [],
    maxLevel: 10
  },
  stasisField: {
    name_en: "Stasis Field",
    desc: "Attempts to inflict paralysis on one row of enemies.",
    stats: [],
    maxLevel: 8
  },
  cursedEternity: {
    name_en: "Cursed Eternity",
    desc: "Extends curse's duration on one enemy.",
    stats: [],
    maxLevel: 6
  },

  realitySmearing: {
    name_en: "Reality Smearing",
    desc: "When the user has the Haste state, increases their damage when they inflict an ailment. This bonus is reset after the Haste state is ended.",
    stats: [],
    maxLevel: 10
  },
  zeroHour: {
    name_en: "Zero Hour",
    desc: "Requires a Warlock ailment skill to be used beforehand. Deals ranged INT-based fire+ice+volt damage to all enemies. Low accuracy.",
    stats: [],
    maxLevel: 10
  },
  timeDissonance: {
    name_en: "Time Dissonance",
    desc: "Reduces Haste by 3 turns. Attempts to inflict panic on one enemy.",
    stats: [],
    maxLevel: 10
  },
  wretchedSeal: {
    name_en: "Wretched Seal",
    desc: "Reduces an enemy's attack for a set amount of turns.\nAs long as the enemy is cursed, also reduces their defense.",
    stats: [],
    maxLevel: 8
  },
  ceaseToExist: {
    name_en: "Cease to Exist",
    desc: "Targets one enemy. If that enemy has an ailment, attempts to inflict petrification.",
    stats: [],
    maxLevel: 8
  },
  gravityWell: {
    name_en: "Gravity Well",
    desc: "Gives the user a chance to stun a random enemy at the start of battle.",
    
    
    
    stats: [],
    maxLevel: 10
  },
  fineTuning: {
    name_en: "Fine Tuning",
    desc: "Increases the user's chance of inflicting ailments, binds, and stuns.\nFurther increases if the user failed to inflict one last turn.",
    stats: [],
    maxLevel: 10
  },

  rethread: {
    name_en: "Rethread",
    desc: "Places a buff on one row that restores their HP at the end of every turn for a set amount of turns.",
    stats: [],
    maxLevel: 8
  },
  entropySpike: {
    name_en: "Entropy Spike",
    desc: "Deals ranged INT-based stab damage to one enemy. Reduces hit targets' defense for the turn.",
    
    stats: [],
    maxLevel: 10
  },
  convergeLine: {
    name_en: "Converge Line",
    desc: "On the next turn, multi-target skills will only hit one enemy. In exchange, their damage is increased.",
    stats: [],
    maxLevel: 8
  },

  spinFate: {
    name_en: "Spin Fate",
    desc: "When the user has the Haste state and they are targeted by an enemy attack, they have a chance to counterattack with ranged INT-based damage.",
    stats: [],
    maxLevel: 8
  },
  accelero: {
    name_en: "Accelero",
    desc: "Requires Haste. \nOne party member has a chance to act first on that turn.",
    stats: [],
    maxLevel: 6
  },
  sowAndReap: {
    
    
    name_en: "Sow and Reap",
    desc: "Deals ranged INT-based cut damage to one enemy. If the enemy has an ailment, restore HP to the user's row.",
    stats: [],
    maxLevel: 10
  },
  borrowTomorrow: {
    name_en: "Borrow Tomorrow", 
    desc: "Restores one party member's Union. Attempt to inflict stun on the party.",
    stats: [],
    maxLevel: 8
  },
  falseEvent: {
    name_en: "False Event",
    desc: "Gives a chance to negate elemental attacks on the user's row.",
    stats: [],
    maxLevel: 10
  },
  riftline: {
    name_en: "Riftline",
    desc: "All single-target skills become line-piercing.\nPiercing attacks deal reduced damage to back-row enemies, but targeting the back row or using piercing skills increases their damage instead.",
    stats: [],
    maxLevel: 10
  },
  borrowedTime: {
    name_en: "Borrowed Time",
    desc: "Removes the need to use a turn to use Incantation skills, but increases the TP cost of Incantation skills as well.",
    stats: [],
    maxLevel: 6
  },
  


  
  blitzBrawler: {
    name_en: "Blitz Brawler",
    desc: "Increase the user's speed.\nOn the first turn of battle, increase damage and infliction rate.",
    stats: [],
    maxLevel: 10
  },
  followThrough: {
    name_en: "Follow Through",
    desc: "Increases damage when attacking enemies that the user attacked last turn.",
    stats: [],
    maxLevel: 10
  },
  concussion: {
    name_en: "Concussion",
    desc: "Opener. Deals melee STR-based bash damage to one enemy. May bind head.",
    stats: [],
    maxLevel: 8
  },
  armCrusher: {
    name_en: "Arm Crusher",
    desc: "Opener. Deals melee STR-based bash damage to one enemy. May bind arms.",
    stats: [],
    maxLevel: 8
  },
  lowBlow: {
    name_en: "Low Blow",
    desc: "Opener. Deals melee STR-based bash damage to one enemy. May bind legs.",
    stats: [],
    maxLevel: 8
  },
  oneTwoPunch: {
    name_en: "One-Two Punch",
    desc: "Deals melee STR-based bash damage to one enemy. The user has a chance to follow up the initial One-Two Punch hit with Concussion, Arm Crusher, and Low Blow, if the target does not have the body part for that respective skill bound.",
    stats: [],
    maxLevel: 8
  },
  faultBlocker: {
    name_en: "Fault Blocker",
    desc: "Reduces the chance of being afflicted with ailments and binds for party members in the user's row for a set amount of turns.",
    stats: [],
    maxLevel: 6
  },
  breather: {
    name_en: "Breather",
    desc: "Can only be used on an ally afflicted with an ailment or bind. \nRemoves all binds and ailments from the ally and increases the user's damage on the next turn.",
    stats: [],
    maxLevel: 6
  },
  knockoutBlow: {
    name_en: "Knockout Blow",
    desc: "Opener. Deals melee STR-based bash damage to one enemy. May sleep.",
    stats: [],
    maxLevel: 8
  },
  knuckleFever: {
    name_en: "Knuckle Fever",
    desc: "Increases physical attack for the user's row for a set amount of turns.",
    stats: [],
    maxLevel: 10
  },
  wildSwings: {
    name_en: "Wild Swings",
    desc: "Single-target skills have a chance to affect neighboring enemies. The chance is rolled for each enemy individually if there are two enemies next to the target, rather than once for both.",
    stats: [],
    maxLevel: 10
  },
  belowTheBelt: {
    name_en: "Below the Belt",
    desc: "Increases physical attack power. Low Blow receives a higher bonus.",
    stats: [],
    maxLevel: 8
  },
  crackBack: {
    name_en: "Crackback",
    desc: "For 3 turns, when the user is hit by a physical attack, they have a chance to enable Finisher skills next turn.",
    stats: [],
    maxLevel: 8
  },
  bulwarkArm: {
    name_en: "Bulwark Arm",
    desc: "When the user selects an enemy with a single-target attack, the user receives less damage from that enemy for the whole turn.",
    stats: [],
    maxLevel: 8
  },
  rhythmBreak: {
    name_en: "Rhythm Break",
    desc: "Deals melee STR-based bash damage to one enemy. Reduces the target's attack for that turn.",
    stats: [],
    maxLevel: 8
  },
  madLunge: {
    name_en: "Mad Lunge",
    desc: "Finisher. Deals melee STR-based bash damage to one enemy. Low accuracy.",
    stats: [],
    maxLevel: 8
  },
  breakfireRush: {
    name_en: "Breakfire Rush",
    desc: "Finisher. Deals multiple instances of melee fire damage to an enemy row.",
    stats: [],
    maxLevel: 8
  },
  jumpTheBell: {
    name_en: "Jump the Bell",
    desc: "At the start of battle, Finisher skills may be usable for one turn.",
    stats: [],
    maxLevel: 10
  },
  unyieldingWill: {
    name_en: "Unyielding Will",
    desc: "Increases the user's row' maximum HP for a set amount of turns.",
    stats: [],
    maxLevel: 8
  },
  forbiddenFist: {
    name_en: "Forbidden Fist",
    desc: "Deals melee STR-based bash damage to one enemy. Damage is increased depending on the number of Opener skills used this battle.",
    stats: [],
    maxLevel: 8
  },
  doublePunch: {
    name_en: "Double Punch",
    desc: "When a single-hit skill fails to inflict a bind/ailment, it may activate again.",
    stats: [],
    maxLevel: 10
  },
  pileOn: {
    name_en: "Pile On",
    desc: "Deals melee STR-based bash damage to one enemy. Increased damage on enemies inflicted by ailments/binds.",
    
    
    stats: [],
    maxLevel: 8
  },
  touchOfDeath: {
    name_en: "Touch of Death",
    desc: "Deals melee STR-based bash damage to one enemy. Attempts to inflict instant death on a bound target.",
    stats: [],
    maxLevel: 8
  },
  leadingBlow: {
    name_en: "Leading Blow",
    desc: "Deals melee STR-based bash damage to one enemy, with increased damage on enemies with an ailment. \nIf the target has binds, follows up with the following skills: Concussion for head bind, Arm Crusher for arm bind, Low Blow for leg bind.",
    
    stats: [],
    maxLevel: 4
  },
  statusAtkUpPug: {
    name_en: "Status Atk Up",
    desc: "Raises infliction chance.",
    stats: [],
    maxLevel: 10
  },
  lashOut: {
    name_en: "Lash Out",
    desc: "Deals multiple instances of melee STR-based bash damage to random enemies. Can hit the same target multiple times. The amount of attacks Lash Out deals is equal to the number of times the user hit an enemy on the last turn.",
    stats: [],
    maxLevel: 6
  },
  crossCounter: {
    name_en: "Cross Counter",
    desc: "For one turn, when an ally in the same row as the user first takes physical damage, the user will deal melee STR-based bash damage to the attacker. Attempts to bind whichever body part was used to attack the damage receiver.  Only activates once per turn.",
    stats: [],
    maxLevel: 8
  },
  disruptingFlurry: {
    name_en: "Disrupting Flurry",
    desc: "Finisher. Deals melee STR-based bash damage to all enemies. May inflict head, arms, legs bind.",
    stats: [],
    maxLevel: 8
  },
  clinch: {
    name_en: "Clinch",
    desc: "Attempts to bind the head, arms, and legs of both one enemy and the user. Each bind is rolled for individually.",
    stats: [],
    maxLevel: 10
  },
  crushingClout: {
    name_en: "Crushing Clout",
    desc: "Deals melee STR-based bash damage to one enemy, with splash damage. If the target has binds or ailments, attempts to spread them to adjacent enemies.",
    stats: [],
    maxLevel: 8
  },


  

  
  lastingFury: {
    name_en: "Lasting Fury",
    desc: "If the user attacked using a different element than the one they're using this turn, the previous turn's element is added to this one, and damage is increased.",
    stats: [],
    maxLevel: 8
  },
  revelInBlood: {
    name_en: "Revel in Blood",
    desc: "Apply a buff on the user for 3 turns.\nWhen their row is attacked by a physical attack, the user will have a chance to counterattack.",
    stats: [],
    maxLevel: 8
  },
  primevalZeal: {
    name_en: "Primeval Zeal",
    desc: "Apply a buff on the user for 3 turns.\nIncreases their row's elemental damage for the duration.",
    stats: [],
    maxLevel: 8
  },
  paleReflection: {
    name_en: "Pale Reflection",
    desc: "Prepare a Chaser at the start of the turn. After an ally performs an elemental attack, the user follows up with an attack of the same element.",
    
    stats: [],
    maxLevel: 8
  },
  meteorReign: {
    name_en: "Meteor Reign",
    desc: "Deals three actions of melee STR-based random elemental damage to one enemy.\nElements can be fire, ice, or volt.",
    stats: [],
    maxLevel: 8
  },
  endlessReach: {
    name_en: "Endless Reach",
    desc: "Deals ranged STR-based cut damage to one enemy.\nDeals less damage the closer you are to the enemy.",
    stats: [],
    maxLevel: 8
  },
  swallowFlash: {
    name_en: "Swallow Flash",
    desc: "Deals melee STR-based cut damage to one enemy. \nAfter the target has taken their turn, the user will attack them again and attempt to inflict blind.",
    stats: [],
    maxLevel: 8
  },
  armorPierce: {
    name_en: "Armor Pierce",
    desc: "Deals melee STR-based stab damage to one enemy. Reduces the target's defense against physical attacks for 3 turns.",
    stats: [],
    maxLevel: 8
  },
  footSweep: {
    name_en: "Foot Sweep",
    desc: "Deals melee STR-based cut damage to one row of enemies. Reduces hit enemies' speed for a set amount of turns.",
    stats: [],
    maxLevel: 8
  },
  autumnWind: {
    name_en: "Autumn Wind", 
    desc: "Increases evasion and speed.",
    stats: [],
    maxLevel: 8
  },


  peerlessDemon: {
    name_en: "Peerless Demon",
    desc: "Increases damage dealt based on the number of hits an attack has. One bonus stack is given for every hit of an attack.",
    stats: [],
    maxLevel: 8
  },
  reblossom: {
    name_en: "Reblossom",
    desc: "If the user has multiple katanas equipped, they have a chance to repeat katana skills after use.",
    stats: [],
    maxLevel: 10
  },
  crossingTheSanzu: {
    name_en: "Crossing the Sanzu",
    desc: "Chases attacks by enemies and party members for one turn with the user's equipped weapon. The maximum number of chases depends on how many katanas the user has equipped.",
    stats: [],
    maxLevel: 10
  },
  layeredBloom: {
    name_en: "Layered Bloom",
    desc: "Deals 2-8 instances of melee STR-based cut damage to random enemies in one row. Can hit the same enemy multiple times. For each katana the user has equipped beyond one, the damage per hit is increased.",
    stats: [],
    maxLevel: 8
  },
  vastFlourish: {
    name_en: "Vast Flourish",
    desc: "Deals multiple instances of melee STR-based cut damage to random enemies. Can hit the same target multiple times. The number of hits is equal to the number of katanas the user has equipped multiplied by the number of enemies.",
    stats: [],
    maxLevel: 8
  },
  stillness: {
    name_en: "Stillness",
    desc: "When the user evades an attack, their TP is restored.",
    stats: [],
    maxLevel: 10
  },
  phantomBlades: {
    name_en: "Phantom Blades",
    desc: "Deals melee INT-based almighty damage to one row of enemies. Reduces one row of enemies' accuracy for a set amount of turns.",
    stats: [],
    maxLevel: 8
  },
  likeWater: {
    name_en: "Like Water",
    desc: "Each time the user attacks an enemy, their evasion is increased for the rest of that turn.",
    stats: [],
    maxLevel: 10
  },
  passingShade: {
    name_en: "Passing Shade",
    desc: "Attack self to increase evasion. Each time the user evades an attack, the boost is reduced.\nExtends user's de/buffs duration.\nIf Lasting Fury is learnt, gain all elements.",
    
    stats: [],
    maxLevel: 6
  },
  flowingEnd: {
    name_en: "Flowing End",
    desc: "Only usable if the user evaded an attack last turn. Deals melee STR-based cut damage to one enemy.",
    stats: [],
    maxLevel: 8
  },


  stoneRipples: {
    name_en: "Stone Ripples",
    desc: "When the user attacks an enemy, they will follow-up with a melee STR-based almighty attack.\nThis attack uses the user's equipped shield's DEF as a replacement for weapon ATK.",
    stats: [],
    maxLevel: 10
  },
  lifeborne: {
    name_en: "Lifeborne",
    desc: "Increases the user's maximum HP.\nAt maximum level, when the user receives a buff they will have one additional turn.",
    stats: [],
    maxLevel: 10
  },
  guardiansGrace: {
    name_en: "Guardian's Grace",
    desc: "Apply a buff on the user for a set amount of turns.\nIncreases their row's physical defense for the duration.",
    stats: [],
    maxLevel: 8
  },
  blossomDance: {
    name_en: "Blossom Dance", 
    desc: "Deals melee STR-based cut damage to one enemy.\nDeals increased damage per Vow buff on the user.",
    stats: [],
    maxLevel: 8
  },
  sunderLeech: {
    name_en: "Sunder Leech",
    desc: "Deals melee STR-based volt damage to one enemy. Heals the user for a percentage of the damage dealt.",
    stats: [],
    maxLevel: 8
  },
  innerPeace: {
    name_en: "Inner Peace",
    desc: "Apply a buff on the user for a set amount of turns.\nReduces their row's TP costs for the duration.",
    stats: [],
    maxLevel: 8
  },
  branchingSelf: {
    name_en: "Branching Self",
    desc: "Deals melee STR-based cut damage to one enemy. The user's Masurao buffs will affect the whole party this turn. At max level, the next turn will also be affected.",
    stats: [],
    maxLevel: 8
  },
  everMoment: {
    name_en: "Ever Moment",
    desc: "Extend all of the target's and user's de/buffs by a set number of turns.",
    
    stats: [],
    maxLevel: 6
  },
  mirrorMoon: {
    name_en: "Mirror Moon",
    desc: "For one turn, the user will receive less damage from physical attacks and counterattack the source. \nEach time Mirror Moon activates, the chance of it activating on that same turn is reduced by 35%. Can only activate once per attack.",
    stats: [],
    maxLevel: 8
  },
  reincarnation: {
    name_en: "Reincarnation",
    desc: "When the user is dead, at the end of each turn that they are dead, they have a chance to revive at 1 HP.",
    stats: [],
    maxLevel: 10
  },
  


  
  livingBastion: {
    name_en: "Living Bastion",
    desc: "When in the front row, the user has a chance of negating physical attacks against themselves.",
    stats: [],
    maxLevel: 8
  },
  martyrsHeart: {
    name_en: "Martyr's Heart",
    desc: "Increases the user's maximum HP. \nWhen the user dies, they will restore the rest of the party's HP.",
    stats: [],
    maxLevel: 8
  },
  lineGuard: {
    name_en: "Line Guard",
    desc: "Reduces physical damage taken by one row for one turn. Doubled when in the same row as the user.",
    stats: [],
    maxLevel: 8
  },
  gunmount: {
    name_en: "Gunmount",
    desc: "Can only be used on the turn after a shield skill was used. Deals ranged STR-based bash damage to one enemy. Replicates the effect of the shield skill used on the last turn.",
    stats: [],
    maxLevel: 8
  },
  manaGuard: {
    name_en: "Mana Guard",
    desc: "Reduces elemental damage taken by one row for one turn. Doubled when in the same row as the user.",
    stats: [],
    maxLevel: 8
  },
  fieldBandage: {
    name_en: "Field Bandage",
    desc: "Restores one party member's HP.",
    stats: [],
    maxLevel: 6
  },
  dragonRoar: {
    name_en: "Dragon Roar",
    desc: "Increases one ally's chance of being targeted for a set amount of turns. Reduce damage taken on cast.",
    stats: [],
    maxLevel: 8
  },
  returnFire: {
    name_en: "Return Fire",
    desc: "When the user loses HP, they have a chance to attack an enemy with their equipped weapon.",
    stats: [],
    maxLevel: 10
  },
  pyrrhicRuin: {
    name_en: "Pyrrhic Ruin",
    desc: "Deals ranged STR-based bash damage to one enemy. \nDeals melee STR-based bash damage to the user at the end of the next turn.",
    stats: [],
    maxLevel: 8
  },
  hellfireRound: {
    name_en: "Hellfire Round", 
    desc: "Deals ranged STR-based fire damage to one enemy. If the target is not killed, the user suffers backlash damage.",
    stats: ["ArmBind"],
    maxLevel: 8
  },
  crushingBarrage: {
    name_en: "Crushing Barrage",
    desc: "Consumes a percentage of the user's current HP to deal ranged STR-based bash damage to all enemies. Reduces hit targets' physical attack for a set amount of turns.",
    stats: [],
    maxLevel: 8
  },
  
  killzone: {
    name_en: "Killzone",
    desc: "Increases the user's damage when their current HP is below a certain percentage of their maximum HP.",
    stats: [],
    maxLevel: 10
  },
  criticalPressure: {
    name_en: "Critical Pressure",
    desc: "Target one ally. If the damage the ally would take is higher than the user's current HP, negate the damage.",
    stats: [],
    maxLevel: 6
  },
  deathWish: {
    name_en: "Death Wish",
    desc: "Deals ranged bash damage to one enemy. Increases damage taken and their chances of being targeted for the rest of the turn.",
    stats: [],
    maxLevel: 10
  },
  radiantZenith: {
    name_en: "Radiant Zenith",
    desc: "Deals ranged bash damage to one enemy. Damage decreases the lower the user's HP.",
    stats: [],
    maxLevel: 8
  },
  composure: {
    name_en: "Composure",
    desc: "Passively restores TP if the user is at full HP.",
    stats: [],
    maxLevel: 8
  },
  burnBright: {
    name_en: "Burn Bright",
    desc: "For 3 turns one party member has increased attack, defense, and ailment/bind resistance at the cost of losing a percentage of their current HP whenever they act.",
    stats: [],
    maxLevel: 8
  },
  lastShell: {
    name_en: "Last Shell",
    desc: "For one turn, the user will endure mortal damage once. If the user endured a fatal hit, their damage on the next turn is increased.",
    stats: [],
    maxLevel: 8
  },
  edgeOfSurvival: {
    name_en: "Edge of Survival",
    desc: "Passively gives the user a chance to survive mortal hits at 1 HP.",
    stats: [],
    maxLevel: 10
  },
  shockLock: {
    name_en: "Shock Lock",
    desc: "Attempts to inflict paralysis on one enemy and the user.",
    stats: [],
    maxLevel: 8
  },
  preempArtillery: {
    name_en: "Preemp Artillery",
    desc: "Gives the user a chance to use Crushing Barrage at the start of battle.",
    stats: [],
    maxLevel: 10
  },
  
  breakingPoint: {
    name_en: "Breaking Point",
    desc: "When the user reduces damage they themselves take, or negates an attack entirely, they have a chance to gain a stack of damage increase for their Cannon skills for the rest of the battle.",
    stats: [],
    maxLevel: 10
  },
  valoredgeFrame: {
    name_en: "Valoredge Frame",
    desc: "Passively increases physical, elemental and ailment/bind defense.",
    stats: [],
    maxLevel: 8
  },
  counterGuard: {
    name_en: "Counter Guard",
    desc: "Reduces physical damage taken by one row for one turn. When it activates, the caster will counter with their equipped weapon. Counter Guard only activates once per attack.",
    stats: [],
    maxLevel: 8
  },
  sentinelGuard: {
    name_en: "Sentinel Guard",
    desc: "Sets all party members' defensive values (VIT, armor DEF, etc.) to the user's for one turn. In addition, also reduces all damage to the party for one turn. Disables guard skills for one turn after use.",
    stats: [],
    maxLevel: 10
  },
  autoRoar: {
    name_en: "Auto-Roar",
    desc: "Gives the user a chance to use Dragon Roar on themselves at the start of battle.",
    stats: [],
    maxLevel: 6
  },
  divideGuard: {
    name_en: "Divide Guard",
    desc: "Targets one ally. The caster will take all damage for that ally for one turn.",
    stats: [],
    maxLevel: 8
  },
  shieldBreaker: {
    name_en: "Shield Breaker",
    desc: "Deals melee bash damage to one enemy. Damage is based on the user's shield's DEF.\nDisables guard skills for one turn after use.",
    stats: [],
    maxLevel: 10
  },
  shieldNetwork: {
    name_en: "Shield Network",
    desc: "For a set amount of turns, increases damage taken by the user. Guards now affect the whole party, and Field Bandage affects a row.",
    stats: [],
    maxLevel: 8
  },
  dragonForce: {
    name_en: "Dragon Force",
    desc: "Grants allies in rows other than the user's a chance to negate physical damage.",
    stats: [],
    maxLevel: 8
  },
  bloodAegis: {
    name_en: "Blood Aegis",
    desc: "Consumes a percentage of the user's current HP to increase all party members' defense against physical attacks for a set amount of turns.",
    stats: [],
    maxLevel: 8
  },

  


  

  gospel: {
    name_en: "Gospel",
    desc: "When the Shaman buffs an ally, a percentage of that ally's maximum HP is restored.",
    stats: [],
    maxLevel: 10
  },
  holyFlame: {
    name_en: "Holy Flame",
    desc: "Restores HP to all party members for every 3 steps they take in the Labyrinth.",
    stats: [],
    maxLevel: 10
  },
  ruinousPrayer: {
    name_en: "Ruinous Prayer",
    desc: "Increases all party members' attack for a set amount of turns.",
    stats: [],
    maxLevel: 10
  },
  starBinding: {
    name_en: "Star Binding",
    desc: "Places a buff on one ally that gives them a chance to survive mortal damage. If it activates, it will heal the buff owner for a fixed amount, and then dispel itself.",
    stats: ["HeadBind"],
    maxLevel: 6
  },
  aegisPrayer: {
    name_en: "Aegis Prayer",
    desc: "Increases all party members' defense for a set amount of turns.",
    stats: [],
    maxLevel: 8
  },
  heavensGift: {
    name_en: "Heaven's Gift",
    desc: "Dispels one buff and one debuff on one ally. Restores that ally's HP and increases their action speed for one turn. The healing is doubled if both a buff and debuff are removed.",
    stats: [],
    maxLevel: 6
  },
  auspiceCircle: {
    name_en: "Auspice Circle",
    desc: "Apply a buff on the user for a set amount of turns.\nAt the end of each turn, allies in the user's row restore HP for the duration.",
    stats: [],
    maxLevel: 8
  },
  cometBlow: {
    name_en: "Comet Blow",
    desc: "Deals melee INT-based bash damage to one row of enemies. After use, deals melee INT-based bash damage to the user's row allies, excluding the user.",
    stats: [],
    maxLevel: 6
  },
  spiritWard: {
    name_en: "Spirit Ward",
    desc: "Creates a Spirit Ward in the summon row. It has 10 HP and an increased chance of drawing enemy attacks.",
    stats: [],
    maxLevel: 8
  },
  lastRespects: {
    name_en: "Last Respects",
    desc: "Gain a stack of increased damage for Shaman skills when a Spirit Ward or Shikigami is attacked, and an extra one when they die. All stacks are reset after attacking.",
    stats: [],
    maxLevel: 10
  },


  scorchingFaith: {
    name_en: "Scorching Faith",
    desc: "Increases the effectiveness of Ruinous Prayer and Aegis Prayer. The user now receives recoil damage every turn.",
    stats: [],
    maxLevel: 10
  },
  severingRite: {
    name_en: "Severing Rite",
    desc: "Target one enemy. If the target has buffs, purge one and deal ranged INT-based cut damage.",
    stats: [],
    maxLevel: 6
  },
  oraclesVerdict: {
    name_en: "Oracle's Verdict",
    desc: "Cut attack to one ally and increase their attack for a set number of turns. If the ally instead evades the attack, increase all combatant's attack.",
    stats: [],
    maxLevel: 6
  },
  absolution: {
    name_en: "Absolution",
    desc: "Increases damage taken by the party this turn. \nAt the end of the turn, restores HP to the entire party and has a chance to remove ailments and binds.",
    stats: [],
    maxLevel: 8
  },
  lifeTrade: {
    name_en: "Life Trade",
    desc: "Deals ranged INT-based bash damage to one enemy. Damage is affected by how low the party's HP is.",
    stats: [],
    maxLevel: 8
  },
  sacredVessel: {
    name_en: "Sacred Vessel",
    desc: "Increases the user's maximum HP and damage.",
    stats: [],
    maxLevel: 8
  },
  requiem: {
    name_en: "Requiem",
    desc: "When an ally dies, restores HP to the party.",
    stats: [],
    maxLevel: 10
  },
  chantedBastion: {
    name_en: "Chanted Bastion",
    desc: "Grants each ally in the user's row a chance to take reduced damage.",
    stats: [],
    maxLevel: 10
  },
  bloodlitHymn: {
    name_en: "Bloodlit Hymn",
    desc: "Deals ranged INT-based stab damage to all enemies, and then all party members.",
    stats: [],
    maxLevel: 8
  },
  forbiddenFruit: {
    name_en: "Forbidden Fruit",
    desc: "Consumes all party members' TP to increase the party's attack and defense for this turn.",
    stats: [],
    maxLevel: 10
  },
  benevolence: {
    name_en: "Benevolence",
    desc: "While the user is alive, party members with buffs will have their HP restored when they take damage, once per turn.",
    stats: [],
    maxLevel: 10
  },
  renewalCharm: {
    name_en: "Renewal Charm",
    desc: "For one turn, when any party member takes damage, the user will heal them after the damage source has finished its turn.",
    stats: [],
    maxLevel: 8
  },
  exorcismPrayer: {
    name_en: "Exorcism Prayer",
    desc: "Reduces the chance of all party members having ailments and binds inflicted on them for a set amount of turns.",
    stats: [],
    maxLevel: 8
  },
  sacredStep: {
    name_en: "Sacred Step",
    desc: "Increases the user's evasion and ailment/bind defense.",
    stats: [],
    maxLevel: 8
  },
  hastePrayer: {
    name_en: "Haste Prayer",
    desc: "Increases all party members' evasion for a set amount of turns.",
    stats: [],
    maxLevel: 8
  },
  soulReturn: {
    name_en: "Soul Return",
    desc: "Restores TP to an ally.",
    stats: [],
    maxLevel: 8
  },
  funeralPyre: {
    name_en: "Funeral Pyre",
    desc: "When an ally dies, restores TP to the user.",
    stats: [],
    maxLevel: 10
  },
  apotheosis: {
    name_en: "Apotheosis", 
    desc: "Requires a Shaman summon. Deals all physical damage to one enemy.",
    stats: [],
    maxLevel: 10
  },
  shikigami: {
    name_en: "Shikigami",
    desc: "Creates a Shikigami in the summon row. It has 10 HP and an increased chance of drawing enemy attacks. \nWhen it is attacked, it will counterattack the source of damage with bash damage, based on it's ATK value.",
    stats: [],
    maxLevel: 8
  },
  watchfulSpirit: {
    name_en: "Watchful Spirit", 
    desc: "Gives the user a chance to use Spirit Ward at the start of battle.",
    stats: [],
    maxLevel: 6
  },


  

  
  soothingAroma: {
    name_en: "Soothing Aroma",
    desc: "The user's row passively receives a defense boost.",
    stats: [],
    maxLevel: 8
  },
  sweepingHerb: {
    name_en: "Sweeping Herb",
    desc: "Restores one row's HP.",
    stats: [],
    maxLevel: 10
  },
  revivalHerb: {
    name_en: "Revival Herb",
    desc: "Revives one dead ally.",
    stats: [],
    maxLevel: 6
  },
  petalStorm: {
    name_en: "Petal Storm",
    desc: "Deals melee INT-based cut damage to one row of enemies. If the user has ailments/binds, attempts to transfer them to hit targets.",
    stats: ["Scythe", "ArmBind"],
    maxLevel: 6
  },
  purification: {
    name_en: "Purification",
    desc: "Targets an ally row. Removes one debuff from each debuffed ally and restores their TP.",
    stats: [],
    maxLevel: 6
  },
  blightedBark: {
    name_en: "Bloodroot",
    desc: "This turn, one ally has increased damage.\nThe user is inflicted with poison.",
    
    
    stats: [],
    maxLevel: 10
  },
  panacea: {
    name_en: "Panacea",
    desc: "Restores one ally's HP and dispels their ailments and binds.",
    stats: [],
    maxLevel: 8
  },
  herbForaging: {
    name_en: "Herb Foraging",
    desc: "Restores each party member's HP and TP when using a Take, Chop, or Mine point.",
    stats: [],
    maxLevel: 8
  },
  icicleCrash: {
    name_en: "Icicle Crash",
    desc: "Deals melee INT-based ice damage to all enemies, with no damage penalty. \nAttempts to inflict sleep on any enemy with Rotting Nectar.",
    stats: [],
    maxLevel: 8
  },
  rottingNectar: {
    name_en: "Rotting Nectar",
    desc: "Reduces one enemy's ailment resistance for a set amount of turns, and enables some skills to inflict ailments.",
    stats: [],
    maxLevel: 10
  },
  painDistill: {
    name_en: "Pain Distill",
    desc: "Whenever the user is in the front row and is targeted by the enemy, the user recovers some TP.",
    stats: [],
    maxLevel: 8
  },
  regrowth: {
    name_en: "Regrowth",
    desc: "When the user uses a skill, they restore some HP.",
    stats: [],
    maxLevel: 10
  },
  pollenDrift: {
    name_en: "Pollen Drift",
    desc: "Places a buff on an ally that restores a percentage of any TP they use to a random party member for a set amount of turns.",
    
    stats: [],
    maxLevel: 8
  },
  blastbomb: {
    name_en: "Blastbomb",
    desc: "Deals melee INT-based fire damage to all enemies, with no damage penalty. \nAttempts to inflict panic on any enemy with Rotting Nectar.",
    stats: [],
    maxLevel: 8
  },
  thunderclap: {
    name_en: "Thunderclap",
    desc: "Deals melee INT-based volt damage to all enemies, with no damage penalty. \nAttempts to inflict petrify on any enemy with Rotting Nectar.",
    stats: [],
    maxLevel: 8
  },
  foulFerment: {
    name_en: "Foul Ferment",
    desc: "When Rotting Nectar or Smokeblight is applied to an enemy, or an enemy attack triggers Corruption, they take ranged INT-based damage at the end of the turn.",
    stats: [],
    maxLevel: 8
  },
  corruption: {
    name_en: "Corruption",
    desc: "Can only be used if the user is afflicted with an ailment or bind. Increases damage on the next turn, removes all afflictions and nullify all damage taken.",
    
    stats: [],
    maxLevel: 8
  },
  symbiosis: {
    name_en: "Symbiosis",
    desc: "When the user is afflicted by an ailments or binds, they receive a damage boost.",
    stats: [],
    maxLevel: 8
  },
  catastrophicMix: {
    name_en: "Catastrophic Mix",
    desc: "On the next turn's end, deals ranged INT-based fire+ice+volt damage to one enemy. \nThe user cannot select another action on the turn where this skill activates. \nAttempts to inflict stun on any enemy with Rotting Nectar.",
    stats: [],
    maxLevel: 8
  },
  smokeblight: {
    name_en: "Smokeblight",
    desc: "Reduces all enemies' defense for a set amount of turns. The defense decrease is amplified if an enemy has Rotting Nectar.",
    stats: [],
    maxLevel: 8
  },
  briarShell: {
    name_en: "Briar Shell",
    desc: "Apply a buff on an ally. Any time that ally is attacked by physical damage, they will counterattack the source with melee INT-based stab damage.",
    stats: [],
    maxLevel: 8
  },
  delayedHerb: {
    name_en: "Delayed Herb",
    desc: "At the start of the next turn, restores all party members' HP.",
    stats: [],
    maxLevel: 8
  },
  herbBoost: {
    name_en: "Herb Boost",
    desc: "Allows herb skills to set healed party members' maximum HP to higher than the normal max for one turn.",
    stats: [],
    maxLevel: 10
  },
  sharedNostrum: {
    name_en: "Shared Nostrum",
    desc: "For a set amount of turns, reduces the action speed of and amount of HP restored by herb skills, in exchange for upgrading the target type of herb skills. Single-target skills become row-target, row-target skills become party-target.",
    stats: [],
    maxLevel: 8
  },
  antibodies: {
    name_en: "Antibodies",
    desc: "Adds to the user's chance to naturally recover from ailments and binds.",
    stats: [],
    maxLevel: 8
  },
  crownOfThorns: {
    name_en: "Crown of Thorns",
    desc: "Gives the user a chance to apply a one time counter buff on the party at the start of battle.",
    stats: [],
    maxLevel: 8
  },
  nutrimentum: {
    name_en: "Nutrimentum",
    desc: "Any ally targeted by a Botanist recovery skill will have their damage increased next turn.",
    stats: [],
    maxLevel: 10
  },
  idunnleaf: {
    name_en: "Idunnleaf",
    desc: "Only usable after a Botanist recovery skill. Extends one ally's buff/debuff duration.",
    stats: [],
    maxLevel: 6
  },
  rousingAroma: {
    name_en: "Rousing Aroma",
    desc: "The user's row passively receives a damage boost.",
    stats: [],
    maxLevel: 10
  },
  lingeringScent: {
    name_en: "Lingering Scent",
    desc: "For a set amount of turns, the effect of the last used herb skill will be repeated at the end of the turn.",
    stats: [],
    maxLevel: 8
  }
  
};

let templateTitleTrees = {

  

  "Dragoon - Smoldering": {
    lineGuard: {
      dep: {},
      coords: { x: 0, y: 0 }
    },
    manaGuard: {
      dep: {},
      coords: { x: 0, y: 1 }
    },
    gunmount: {
      dep: { lineGuard: 3, manaGuard: 3 },
      coords: { x: 1, y: 0.5 }
    },
    dragonRoar: {
      dep: {},
      coords: { x: 0, y: 2.5 }
    },
    fieldBandage: {
      dep: { dragonRoar: 2 },
      coords: { x: 1, y: 2 }
    },
    livingBastion: {
      dep: { dragonRoar: 2 },
      coords: { x: 1, y: 3 }
    },
    returnFire: {
      dep: {},
      coords: { x: 0, y: 4 }
    },
    pyrrhicRuin: {
      dep: { returnFire: 2 },
      coords: { x: 1, y: 4 }
    },
    hellfireRound: {
      dep: {},
      coords: { x: 1, y: 6 }
    },
    
    
    
    
    crushingBarrage: {
      dep: {},
      coords: { x: 1, y: 5 }
    },
    
    killzone: {
      dep: { gunmount: 3 },
      coords: { x: 2, y: 0 }
    },
    criticalPressure: {
      dep: { gunmount: 3 },
      coords: { x: 2, y: 1 }
    },
    deathWish: {
      dep: { criticalPressure: 3 },
      coords: { x: 3, y: 1 }
    },
    radiantZenith: {
      dep: { fieldBandage: 3 },
      coords: { x: 2, y: 2 }
    },
    composure: {
      dep: { radiantZenith: 3 },
      coords: { x: 3, y: 2 }
    },
    burnBright: {
      dep: {},
      coords: { x: 2, y: 3 }
    },
    lastShell: {
      dep: { burnBright: 3, edgeOfSurvival: 3 },
      coords: { x: 3, y: 3.5 }
    },
    edgeOfSurvival: {
      dep: { pyrrhicRuin: 3 },
      coords: { x: 2, y: 4 }
    },
    shockLock: {
      dep: { hellfireRound: 3, crushingBarrage: 3 },
      coords: { x: 2, y: 5.5 }
    },
    preempArtillery: {
      dep: { shockLock: 3 },
      coords: { x: 3, y: 5.5 }
    },
  },

  "Dragoon - Shield": {
    lineGuard: {
      dep: {},
      coords: { x: 0, y: 0 }
    },
    manaGuard: {
      dep: {},
      coords: { x: 0, y: 1 }
    },
    gunmount: {
      dep: { lineGuard: 3, manaGuard: 3 },
      coords: { x: 1, y: 0.5 }
    },
    dragonRoar: {
      dep: {},
      coords: { x: 0, y: 2.5 }
    },
    fieldBandage: {
      dep: { dragonRoar: 2 },
      coords: { x: 1, y: 2 }
    },
    livingBastion: {
      dep: { dragonRoar: 2 },
      coords: { x: 1, y: 3 }
    },
    returnFire: {
      dep: {},
      coords: { x: 0, y: 4 }
    },
    pyrrhicRuin: {
      dep: { returnFire: 2 },
      coords: { x: 1, y: 4 }
    },
    hellfireRound: {
      dep: {},
      coords: { x: 1, y: 6 }
    },
    
    
    
    
    crushingBarrage: {
      dep: {},
      coords: { x: 1, y: 5 }
    },
    
    dragonForce: {
      dep: { gunmount: 3 },
      coords: { x: 2, y: 0.5 }
    },
    shieldBreaker: {
      dep: { dragonForce: 3 },
      coords: { x: 3, y: 0.5 }
    },
    divideGuard: {
      dep: { fieldBandage: 3 },
      coords: { x: 2, y: 2 }
    },
    autoRoar: {
      dep: { divideGuard: 3 },
      coords: { x: 3, y: 2 }
    },
    martyrsHeart: {
      dep: { livingBastion: 3 },
      coords: { x: 2, y: 3 }
    },
    sentinelGuard: {
      dep: { martyrsHeart: 3 },
      coords: { x: 3, y: 3 }
    },
    counterGuard: {
      dep: { pyrrhicRuin: 3 },
      coords: { x: 2, y: 4 }
    },
    shieldNetwork: {
      dep: { crushingBarrage: 3 },
      coords: { x: 2, y: 5 }
    },
    bloodAegis: {
      dep: { hellfireRound: 3 },
      coords: { x: 2, y: 6 }
    },
    breakingPoint: {
      dep: { shieldNetwork: 3, bloodAegis: 3 },
      coords: { x: 3, y: 5.5 }
    },
  },

  "Pugilist - Shattering": {
    blitzBrawler: {
      dep: {},
      coords: { x: 0, y: 0 }
    },
    followThrough: {
      dep: {},
      coords: { x: 1, y: 0 }
    },
    concussion: {
      dep: {},
      coords: { x: 0, y: 1 }
    },
    armCrusher: {
      dep: {},
      coords: { x: 0, y: 2 }
    },
    lowBlow: {
      dep: {},
      coords: { x: 0, y: 3 }
    },
    oneTwoPunch: {
      dep: { concussion: 2, armCrusher: 2, lowBlow: 2 },
      coords: { x: 1, y: 2 }
    },
    faultBlocker: {
      dep: {},
      coords: { x: 0, y: 4 }
    },
    breather: {
      dep: { faultBlocker: 2 },
      coords: { x: 1, y: 4 }
    },
    knockoutBlow: {
      dep: {},
      coords: { x: 0, y: 5.5 }
    },
    knuckleFever: {
      dep: { knockoutBlow: 2 },
      coords: { x: 1, y: 5.5 }
    },
    
    wildSwings: {
      dep: {},
      coords: { x: 2, y: 0 }
    },
    bulwarkArm: {
      dep: {},
      coords: { x: 2, y: 1.5 }
    },
    crackBack: {
      dep: { bulwarkArm: 3 },
      coords: { x: 3, y: 1 }
    },
    rhythmBreak: {
      dep: { bulwarkArm: 3 },
      coords: { x: 3, y: 2 }
    },
    madLunge: {
      dep: {},
      coords: { x: 2, y: 3 }
    },
    breakfireRush: {
      dep: { madLunge: 3 },
      coords: { x: 3, y: 3 }
    },
    unyieldingWill: {
      dep: {},
      coords: { x: 2, y: 4.5 }
    },
    jumpTheBell: {
      dep: { unyieldingWill: 3 },
      coords: { x: 3, y: 4.5 }
    },
    forbiddenFist: {
      dep: { knuckleFever: 3 },
      coords: { x: 2, y: 5.5 }
    },
    belowTheBelt: {
      dep: {},
      coords: { x: 3, y: 0 }
    },

  },

  "Pugilist - Barrage": {
    blitzBrawler: {
      dep: {},
      coords: { x: 0, y: 0 }
    },
    followThrough: {
      dep: {},
      coords: { x: 1, y: 0 }
    },
    concussion: {
      dep: {},
      coords: { x: 0, y: 1 }
    },
    armCrusher: {
      dep: {},
      coords: { x: 0, y: 2 }
    },
    lowBlow: {
      dep: {},
      coords: { x: 0, y: 3 }
    },
    oneTwoPunch: {
      dep: { concussion: 2, armCrusher: 2, lowBlow: 2 },
      coords: { x: 1, y: 2 }
    },
    faultBlocker: {
      dep: {},
      coords: { x: 0, y: 4 }
    },
    breather: {
      dep: { faultBlocker: 2 },
      coords: { x: 1, y: 4 }
    },
    knockoutBlow: {
      dep: {},
      coords: { x: 0, y: 5.5 }
    },
    knuckleFever: {
      dep: { knockoutBlow: 2 },
      coords: { x: 1, y: 5.5 }
    },
    

    doublePunch: {
      dep: {},
      coords: { x: 2, y: 0 }
    },
    statusAtkUp: {
      dep: {},
      coords: { x: 3, y: 0 }
    },
    pileOn: {
      dep: {},
      coords: { x: 2, y: 1 }
    },
    leadingBlow: {
      dep: { pileOn: 3, oneTwoPunch: 3 },
      coords: { x: 3, y: 1.5 }
    },
    touchOfDeath: {
      dep: {},
      coords: { x: 2, y: 3 }
    },
    lashOut: {
      dep: {},
      coords: { x: 3, y: 3 }
    },
    crossCounter: {
      dep: { breather: 3 },
      coords: { x: 2, y: 4 }
    },

    disruptingFlurry: {
      dep: {},
      coords: { x: 2, y: 5 }
    },
    crushingClout: {
      dep: {},
      coords: { x: 2, y: 6 }
    },
    clinch: {
      dep: { disruptingFlurry: 3, crushingClout: 3 },
      coords: { x: 3, y: 5.5 }
    },

  },

  "Harbinger - Revenant": {
    keeperOfSouls: {
      dep: {},
      coords: { x: 0, y: 0 }
    },
    erodingMiasma: {
      dep: {},
      coords: { x: 0, y: 1 }
    },
    stiflingMiasma: {
      dep: {},
      coords: { x: 0, y: 2 }
    },
    spiritAbsorb: {
      dep: { erodingMiasma: 1, stiflingMiasma: 1 },
      coords: { x: 1, y: 1.5 }
    },
    enshroud: {
      dep: {},
      coords: { x: 0, y: 3.5 }
    },
    spectralSeep: {
      dep: { enshroud: 1 },
      coords: { x: 1, y: 3 }
    },
    spitefulSpirit: {
      dep: { enshroud: 1 },
      coords: { x: 1, y: 4 }
    },
    voidReaping: {
      dep: {},
      coords: { x: 0, y: 5.5 }
    },
    temporalChimera: {
      dep: { voidReaping: 1 },
      coords: { x: 1, y: 5 }
    },
    bloodyReap: {
      dep: { voidReaping: 1 },
      coords: { x: 1, y: 6 }
    },
    

    bloodMoon: {
      dep: {},
      coords: { x: 2, y: 0 }
    },
    weightlessSoul: {
      dep: {},
      coords: { x: 3, y: 0 }
    },

    maskingMiasma: {
      dep: {},
      
      coords: { x: 2, y: 1.5 }
    },
    reapersCall: {
      dep: { maskingMiasma: 1 },
      coords: { x: 3, y: 1 }
    },
    gluttony: {
      dep: { maskingMiasma: 1 },
      coords: { x: 3, y: 2 }
    },
    nightfall: {
      dep: { spectralSeep: 1 },
      coords: { x: 2, y: 3 }
    },
    darkPassenger: {
      dep: { nightfall: 1 },
      coords: { x: 3, y: 3 }
    },
    grimStalk: {
      dep: { temporalChimera: 1 },
      coords: { x: 2, y: 5 }
    },
    shredStrawman: {
      dep: { grimStalk: 1 },
      coords: { x: 3, y: 5 }
    },
    speedUpHarb: {
      dep: { },
      coords: { x: 2, y: 6 }
    }
  },

  "Harbinger - Deathguard": {
    keeperOfSouls: {
      dep: {},
      coords: { x: 0, y: 0 }
    },
    erodingMiasma: {
      dep: {},
      coords: { x: 0, y: 1 }
    },
    stiflingMiasma: {
      dep: {},
      coords: { x: 0, y: 2 }
    },
    spiritAbsorb: {
      dep: { erodingMiasma: 1, stiflingMiasma: 1 },
      coords: { x: 1, y: 1.5 }
    },
    enshroud: {
      dep: {},
      coords: { x: 0, y: 3.5 }
    },
    spectralSeep: {
      dep: { enshroud: 1 },
      coords: { x: 1, y: 3 }
    },
    spitefulSpirit: {
      dep: { enshroud: 1 },
      coords: { x: 1, y: 4 }
    },
    voidReaping: {
      dep: {},
      coords: { x: 0, y: 5.5 }
    },
    temporalChimera: {
      dep: { voidReaping: 1 },
      coords: { x: 1, y: 5 }
    },
    bloodyReap: {
      dep: { voidReaping: 1 },
      coords: { x: 1, y: 6 }
    },
    

    endlessShroud: {
      dep: {},
      coords: { x: 2, y: 0 }
    },
    wiltingMiasma: {
      dep: {},
      coords: { x: 2, y: 1 }
    },
    relapseMiasma: {
      dep: {},
      coords: { x: 2, y: 2 }
    },
    fadingScourge: {
      dep: { wiltingMiasma: 1, relapseMiasma: 1 },
      coords: { x: 3, y: 1.5 }
    },
    hpUp: {
      dep: {},
      coords: { x: 2, y: 6 }
    },

    atonement: {
      dep: { spectralSeep: 1 },
      coords: { x: 2, y: 3 }
    },
    miasmaWall: {
      dep: { atonement: 1 },
      coords: { x: 3, y: 3 }
    },

    deathsAsylum: {
      dep: {},
      coords: { x: 2, y: 5 }
    },
    soulTransfer: {
      dep: { deathsAsylum: 1 },
      coords: { x: 3, y: 4.5 }
    },
    ephemeralReap: {
      dep: { deathsAsylum: 1 },
      coords: { x: 3, y: 5.5 }
    },
  },



  

  "Masurao - Blade Dancer": {
    primevalZeal: {
      dep: {},
      coords: { x: 0, y: 0 }
    },
    lastingFury: {
      dep: { primevalZeal: 2 },
      coords: { x: 1, y: 0 }
    },
    revelInBlood: {
      dep: {},
      coords: { x: 1, y: 1 }
    },
    paleReflection: {
      dep: {},
      coords: { x: 0, y: 2.5 }
    },
    meteorReign: {
      dep: { paleReflection: 2 },
      coords: { x: 1, y: 2.5 }
    },
    endlessReach: {
      dep: {},
      coords: { x: 0, y: 4 }
    },
    armorPierce: {
      dep: { endlessReach: 2 },
      coords: { x: 1, y: 4 }
    },
    autumnWind: {
      dep: {},
      coords: { x: 0, y: 5.5 }
    },
    footSweep: {
      dep: { autumnWind: 2 },
      coords: { x: 1, y: 5 }
    },
    swallowFlash: {
      dep: { autumnWind: 2 },
      coords: { x: 1, y: 6 }
    },
    
    reblossom: {
      dep: {},
      coords: { x: 2, y: 0 }
    },
    likeWater: {
      dep: { revelInBlood: 3 },
      coords: { x: 2, y: 1 }
    },
    crossingTheSanzu: {
      dep: { likeWater: 3 },
      coords: { x: 3, y: 1 }
    },
    layeredBloom: {
      dep: { meteorReign: 3 },
      coords: { x: 2, y: 2.5 }
    },
    peerlessDemon: {
      dep: {},
      coords: { x: 2, y: 3.5 }
    },
    vastFlourish: {
      dep: { layeredBloom: 3, peerlessDemon: 3 },
      coords: { x: 3, y: 3 }
    },
    phantomBlades: {
      dep: { footSweep: 3 },
      coords: { x: 2, y: 5 }
    },
    passingShade: {
      dep: { swallowFlash: 3 },
      coords: { x: 2, y: 6 }
    },
    stillness: {
      dep: { passingShade: 3 },
      coords: { x: 3, y: 6 }
    },
    flowingEnd: {
      dep: { phantomBlades: 3 },
      coords: { x: 3, y: 5 }
    },

  },
  "Masurao - Vowkeeper": {
    primevalZeal: {
      dep: {},
      coords: { x: 0, y: 0 }
    },
    lastingFury: {
      dep: { primevalZeal: 2 },
      coords: { x: 1, y: 0 }
    },
    revelInBlood: {
      dep: {},
      coords: { x: 1, y: 1 }
    },
    paleReflection: {
      dep: {},
      coords: { x: 0, y: 2.5 }
    },
    meteorReign: {
      dep: { paleReflection: 2 },
      coords: { x: 1, y: 2.5 }
    },
    endlessReach: {
      dep: {},
      coords: { x: 0, y: 4 }
    },
    armorPierce: {
      dep: { endlessReach: 2 },
      coords: { x: 1, y: 4 }
    },
    autumnWind: {
      dep: {},
      coords: { x: 0, y: 5.5 }
    },
    footSweep: {
      dep: { autumnWind: 2 },
      coords: { x: 1, y: 5 }
    },
    swallowFlash: {
      dep: { autumnWind: 2 },
      coords: { x: 1, y: 6 }
    },
    
    sunderLeech: {
      dep: { revelInBlood: 3 },
      coords: { x: 2, y: 0.5 }
    },
    reincarnation: {
      dep: { revelInBlood: 3 },
      coords: { x: 2, y: 1.5 }
    },
    mirrorMoon: {
      dep: { reincarnation: 3 },
      coords: { x: 3, y: 1.5 }
    },
    lifeborne: {
      dep: { sunderLeech: 3 },
      coords: { x: 3, y: 0.5 }
    },
    branchingSelf: {
      dep: {},
      coords: { x: 2, y: 3 }
    },
    blossomDance: {
      dep: { branchingSelf: 3 },
      coords: { x: 3, y: 2.5 }
    },
    stoneRipples: {
      dep: { branchingSelf: 3 },
      coords: { x: 3, y: 3.5 }
    },
    guardiansGrace: {
      dep: { armorPierce: 3 },
      coords: { x: 2, y: 4 }
    },
    innerPeace: {
      dep: { footSweep: 3 },
      coords: { x: 2, y: 5 }
    },
    everMoment: {
      dep: { guardiansGrace: 3, innerPeace: 3 },
      coords: { x: 3, y: 4.5 }
    },

  },


  "Warlock - Maledictor": {
    harvestTime: {
      dep: {},
      coords: { x: 0, y: 1 }
    },
    smearTheSoul: {
      dep: {},
      coords: { x: 0, y: 4 }
    },
    wildParadox: {
      dep: {},
      coords: { x: 0, y: 5 }
    },
    writtenAgain: {
      dep: {},
      coords: { x: 0, y: 6 }
    },

    fateweaver: {
      dep: { harvestTime: 2 },
      coords: { x: 1, y: 0 }
    },
    perfectTiming: {
      dep: { harvestTime: 2 },
      coords: { x: 1, y: 1 }
    },

    anamnesis: {
      dep: { harvestTime: 2 },
      coords: { x: 1, y: 2 }
    },

    dustToDust: {
      dep: {},
      coords: { x: 1, y: 3 }
    },
    wretchedSeal: {
      dep: { smearTheSoul: 2 },
      coords: { x: 1, y: 4 }
    },
    splitMoment: {
      dep: { wildParadox: 2, writtenAgain: 2 },
      coords: { x: 1, y: 5.5 }
    },
    
    realitySmearing: {
      dep: { fateweaver: 3, perfectTiming: 3 },
      coords: { x: 2, y: 0.5 }
    },
    blankChapter: {
      dep: { anamnesis: 3 },
      coords: { x: 2, y: 2 }
    },
    stasisField: {
      dep: { dustToDust: 3 },
      coords: { x: 2, y: 3 }
    },
    cursedEternity: {
      dep: { wretchedSeal: 3 },
      coords: { x: 2, y: 4 }
    },
    ceaseToExist: {
      dep: { splitMoment: 3 },
      coords: { x: 2, y: 5 }
    },
    inevitableEnd: {
      dep: { splitMoment: 3 },
      coords: { x: 2, y: 6 }
    },

    fineTuning: {
      dep: { realitySmearing: 3, blankChapter: 3 },
      coords: { x: 3, y: 1.25 }
    },
    zeroHour: {
      dep: { stasisField: 3 },
      coords: { x: 3, y: 2.5 }
    },
    timeDissonance: {
      dep: { stasisField: 3 },
      coords: { x: 3, y: 3.5 }
    },
    gravityWell: {
      dep: { ceaseToExist: 3 },
      coords: { x: 3, y: 5 }
    },
  },
  
  "Warlock - Chronomancer": {
    harvestTime: {
      dep: {},
      coords: { x: 0, y: 1 }
    },
    smearTheSoul: {
      dep: {},
      coords: { x: 0, y: 4 }
    },
    wildParadox: {
      dep: {},
      coords: { x: 0, y: 5 }
    },
    writtenAgain: {
      dep: {},
      coords: { x: 0, y: 6 }
    },

    fateweaver: {
      dep: { harvestTime: 2 },
      coords: { x: 1, y: 0 }
    },
    perfectTiming: {
      dep: { harvestTime: 2 },
      coords: { x: 1, y: 1 }
    },

    anamnesis: {
      dep: { harvestTime: 2 },
      coords: { x: 1, y: 2 }
    },

    dustToDust: {
      dep: {},
      coords: { x: 1, y: 3 }
    },
    wretchedSeal: {
      dep: { smearTheSoul: 2 },
      coords: { x: 1, y: 4 }
    },
    splitMoment: {
      dep: { wildParadox: 2, writtenAgain: 2 },
      coords: { x: 1, y: 5.5 }
    },
    
    accelero: {
      dep: { fateweaver: 3, perfectTiming: 3 },
      coords: { x: 2, y: 0.5 }
    },
    rethread: {
      dep: { anamnesis: 3 },
      coords: { x: 2, y: 2 }
    },
    sowAndReap: {
      dep: { dustToDust: 3, wretchedSeal: 3 },
      coords: { x: 2, y: 3.5 }
    },
    entropySpike: {
      dep: { splitMoment: 3 },
      coords: { x: 2, y: 5 }
    },
    convergeLine: {
      dep: { splitMoment: 3 },
      coords: { x: 2, y: 6 }
    },

    borrowTomorrow: {
      dep: { accelero: 3 },
      coords: { x: 3, y: 0.5 }
    },
    falseEvent: {
      dep: { rethread: 3 },
      coords: { x: 3, y: 1.5 }
    },
    spinFate: {
      dep: { rethread: 3 },
      coords: { x: 3, y: 2.5 }
    },
    riftline: {
      dep: { entropySpike: 3 },
      coords: { x: 3, y: 5 }
    },
    borrowedTime: {
      dep: { convergeLine: 3 },
      coords: { x: 3, y: 6 }
    },
  },

  

  "Shaman - Blood": {
    aegisPrayer: {
      dep: {},
      coords: { x: 0, y: 1.5 }
    },
    cometBlow: {
      dep: {},
      coords: { x: 0, y: 3.5 }
    },
    spiritWard: {
      dep: {},
      coords: { x: 0, y: 5.5 }
    },
    gospel: {
      dep: { aegisPrayer: 2 },
      coords: { x: 1, y: 1 }
    },
    heavensGift: {
      dep: { aegisPrayer: 2 },
      coords: { x: 1, y: 2 }
    },
    auspiceCircle: {
      dep: {},
      coords: { x: 1, y: 0 }
    },
    holyFlame: {
      dep: { cometBlow: 2 },
      coords: { x: 1, y: 3 }
    },
    ruinousPrayer: {
      dep: { cometBlow: 2 },
      coords: { x: 1, y: 4 }
    },
    lastRespects: {
      dep: { spiritWard: 2 },
      coords: { x: 1, y: 5 }
    },
    starBinding: {
      dep: { spiritWard: 2 },
      coords: { x: 1, y: 6 }
    },
    
    requiem: {
      dep: { auspiceCircle: 3 },
      coords: { x: 2, y: 0 }
    },
    chantedBastion: {
      dep: {},
      coords: { x: 2, y: 1 }
    },
    severingRite: {
      dep: { heavensGift: 3 },
      coords: { x: 2, y: 2 }
    },
    absolution: {
      dep: { holyFlame: 3 },
      coords: { x: 2, y: 3 }
    },
    bloodlitHymn: {
      dep: { ruinousPrayer: 3 },
      coords: { x: 2, y: 4 }
    },
    oraclesVerdict: {
      dep: { lastRespects: 3 },
      coords: { x: 2, y: 5 }
    },
    sacredVessel: {
      dep: { starBinding: 3 },
      coords: { x: 2, y: 6 }
    },
    scorchingFaith: {
      dep: { chantedBastion: 3, requiem: 3 },
      coords: { x: 3, y: 0.5 }
    },
    forbiddenFruit: {
      dep: { severingRite: 3, bloodlitHymn: 3 },
      coords: { x: 3, y: 3 }
    },
    lifeTrade: {
      dep: { sacredVessel: 3 },
      coords: { x: 3, y: 6 }
    },
  },
  "Shaman - Herald": {
    aegisPrayer: {
      dep: {},
      coords: { x: 0, y: 1.5 }
    },
    cometBlow: {
      dep: {},
      coords: { x: 0, y: 3.5 }
    },
    spiritWard: {
      dep: {},
      coords: { x: 0, y: 5.5 }
    },
    gospel: {
      dep: { aegisPrayer: 2 },
      coords: { x: 1, y: 1 }
    },
    heavensGift: {
      dep: { aegisPrayer: 2 },
      coords: { x: 1, y: 2 }
    },
    auspiceCircle: {
      dep: {},
      coords: { x: 1, y: 0 }
    },
    holyFlame: {
      dep: { cometBlow: 2 },
      coords: { x: 1, y: 3 }
    },
    ruinousPrayer: {
      dep: { cometBlow: 2 },
      coords: { x: 1, y: 4 }
    },
    lastRespects: {
      dep: { spiritWard: 2 },
      coords: { x: 1, y: 5 }
    },
    starBinding: {
      dep: { spiritWard: 2 },
      coords: { x: 1, y: 6 }
    },
    
    renewalCharm: {
      dep: { auspiceCircle: 3 },
      coords: { x: 2, y: 0 }
    },
    soulReturn: {
      dep: { heavensGift: 3 },
      coords: { x: 2, y: 2 }
    },
    hastePrayer: {
      dep: { sacredStep: 3 },
      coords: { x: 3, y: 3 }
    },
    sacredStep: {
      dep: {},
      coords: { x: 2, y: 3.5 }
    },
    apotheosis: {
      dep: { ruinousPrayer: 3, lastRespects: 3 },
      coords: { x: 2, y: 4.5 }
    },
    shikigami: {
      dep: { starBinding: 3 },
      coords: { x: 2, y: 6 }
    },
    benevolence: {
      dep: { renewalCharm: 3 },
      coords: { x: 3, y: 0 }
    },
    funeralPyre: {
      dep: { soulReturn: 3 },
      coords: { x: 3, y: 2 }
    },
    exorcismPrayer: {
      dep: { sacredStep: 3 },
      coords: { x: 3, y: 4 }
    },
    watchfulSpirit: {
      dep: { shikigami: 3 },
      coords: { x: 3, y: 6 }
    }
  },

  "Botanist - Merciful Healer": {
    soothingAroma: {
      dep: {},
      coords: { x: 1, y: 0 }
    },
    sweepingHerb: {
      dep: {},
      coords: { x: 0, y: 0.5 }
    },
    revivalHerb: {
      dep: {},
      coords: { x: 0, y: 1.5 }
    },
    purification: {
      dep: { sweepingHerb: 2, revivalHerb: 2 },
      coords: { x: 1, y: 1 }
    },
    herbForaging: {
      dep: {},
      coords: { x: 1, y: 2 }
    },
    rottingNectar: {
      dep: {},
      coords: { x: 0, y: 3.5 }
    },
    icicleCrash: {
      dep: { rottingNectar: 2 },
      coords: { x: 1, y: 3.5 }
    },
    blightedBark: {
      dep: {},
      coords: { x: 0, y: 5.5 }
    },
    petalStorm: {
      dep: { blightedBark: 2 },
      coords: { x: 1, y: 5 }
    },
    panacea: {
      dep: { blightedBark: 2 },
      coords: { x: 1, y: 6 }
    },
    
    briarShell: {
      dep: { soothingAroma: 3 },
      coords: { x: 2, y: 0 }
    },
    delayedHerb: {
      dep: { purification: 3 },
      coords: { x: 2, y: 1 }
    },
    herbBoost: {
      dep: { herbForaging: 5 },
      coords: { x: 2, y: 2 }
    },
    sharedNostrum: {
      dep: { icicleCrash: 3 },
      coords: { x: 2, y: 3.5 }
    },
    antibodies: {
      dep: { petalStorm: 3, panacea: 3 },
      coords: { x: 2, y: 5.5 }
    },
    crownOfThorns: {
      dep: { briarShell: 3 },
      coords: { x: 3, y: 0 }
    },
    nutrimentum: {
      dep: { antibodies: 3 },
      coords: { x: 3, y: 5 }
    },
    idunnleaf: {
      dep: { delayedHerb: 3 },
      coords: { x: 3, y: 1 }
    },
    rousingAroma: {
      dep: { sharedNostrum: 3 },
      coords: { x: 3, y: 3.5 }
    },
    lingeringScent: {
      dep: { antibodies: 3 },
      coords: { x: 3, y: 6 }
    }
  },

  "Botanist - Thorn Alchemist": {
    soothingAroma: {
      dep: {},
      coords: { x: 1, y: 0 }
    },
    sweepingHerb: {
      dep: {},
      coords: { x: 0, y: 0.5 }
    },
    revivalHerb: {
      dep: {},
      coords: { x: 0, y: 1.5 }
    },
    purification: {
      dep: { sweepingHerb: 2, revivalHerb: 2 },
      coords: { x: 1, y: 1 }
    },
    herbForaging: {
      dep: {},
      coords: { x: 1, y: 2 }
    },
    rottingNectar: {
      dep: {},
      coords: { x: 0, y: 3.5 }
    },
    icicleCrash: {
      dep: { rottingNectar: 2 },
      coords: { x: 1, y: 3.5 }
    },
    blightedBark: {
      dep: {},
      coords: { x: 0, y: 5.5 }
    },
    petalStorm: {
      dep: { blightedBark: 2 },
      coords: { x: 1, y: 5 }
    },
    panacea: {
      dep: { blightedBark: 2 },
      coords: { x: 1, y: 6 }
    },
    
    painDistill: {
      dep: { soothingAroma: 2, purification: 2 },
      coords: { x: 2, y: 0.5 }
    },
    pollenDrift: {
      dep: { herbForaging: 3 },
      coords: { x: 2, y: 2 }
    },
    blastbomb: {
      dep: { icicleCrash: 3 },
      coords: { x: 2, y: 3 }
    },
    thunderclap: {
      dep: { icicleCrash: 3 },
      coords: { x: 2, y: 4 }
    },
    regrowth: {
      dep: { pollenDrift: 3 },
      coords: { x: 3, y: 2 }
    },
    foulFerment: {
      dep: { petalStorm: 3 },
      coords: { x: 2, y: 5 }
    },
    corruption: {
      dep: { panacea: 3 },
      coords: { x: 2, y: 6 }
    },
    symbiosis: {
      dep: { painDistill: 3 },
      coords: { x: 3, y: 0.5 }
    },
    catastrophicMix: {
      dep: { foulFerment: 3 },
      coords: { x: 3, y: 4.5 }
    },
    smokeblight: {
      dep: { foulFerment: 3 },
      coords: { x: 3, y: 5.5 }
    },
  },





};


let skills = {
  ...buildTitleClasses(templateSharedSkills, templateTitleTrees),


};

let raceSkills = {
  Earthlain: {

    analyze: { name_en: "Analyze", desc: "", stats: [], type: "★", dep: {}, maxLevel: 1, coords: { x: 0, y: 0.5 } },
    doubleAttack: { name_en: "Double Attack", desc: "", stats: [], type: "★", dep: {}, maxLevel: 1, coords: { x: 1, y: 0.5 } },
    fullRetreat: { name_en: "Full Retreat", desc: "", stats: [], type: "★", dep: {}, maxLevel: 1, coords: { x: 0, y: 1.5 } },
    manaHeal: { name_en: "Mana Heal", desc: "", stats: [], type: "★", dep: {}, maxLevel: 1, coords: { x: 1, y: 1.5 } },
    blessing: { name_en: "Blessing", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 0, y: 2.5 } },

    gaiasGrace: { name_en: "Gaia's Grace", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 1, y: 2.5 } },
    fishing: { name_en: "Fishing", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 0, y: 3.5 } },
    forageSkill: { name_en: "Forage Skill", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 1, y: 3.5 } },

    resuscitate: { name_en: "Resuscitate", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 0, y: 4.5 } },
    sortingSkill: { name_en: "Sorting Skill", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 1, y: 4.5 } },
    gatheringSkill: { name_en: "Gathering Skill", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 0, y: 5.5 } },
    animalCare: { name_en: "Animal Care", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 1, y: 5.5 } },

    triShield: { name_en: "Tri-Shield", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 2, y: 0.5 } },
    nimbleArts: { name_en: "Nimble Arts", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 3, y: 0.5 } },
    resilience: { name_en: "Resilience", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 2, y: 1.5 } },
    bulwark: { name_en: "Bulwark", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 3, y: 1.5 } },

    blackMist: { name_en: "Black Mist", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 2, y: 2.5 } },
    bodybuilding: { name_en: "Bodybuilding", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 3, y: 2.5 } },
    cardio: { name_en: "Cardio", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 2, y: 3.5 } },
    talent: { name_en: "Talent", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 3, y: 3.5 } },

    determination: { name_en: "Determination", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 2, y: 4.5 } },
    gaiasGift: { name_en: "Gaia's Gift", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 3, y: 4.5 } },
    anatomy: { name_en: "Anatomy", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 2, y: 5.5 } },
    gourmet: { name_en: "Gourmet", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 3, y: 5.5 } },

  },



  Celestrian: {
    lunarGrace: { name_en: "Lunar Grace", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 0, y: 0 } },
    chop: { name_en: "Chop", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 0, y: 1 } },
    detectMana: { name_en: "Detect Mana", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 0, y: 2 } },
    anatomy2: { name_en: "Anatomy", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 0, y: 3 } },
    nightVision: { name_en: "Night Vision", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 0, y: 4 } },
    gourmet2: { name_en: "Gourmet", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 0, y: 5 } },
    imbue: { name_en: "Imbue", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 0, y: 6 } },

    resilience2: { name_en: "Resilience", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 1, y: 0 } },
    anattaBarrier: { name_en: "Anatta Barrier", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 1, y: 1 } },
    bodybuilding2: { name_en: "Bodybuilding", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 1, y: 2 } },
    cardio2: { name_en: "Cardio", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 1, y: 3 } },
    talent2: { name_en: "Talent", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 1, y: 4 } },
    lunarGift: { name_en: "Lunar Gift", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 1, y: 5 } },
    animalCare2: { name_en: "Animal Care", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 1, y: 6 } },

    focus: { name_en: "Focus", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 2, y: 0 } },
    analyze2: { name_en: "Analyze", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 2, y: 1 } },
    doubleAttack2: { name_en: "Double Attack", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 2, y: 2 } },
    fullRetreat2: { name_en: "Full Retreat", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 2, y: 3 } },
    manaHeal2: { name_en: "Mana Heal", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 2, y: 4 } },
    enchant: { name_en: "Enchant", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 2, y: 5 } },
    gameChanger: { name_en: "Game Changer", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 2, y: 6 } },

    hex: { name_en: "Hex", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 3, y: 0 } },
    triMagic: { name_en: "Tri-Magic", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 3, y: 1 } },
    chainBlast: { name_en: "Chain Blast", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 3, y: 2 } }
  },

  Therian: {
    aresGrace: { name_en: "Ares' Grace", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 0, y: 0 } },
    huntingSkill: { name_en: "Hunting Skill", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 0, y: 1 } },
    mine: { name_en: "Mine", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 0, y: 2 } },
    reflexes: { name_en: "Reflexes", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 0, y: 3 } },
    precaution: { name_en: "Precaution", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 0, y: 4 } },
    bruteStrength: { name_en: "Brute Strength", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 0, y: 5 } },
    forageSkill2: { name_en: "Forage Skill", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 0, y: 6 } },

    fishing2: { name_en: "Fishing", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 1, y: 0 } },
    thirdEye: { name_en: "Third Eye", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 1, y: 1 } },
    bodybuilding3: { name_en: "Bodybuilding", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 1, y: 2 } },
    cardio3: { name_en: "Cardio", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 1, y: 3 } },
    talent3: { name_en: "Talent", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 1, y: 4 } },
    aresGift: { name_en: "Ares' Gift", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 1, y: 5 } },
    bulwark2: { name_en: "Bulwark", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 1, y: 6 } },

    sortingSkill2: { name_en: "Sorting Skill", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 2, y: 0 } },
    analyze3: { name_en: "Analyze", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 2, y: 1 } },
    doubleAttack3: { name_en: "Double Attack", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 2, y: 2 } },
    fullRetreat3: { name_en: "Full Retreat", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 2, y: 3 } },
    manaHeal3: { name_en: "Mana Heal", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 2, y: 4 } },
    wideSwing: { name_en: "Wide Swing", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 2, y: 5 } },
    bindingForce: { name_en: "Binding Force", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 2, y: 6 } },

    lifeDrain: { name_en: "Life Drain", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 3, y: 0 } },
    triAttack: { name_en: "Tri-Attack", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 3, y: 1 } },
    allOutAttack: { name_en: "All-out Attack", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 3, y: 2 } }
  },

  Brouni: {
    zephyrsGrace: { name_en: "Zephyr's Grace", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 0, y: 0 } },
    take: { name_en: "Take", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 0, y: 1 } },
    resilience3: { name_en: "Resilience", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 0, y: 2 } },
    animalCare3: { name_en: "Animal Care", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 0, y: 3 } },
    fishing3: { name_en: "Fishing", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 0, y: 4 } },
    herbology: { name_en: "Herbology", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 0, y: 5 } },
    sortingSkill3: { name_en: "Sorting Skill", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 0, y: 6 } },

    anattaBarrier2: { name_en: "Anatta Barrier", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 1, y: 0 } },
    reflexes2: { name_en: "Reflexes", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 1, y: 1 } },
    bodybuilding4: { name_en: "Bodybuilding", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 1, y: 2 } },
    cardio4: { name_en: "Cardio", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 1, y: 3 } },
    talent4: { name_en: "Talent", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 1, y: 4 } },
    zephyrsGift: { name_en: "Zephyr's Gift", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 1, y: 5 } },
    haggle: { name_en: "Haggle", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 1, y: 6 } },

    gourmet3: { name_en: "Gourmet", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 2, y: 0 } },
    analyze4: { name_en: "Analyze", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 2, y: 1 } },
    doubleAttack4: { name_en: "Double Attack", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 2, y: 2 } },
    fullRetreat4: { name_en: "Full Retreat", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 2, y: 3 } },
    manaHeal4: { name_en: "Mana Heal", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 2, y: 4 } },
    guardOrder: { name_en: "Guard Order", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 2, y: 5 } },
    superspeed: { name_en: "Superspeed", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 2, y: 6 } },

    forbiddenRite: { name_en: "Forbidden Rite", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 3, y: 0 } },
    hygieiasBowl: { name_en: "Hygieia's Bowl", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 3, y: 1 } },
    aegisShield: { name_en: "Aegis Shield", desc: "", stats: [], dep: {}, maxLevel: 1, coords: { x: 3, y: 2 } }
  }
};
