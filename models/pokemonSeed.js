module.exports = [
    {
        name: 'eldegoss',
        range: 'ranged',
        role: 'supporter',
        numEvolutions: 2,
        preEvolutions: [{
            name: 'gossifleur',
            evolveLv: 4
        }],
        stats: {
            offense: 1.5,
            endurance: 2,
            mobility: 2.5,
            scoring: 2.5,
            support: 4,
        },
        moves: {
            basic: "Becomes a boosted attack with every third attack, attaching a bit of cotton fluff to opposing Pokémon. The user's basic attacks against an opposing Pokémon with cotton fluff on it deal increased damage and decreases the opposing Pokémon's movement speed for a short time.",
            passive: {
                name: 'cotton down',
                desc: "Damages an opponent and decreases their movement speed for a short time after the Pokemon with this ability receives a certain amount of damage. When that happens, the Pokemon also recovers HP and has its movement speed increased for a short time."
            },
            primary: {
                start: {
                    name: 'leafage',
                    cooldown: 4.5,
                    moveType: 'ranged',
                    desc: "Pelts the target with leaves, decreasing the movement speed of opposing Pokémon for a short time when it hits.",
                },
                choiceLv: 4,
                choice1: {
                    name: "pollen puff",
                    cooldown: 5,
                    moveType: 'ranged',
                    desc: "Throws a pollen puff which attaches to a Pokemon. The pollen pouff restores HP for ally Pokemon and deals damage to opposing Pokemon",
                    upgrade: "If a pollen puff attaches to opposing Pokemon, it also deals damage over time. If a pollen puff attaches to ally Pokemon, it also reduces the damage they receive.",
                },
                choice2: {
                    name: "leaf tornado",
                    cooldown: 9,
                    moveType: "ranged",
                    desc: "Attacks with a tornado of sharp leaves, leaving a path in its wake that inreases ally Pokemon's movement speed for a short time.",
                    upgrade: "Also decreases the accuracy of opposing Pokemon when this move hits.",
                }
            },
            secondary: {
                start: {
                    name: "synthesis",
                    cooldown: 8,
                    moveType: "recovery",
                    desc: "Restores the HP of the user and nearby ally Pokemon",
                },
                choiceLv: 6,
                choice1: {
                    name: "cotton guard",
                    cooldown: 7,
                    moveType: "buff",
                    desc: "Protects the user and nearby ally Pokemon with cotton. The cotton absorbs damage, and when the move ends, the cotton restores some HP.",
                    upgrade: "Increases the user's movement speed while using this move.",
                },
                choice2: {
                    name: "cotton spore",
                    cooldown: 10,
                    moveType: "area",
                    desc: "Gathers spores around the user that reduce damage received. The spores burst after a short time, dealing damage to opposing Pokemon in the area of effect and decreasing the movement speed of opposing Pokemon for a short time.",
                    upgrade: "Also reduces the damage the user receives while using this move.",
                }
            },
            unite: {
                name: "cotton cloud crash",
                moveType: "area",
                desc: "Has the user float into the air and become invincible. If used again, has the user pound the ground, attacking and shoving opposing Pokemon and restoring HP to ally Pokemon in the area of effect.",
                level: 9
            }
        }
    },
    {
        name: "gengar",
        range: "melee",
        role: "speedster",
        numEvolutions: 3,
        preEvolutions: [
            {
                name: 'gastly',
                evolveLv: 5,
            },
            {
                name: 'haunter',
                evolveLv: 9
            }
        ],
        stats: {
            offense: 3.5,
            endurance: 2,
            mobility: 4,
            scoring: 3,
            support: 0.5,
        },
        moves: {
            basic: "Becomes a boosted attak with every third attack, lunging at an opposing Pokemon and dealing damage.",
            passive: {
                name: "levitate",
                desc: "When the Pokemon is not in combat, its movement speed is increased"
            },
            primary: {
                start: {
                    name: "will-o-wisp",
                    cooldown: 5,
                    moveType: "ranged",
                    desc: "Shoots multiple sinister flames, dealing damage to opposing Pokemon and leaving them burned when it hits.",
                },
                choiceLv: 5,
                choice1: {
                    name: "shadow ball",
                    cooldown: 4.5,
                    moveType: "ranged",
                    desc: "Hurls a shadowy blob at the target, decreasing the movement speed and Sp. Def of opposing Pokemon for a short time when it hits.",
                    upgrade: "Increases damage dealt by this move.",
                },
                choice2: {
                    name: "sludge bomb",
                    cooldown: 8,
                    moveType: "area",
                    desc: "Hurls unsanitary sludge to the designated area, leaving opposing Pokemon poisoned when it hits.",
                    upgrade: "Increases the poison effect's duration.",
                }
            },
            secondary: {
                start: {
                    name: "lick",
                    cooldown: 7,
                    moveType: "area",
                    desc: "Attacks with the user's tongue and pull opposing Pokemon toward the user.",
                },
                choiceLv: 7,
                choice1: {
                    name: "dream eater",
                    cooldown: 8,
                    moveType: "ranged",
                    desc: "Puts opposing Pokemon to sleep when it hits. If used again while a nearby opposing Pokemon is asleep, the user appears behind the sleeping Pokemon and attacks, restoring the user's HP and reducing the cooldown of Shadow Ball or Sludge Bomb.",
                    upgrade: "Increases the amount of damage dealt and HP restored by this move.",
                },
                choice2: {
                    name: "hex",
                    cooldown: 7.5,
                    moveType: "dash",
                    desc: "Has the user disappear and move to the designated location, dealing damage to opposing Pokemon in the area of effect when the user reappears. If this hits an opposing Pokemon that is afflicted by a status condition, it deals increased damage and its cooldown is reduced.",
                    upgrade: "Increases damage dealt by this move.",
                }
            },
            unite: {
                name: "phantom ambush",
                moveType: "dash",
                desc: "Has the user jump to the designated area and start sneaking with increased movement speed. if the Unite Move is used again, it deals damage to opposing Pokemon in the area of effect and decreases their movement speed for a short time.",
                level: 9
            }
        }
    },
    {
        name: "mr. mime",
        range: "melee",
        role: "supporter",
        numEvolutions: 1,
        preEvolutions: [],
        stats: {
            offense: 1.5,
            endurance: 4,
            mobility: 1,
            scoring: 1.5,
            support: 4,
        },
        moves: {
            basic: "Becomes a boosted attack with every third attack, dealing increaswed damage and throwing opposing Pokemon when it hits.",
            passive: {
                name: "filter",
                desc: "Reduces damage reeived by the Pokemon for a short time after it uses a move."
            },
            primary: {
                start: {
                    name: "fake out",
                    cooldown: 7,
                    moveType: "melee",
                    desc: "Makes the user slap its hands together, shoving opposing Pokemon in front of it",
                },
                choiceLv: 4,
                choice1: {
                    name: "confusion",
                    cooldown: 6,
                    moveType: "ranged",
                    desc: "Attacks straight in front of the user, dealing damage to opposing Pokemon and shoving it. If an opposing Pokemon shoved by this move hits an obstacle, it receives increased damage from this move and is left unable to act for a short time. if the opposing Pokemon is currently guard-swapped, it is not shoved but receives increased damage from this move and is left unable to act for a short time.",
                    upgrade: "Increases damage dealt by this move.",
                },
                choice2: {
                    name: "psychic",
                    cooldown: 6,
                    moveType: "debuff",
                    desc: "Centers one telekinetic blast each on the user, any guard-swapped opposing Pokemon, and any Light Screen or Barrier walls created by the user, damaging all opposing Pokemon caught in the blasts and lowering their Sp. Def for a short time. If an opposing Pokemon is hit by multiple overlapping blasts, that Pokemon is also left unable to act for a short time.",
                    upgrade: "Also decreases the movement speed of opposing Pokemon for a short time.",
                }
            },
            secondary: {
                start: {
                    name: "light screen",
                    cooldown: 8,
                    moveType: "hindrance",
                    desc: "Creates a wall of light in the designated area that prevents opposing Pokemon from passing.",
                },
                choiceLv: 7,
                choice1: {
                    name: "barrier",
                    cooldown: 2,
                    moveType: "hindrance",
                    desc: "Creates a translucent wall in the designated location that prevents opposing Pokemon from passing. A maximum of two uses can be kept in reserve for this move.",
                    upgrade: "Increases the maximum number of uses that can be kept ion reserve for this move.",
                },
                choice2: {
                    name: "guard swap",
                    cooldown: 4.5,
                    moveType: "debuff",
                    desc: "Swaps the user's Defense and Sp. Def stats with those of another Pokemon for a short time when it hits. Swapping with an opposing Pokemon deals it damage over time and decreases its movement speed while increasing the user's movement speed for a short time. Swapping with an ally Pokemon increases the movement speed of that Pokemon and the user for a short time.",
                    upgrade: "Also continually restores the HP of the user and the ally Pokemon while this move is in effect.",
                }
            },
            unite: {
                name: "showtime!",
                moveType: "area",
                desc: "Has the user jump to the designated location and start a pantomime performance, dealing damage oer time to opposing Pokemon in the area of effect and leaving them unable to act for a short time.",
                level: 9
            }
        }
    },
    {
        name: "venusaur",
        range: "ranged",
        role: "attacker",
        numEvolutions: 3,
        preEvolutions: [
            {
                name: "bulbasaur",
                evolveLv: 5,
            },
            {
                name:'ivysaur',
                evolveLv: 9
            }
        ],
        stats: {
            offense: 4.5,
            endurance: 2,
            mobility: 2,
            scoring: 2.5,
            support: 1,
        },
        moves: {
            basic: "Becomes a boosted attack with every third attack, dealing increased damage. This boosted attack also pulls opposing Pokemon inward between the user's vines.",
            passive: {
                name: "overgrow",
                desc: "When the Pokemon is at low HP, the damage it deals is increased."
            },
            primary: {
                start: {
                    name: "seed bomb",
                    cooldown: 6,
                    moveType: "ranged",
                    desc: "Hurls a large seed at the designated area, dealing damage to opposing Pokemon in the area of effect.",
                },
                choiceLv: 5,
                choice1: {
                    name: "sludge",
                    cooldown: 6,
                    moveType: "ranged",
                    desc: "Hurls unsanitary sludge to the designated area, dealing damage to opposing Pokemon in the area of effect, leaving them poisoned and decreasing their movement speede and Sp. Def for a short time.",
                    upgrade: "Increases this move's area of effect.",
                },
                choice2: {
                    name: "giga drain",
                    cooldown: 7,
                    moveType: "recovery",
                    desc: "Drains HP from opposing Pokemon in the area of effect, dealing damage to them and restoring the user's HP when it hits. Also reduces the damage the user receives for a short time.",
                    upgrade: "Increases the amount of HP this move restores.",
                }
            },
            secondary: {
                start: {
                    name: "razor leaf",
                    cooldown: 9,
                    moveType: "area",
                    desc: "Launches many sharp-edged leaves in a quick succession of attacks, dealing damage to opposing Pokemon in the area of effect.",
                },
                choiceLv: 7,
                choice1: {
                    name: "solar beam",
                    cooldown: 11,
                    moveType: "area",
                    desc: "Blasts a bundled beam of light, dealing damage to opposing Pokemon in the area of effect.",
                    upgrade: "Reduces this move's cooldown.",
                },
                choice2: {
                    name: "petal dance",
                    cooldown: 11,
                    moveType: "area",
                    desc: "Scatters petals around the user, increasing movement speed for a short time and dealing damage over time to oppoing Pokemon in the area of effect.",
                    upgrade: "Increases this move's area of effect.",
                }
            },
            unite: {
                name: "verdant anger",
                moveType: "area",
                desc: "Launches a giant seed toward the designated area. The seed then splits apart, dealing damage to opposing Pokemon in the area of effect and decreasing their movement speed for a short time.",
                level: 9
            }
        }
    },
    {
        name: "charizard",
        range: "ranged",
        role: "all-rounder",
        numEvolutions: 3,
        preEvolutions: [
            {
                name: "charmander",
                evolveLv: 5,
            },
            {
                name:"charmeleon",
                evolveLv: 9
            }
        ],
        stats: {
            offense: 4.5,
            endurance: 3,
            mobility: 2.5,
            scoring: 3,
            support: 0.5,
        },
        moves: {
            basic: "Deals continual damage. Deals increased damage to opposing Pokemon that are burned and increases in range when the user evolves.",
            passive: {
                name: "blaze",
                desc: "When the Pokemon is at half HP or less, its critical-hit rate is increase."
            },
            primary: {
                start: {
                    name: "flame burst",
                    cooldown: 6,
                    moveType: "ranged",
                    desc: "Attacks with a bursting flame. When this move hits, it leaves opposing Pokemon burned and increases the user's movement speed for a short time.",
                },
                choiceLv: 5,
                choice1: {
                    name: "flamethrower",
                    cooldown: 7,
                    moveType: "ranged",
                    desc: "Attacks with an intense blast of fire. When this move hits, it leaves opposing Pokemon burned and increases the user's movement speed for a short time.",
                    upgrade: "Increases this move's damage and the damage caused by burning.",
                },
                choice2: {
                    name: "fire punch",
                    cooldown: 6,
                    moveType: "dash",
                    desc: "Has the user punch with a fiery fist, dealing damage and shoving opposing Pokemon when it hits. Also leaves the opposing Pokemon it shoves burned.",
                    upgrade: "Reduces this move's cooldown every time a basic attack hits.",
                }
            },
            secondary: {
                start: {
                    name: "fire spin",
                    cooldown: 10,
                    moveType: "area",
                    desc: "Encircles opposing Pokemon in the area of effect in a vortex of fire. After this move hits, it deals damage over time and decreases the movement speed of opposing Pokemon for a short time.",
                },
                choiceLv: 7,
                choice1: {
                    name: "fire blast",
                    cooldown: 11,
                    moveType: "area",
                    desc: "Blasts intense, all-consuming fire, dealing damage over time to opposing Pokemon while the flames continue to burn on the ground and decreasing the movement speed of opposing Pokemon for a short time.",
                    upgrade: "Increases damage dealt by this move.",
                },
                choice2: {
                    name: "flare blitz",
                    cooldown: 10,
                    moveType: "dash",
                    desc: "Has the user charge forward cloaked in fire, throwing opposing Pokemon. Also grants the user a shield.",
                    upgrade: "Also decreases the movement speed of opposing Pokemon for a short time when they are thrown by this move.",
                }
            },
            unite: {
                name: "seismic slam",
                moveType: "sure hit",
                desc: "Has the user fly up into the air, allowing it to move freely over obstacles. While this Unite Move is being used, the user's basic attacks deal increased damage and leave opposing Pokemon burned. In addition, when the user deals damage to an opposing Pokemon, the user recovers HP. Using this Unite Move again on a Pokemon from the opposing team has the user grab it and slam it onto the ground from the air.",
                level: 9
            }
        }
    },
    {
        name: "pikachu",
        range: "ranged",
        role: "attacker",
        numEvolutions: 1,
        preEvolutions: [
            {}
        ],
        stats: {
            offense: 4.5,
            endurance: 1.5,
            mobility: 2.5,
            scoring: 2,
            support: 1.5,
        },
        moves: {
            basic: "Becomes a boosted attack with every third attack, dealing increased damage. This boosted attack also paralyzes opposing Pokemon for a short time when it hits.",
            passive: {
                name: "static",
                desc: "Paralyzes all opponents near the Pokemon for a short time when the Pokemon received damage."
            },
            primary: {
                start: {
                    name: "thunder shock",
                    cooldown: 5,
                    moveType: "sure hit",
                    desc: "Releases electricity, dealing damage to opposing Pokemon in the area of effect. Also paralyzes opposing Pokemon for a short time.",
                },
                choiceLv: 4,
                choice1: {
                    name: "electro ball",
                    cooldown: 5,
                    moveType: "sure hit",
                    desc: "Hurls an electric orb, dealing damage to opposing Pokemon in the area of effect and leaving them paralyzed for a short time. This move's damage increases the lower the opposing Pokemon's remaining HP is.",
                    upgrade: "Increases damage dealt by this move.",
                },
                choice2: {
                    name: "thunder",
                    cooldown: 8,
                    moveType: "area",
                    desc: "Drops wicked thunderbolts, dealing damage to opposing Pokemon in the area of effect.",
                    upgrade: "Increases the number of times this move attacks.",
                }
            },
            secondary: {
                start: {
                    name: "electroweb",
                    cooldown: 9,
                    moveType: "hindrance",
                    desc: "Attacks and captures opposing Pokemon using an electric net, leaving them unable to move.",
                },
                choiceLv: 6,
                choice1: {
                    name: "volt tackle",
                    cooldown: 10,
                    moveType: "hindrance",
                    desc: "Has the user electrify itself and charge ahead, throwing opposing Pokemon.",
                    upgrade: "Reduces this move's cooldown.",
                },
                choice2: {
                    name: "thunderbolt",
                    cooldown: 8,
                    moveType: "hindrance",
                    desc: "Attacks with a strong electric blast, dealing damage to opposing Pokemon in the area of effect and leaving them unable to act.",
                    upgrade: "Increases damage dealt by this move.",
                }
            },
            unite: {
                name: "thunderstorm",
                moveType: "area",
                desc: "Attacks the opposing team's Pokemon near the user with tremendous bolts of lightning.",
                level: 9
            }
        }
    },
    {
        name: "alolan ninetails",
        range: "ranged",
        role: "attacker",
        numEvolutions: 2,
        preEvolutions: [
            {
                name: "alolan vulpix",
                evolveLv: 4,
            }
        ],
        stats: {
            offense: 4,
            endurance: 1.5,
            mobility: 1.5,
            scoring: 2.5,
            support: 3,
        },
        moves: {
            basic: "Becomes a boosted attack every third attack. When this boosted attack hits, it deals damage to nearby opposing Pokemon and decreases their movement speed for a short time.",
            passive: {
                name: "snow warning",
                desc: "Causes snow to fall on opposing Pokemon, dealing damage to them and decreasing its movement speed for a short time. Boosted attacks and moves (except Aurora Veil) sling snow, and hitting the same target with snow multiple times will freeze them for a short time."
            },
            primary: {
                start: {
                    name: "powder snow",
                    cooldown: 5,
                    moveType: "area",
                    desc: "Attacks with a chilly gust of powdery snow, decreasing the movement speed of opposing Pokemon for a short time when it hits.",
                },
                choiceLv: 4,
                choice1: {
                    name: "avalanche",
                    cooldown: 7,
                    moveType: "area",
                    desc: "Attacks with a gush of chilly ice toward the designated area. The ice forms a wall that cannot be passed through on land. After a short time, this wall melts and collapses, dealing damage to opposing Pokemon in the area of effect.",
                    upgrade: "Also decreases the movement speed of opposing Pokemon for a short time when this move hits.",
                },
                choice2: {
                    name: "dazzling gleam",
                    cooldown: 7.5,
                    moveType: "hindrance",
                    desc: "Attacks with a powerful cone of blinding light, leaving opposing Pokemon unable to act when this move hits.",
                    upgrade: "Increases damage dealt and the length of time opposing Pokemon are unable to act.",
                }
            },
            secondary: {
                start: {
                    name: "icy wind",
                    cooldown: 8,
                    moveType: "ranged",
                    desc: "Attacks with a gust of freezing air, dealing damage to opposing Pokemon in the area of effect and decreasing their movement speed for a short time when it hits.",
                },
                choiceLv: 6,
                choice1: {
                    name: "blizzard",
                    cooldown: 11,
                    moveType: "ranged",
                    desc: "Summons a howling Blizzard in two blasts in front of the user. The first blast deals damage to opposing Pokemon in the area of effect and decreases their movement speed for a short time. The second blast deals damage to opposing Pokemon in the area of effect and shoves them. If the second blast hits an obstacle, it also deals damage to opposing Pokemon near the point of impact.",
                    upgrade: "Increases damage dealt by this move.",
                },
                choice2: {
                    name: "aurora veil",
                    cooldown: 13,
                    moveType: "buff",
                    desc: "Creates an aurora around the user that reduces damage received by the user and ally Pokemon in the area of effect. While the user is inside the aurora, its movement speed is increased and its basic attacks become boosted attacks.",
                    upgrade: "Further reduces damage ally Pokemon receive.",
                }
            },
            unite: {
                name: "snow globe",
                moveType: "area",
                desc: "Attacks with chilly snow and ice, dealing damage to opposing Pokemon in the area of effect when it hits. Deals increased damage to opposing Pokemon that are frozen.",
                level: 9
            }
        }
    },
    {
        name: "wigglytuff",
        range: "melee",
        role: "supporter",
        numEvolutions: 2,
        preEvolutions: [
            {
                name: 'jigglypuff',
                evolveLv: 4,
            }
        ],
        stats: {
            offense: 1,
            endurance: 2.5,
            mobility: 2.5,
            scoring: 2,
            support: 4.5,
        },
        moves: {
            basic: "Becomes a boosted attack with every third attack, dealing damage to opposing Pokemon and spinning them around when it hits.",
            passive: {
                name: "cute charm",
                desc: "When the Pokemon is hit by an opposing Pokemon's attack at close range, it makes that opposing Pokemon infatuated for a short time. Infatuated opposing Pokemon become enthralled and appraoch the infatuating Pokemon against their will. The effects of this Ability have a cooldown and cannot trigger on the same opposing Pokemon in quick succession."
            },
            primary: {
                start: {
                    name: "pound",
                    cooldown: 5,
                    moveType: "melee",
                    desc: "Has the user perform a combo attack in front of itself, dealing damage to opposing Pokemon and decreasing their movement speed for a short time when the attack hits.",
                },
                choiceLv: 6,
                choice1: {
                    name: "double slap",
                    cooldown: 5,
                    moveType: "melee",
                    desc: "Has the user perform a combo attack in front of itself, dealing damage to opposing Pokemon and decreasing their movement speed for a short time when the attack hits.",
                    upgrade: "Increases the number of attacks for this move.",
                },
                choice2: {
                    name: "dazzling gleam",
                    cooldown: 4.5,
                    moveType: "ranged",
                    desc: "Emits a powerful flash in the designated direction, dealing damage to opposing Pokemon in the area of effect twice.",
                    upgrade: "Also decreases the movement speed of opposing Pokemon for a short time when the first hit of this move deals damage to them.",
                }
            },
            secondary: {
                start: {
                    name: "defense curl",
                    cooldown: 8,
                    moveType: "hindrance",
                    desc: "Has a user perform a quick roll, granting it a shield and throwing any opposing Pokemon hit by the roll. Hitting an obstacle while rolling will change the direction the user is moving and reset the cooldown of Pound, Double Slap, or Dazzling Gleam.",
                },
                choiceLv: 4,
                choice1: {
                    name: "rollout",
                    cooldown: 10,
                    moveType: "hindrance",
                    desc: "Has the user perform a quick roll, granting it a shield. Also deals damage to any opposing Pokemon hit by the roll and throws them. Hitting an obstacle while rolling will change the direction the user is moving and reset the cooldown of Pound, Double Slap, or Dazzling Gleam.",
                    upgrade: "Increases the length of time opposing Pokemon are thrown.",
                },
                choice2: {
                    name: "sing",
                    cooldown: 10,
                    moveType: "ranged",
                    desc: "Has the user sing, decreasing the movement speed of nearby opposing Pokemon for a short time. Opposing Pokemon that stay in the move's area of effect for awhile are put to sleep for a short time, which also decreases their Defense and Sp. Def.",
                    upgrade: "Increases the length of time that opposing Pokemon stay asleep.",
                }
            },
            unite: {
                name: "starlight recital",
                moveType: "buff",
                desc: "Has the user begin performing a recital, granting itself and nearby ally Pokemon a shield as well as removing all status conditions from the affected Pokemon and making them immune to hindrances for a short time.",
                level: 8
            }
        }
    },
    {
        name: "machamp",
        range: "melee",
        role: "all-rounder",
        numEvolutions: 3,
        preEvolutions: [
            {
                name: "machop",
                evolveLv: 5,
            },
            {
                name: "machoke",
                evolveLv: 9
            }
        ],
        stats: {
            offense: 4,
            endurance: 2.5,
            mobility: 2.5,
            scoring: 2.5,
            support: 1,
        },
        moves: {
            basic: "Becomes a boosted attack with every third attack, dealing increased damage when it hits. This boosted attack also decreases movement speed of opposing Pokemon for a short time.",
            passive: {
                name: "guts",
                desc: "Increases the Pokemon's attack when the Pokemon is afflicted by a status condition."
            },
            primary: {
                start: {
                    name: "karate chop",
                    cooldown: 6,
                    moveType: "melee",
                    desc: "Attacks opposing Pokemon with a sharp chop.",
                },
                choiceLv: 7,
                choice1: {
                    name: "close combat",
                    cooldown: 6,
                    moveType: "melee",
                    desc: "Unleashes a series of punches in the designated direction, dealing increased damage with the last punch. The user can move while using this move and becomes immune to hindrances.",
                    upgrade: "Deals increased damage to Pokemon that are affected by a status condition.",
                },
                choice2: {
                    name: "cross chop",
                    cooldown: 6,
                    moveType: "dash",
                    desc: "Has the user deliver a double chop with forearms crossed while dashing forward.",
                    upgrade: "Increases Attack with each basic attack, up to a set max.",
                }
            },
            secondary: {
                start: {
                    name: "bulk up",
                    cooldown: 9,
                    moveType: "buff",
                    desc: "After using this move, the user becomes immune to hindrances for a short time, their movement speed and attack are increased, and their basic attack speed is increased. The user's next basic attack also becomes a boosted attack.",
                },
                choiceLv: 5,
                choice1: {
                    name: "dynamic punch",
                    cooldown: 8,
                    moveType: "dash",
                    desc: "Has the user jump to the designated location, dealing damage to opposing Pokémon in the area of effect and leaving them unable to act when it hits. After using this move, the user becomes immune to hindrances for a short time, their movement speed is increased, and their basic attack speed is increased. The user's next basic attack also becomes a boosted attack.",
                    upgrade: "Further increases attack and movement speed.",
                },
                choice2: {
                    name: "sumission",
                    cooldown: 11,
                    moveType: "hindrance",
                    desc: "Increases the user's movement speed and makes it immune to hindrances. When the user's next basic attack hits, the attack deals increased damage and slams the opposing Pokemon onto the ground, leaving it unable to act. Once this move ends, the user's critical-hit rate and basic attack speed are increased for a short time.",
                    upgrade: "Further increases critical-hit rate and increases basic attack speed.",
                }
            },
            unite: {
                name: "barrage blow",
                moveType: "buff",
                desc: "Increases the user's movement speed, Attack, Defense, and Sp. Def for a short time. If used again, unleashes a combo attack, dealing damage to opposing Pokemon in the area of effect and shoving them. The final blow deals an especially large amount of damage.",
                level: 9
            }
        }
    },
    {
        name: "slowbro",
        range: "ranged",
        role: "defender",
        numEvolutions: 2,
        preEvolutions: [
            {
                name: "slowpoke",
                evolveLv: 4,
            }
        ],
        stats: {
            offense: 1.5,
            endurance: 4,
            mobility: 1.5,
            scoring: 1.5,
            support: 4,
        },
        moves: {
            basic: "Becomes a boosted attack with every third attack. When this boosted attack hits, it deals damage to nearby opposing Pokemon and decreases their movement speed for a short time.",
            passive: {
                name: "oblivious",
                desc: "When the Pokemon receives damage, the HP loss is gradual. When damaging an opposing Pokemon with a move, the Pokemon nullifies some of this pending damage before it takes effect, and it also decreases the opposing Pokemon's Sp. Def for a short time."
            },
            primary: {
                start: {
                    name: "water gun",
                    cooldown: 5,
                    moveType: "melee",
                    desc: "Shoots water forcefully, dealing damage to opposing Pokemon and decreasing their movement speed for a short time when it hits. Holding down the button for this move increases its area of effect and damage.",
                },
                choiceLv: 4,
                choice1: {
                    name: "scald",
                    cooldown: 5,
                    moveType: "melee",
                    desc: "Shoots boiling hot water, dealing damage to opposing Pokemon and creating steam when it hits. Opposing Pokemon inside steam's area of effect are left burned and have their movement speed decreased for a short time.",
                    upgrade: "Increases the vapor's area of effect.",
                },
                choice2: {
                    name: "surf",
                    cooldown: 9,
                    moveType: "dash",
                    desc: "Has the user charge forward on a wave, dealing damage to opposing Pokemon in the area of effect and throwing them. This is followed by two more waves that deal damage to opposing Pokemon in the area of effect and decrease their movement speed for a short time.",
                    upgrade: "The second and third waves become larger and also throw opposing pokemon like the first wave does.",
                }
            },
            secondary: {
                start: {
                    name: "slack off",
                    cooldown: 11,
                    moveType: "recovery",
                    desc: "Has the user slack off, continually restoring its HP for a short time. If this slacking off is interrupted, the HP restoration effect continues at decreased power.",
                },
                choiceLv: 6,
                choice1: {
                    name: "String",
                    cooldown: 13,
                    moveType: "recovery",
                    desc: "Allows the user to nullify some damage before it takes effect. For a short time after using this move, the user becomes immune to hindrances and gains increased Defense. This move also increases the damage dealt by the next use of Scald or Surf.",
                    upgrade: "Increases Sp. Atk.",
                },
                choice2: {
                    name: "telekinesis",
                    cooldown: 11,
                    moveType: "hindrance",
                    desc: "Makes opposing Pokemon float with psychic power. If used again, pulls the opposing Pokemon toward the user.",
                    upgrade: "Increases this move's firing speed and range.",
                }
            },
            unite: {
                name: "slowbeam",
                moveType: "hindrance",
                desc: "Has the user stare at an opposing Pokemon and attack continually, dealing damage and binding them. Shields the user and makes them unstoppable while they're using this move.",
                level: 9
            }
        }
    },
    {
        name: "snorlax",
        range: "melee",
        role: "defender",
        numEvolutions: 1,
        preEvolutions: [
            {}
        ],
        stats: {
            offense: 1.5,
            endurance: 5,
            mobility: 2,
            scoring: 1.5,
            support: 2.5,
        },
        moves: {
            basic: "Becomes a boosted attack with every third attack. When this boosted attack hits, it deals damage to nearby opposing Pokemon and decreases their movement speed for a short time.",
            passive: {
                name: "gluttony",
                desc: "Increases the effects gained from eating berries."
            },
            primary: {
                start: {
                    name: "tackle",
                    cooldown: 6,
                    moveType: "dash",
                    desc: "Has the user charge forward belly first, dealing damage when it hits and shoving the first opposing Pokemon it comes in contact with. After this move, the user's next basic attack becomes a boosted attack.",
                },
                choiceLv: 6,
                choice1: {
                    name: "heavy slam",
                    cooldown: 7,
                    moveType: "dash",
                    desc: "Has the user slam their heavy body down, dealing damage to opposing Pokemon in the area of effect and throwing them.",
                    upgrade: "Increases damage dealt by this move.",
                },
                choice2: {
                    name: "flail",
                    cooldown: 6.5,
                    moveType: "hindrance",
                    desc: "Has the user flail about, increasing the user's basic attack damage the lower the user's HP is.",
                    upgrade: "Increases the damage of this move. If the user has low HP while using this move, its basic attacks that hit opposing Pokemon will restore the user's HP.",
                }
            },
            secondary: {
                start: {
                    name: "rest",
                    cooldown: 10,
                    moveType: "hindrance",
                    desc: "Has the user fall asleep on the spot and restores their HP. Blocks the movement of all Pokemon not on the user's team while this move is in effect.",
                },
                choiceLv: 8,
                choice1: {
                    name: "block",
                    cooldown: 11,
                    moveType: "hindrance",
                    desc: "Has the user spread their arms wide to create a wall and grants them a shield. Prevents Pokemon from passing through the wall and shoves opposing Pokemon that run into it.",
                    upgrade: "Reduces the damage the user receives while this move is in effect.",
                },
                choice2: {
                    name: "yawn",
                    cooldown: 12,
                    moveType: "hindrance",
                    desc: "Has the user let loose a huge yawn that lulls opposing Pokemon into a sleepy haze, putting opposing Pokemon hit by this move to sleep.",
                    upgrade: "Also decreases the movement speed of opposing Pokemon for short time when this move hits.",
                }
            },
            unite: {
                name: "power nap",
                moveType: "buff",
                desc: "Has the user go to sleep and begin snoring, dealing damage over time to opposing Pokemon in the area of effect and throwing them. While sleeping, the user becomes immune to hindrances and its HP is continually restored.",
                level: 10
            }
        }
    }
]
