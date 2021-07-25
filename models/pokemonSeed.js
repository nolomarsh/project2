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
    }
]
