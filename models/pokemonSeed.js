module.exports = [
    {
        name: 'Eldegoss',
        img: '/images/eldegoss/main.png',
        range: 'Ranged',
        role: 'Supporter',
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
                name: 'Cotton Down',
                img: "/images/eldegoss/passive.png",
                desc: "Damages an opponent and decreases their movement speed for a short time after the Pokemon with this ability receives a certain amount of damage. When that happens, the Pokemon also recovers HP and has its movement speed increased for a short time."
            },
            primary: {
                start: {
                    name: 'Leafage',
                    img: '/images/eldegoss/leafage.png',
                    cooldown: 4.5,
                    type: 'Ranged',
                    desc: "Pelts the target with leaves, decreasing the movement speed of opposing Pokémon for a short time when it hits.",
                },
                choice1: {
                    name: "Pollen Puff",
                    img: "/images/eldegoss/pollenPuff.png",
                    cooldown: 5,
                    type: 'Ranged',
                    desc: "Throws a pollen puff which attaches to a Pokemon. The pollen pouff restores HP for ally Pokemon and deals damage to opposing Pokemon",
                    upgrade: "If a pollen puff attaches to opposing Pokemon, it also deals damage over time. If a pollen puff attaches to ally Pokemon, it also reduces the damage they receive.",
                },
                choice2: {
                    name: "Leaf Tornado",
                    img: "/images/eldegoss/leafTornado.png",
                    cooldown: 9,
                    type: "Ranged",
                    desc: "Attacks with a tornado of sharp leaves, leaving a path in its wake that inreases ally Pokemon's movement speed for a short time.",
                    upgrade: "Also decreases the accuracy of opposing Pokemon when this move hits.",
                }
            },
            secondary: {
                start: {
                    name: "Synthesis",
                    img: "/images/eldegoss/synthesis.png",
                    cooldown: 8,
                    type: "Recovery",
                    desc: "Restores the HP of the user and nearby ally Pokemon",
                },
                choice1: {
                    name: "Cotton Guard",
                    img: "/images/eldegoss/cottonGuard.png",
                    cooldown: 7,
                    type: "Buff",
                    desc: "Protects the user and nearby ally Pokemon with cotton. The cotton absorbs damage, and when the move ends, the cotton restores some HP.",
                    upgrade: "Increases the user's movement speed while using this move.",
                },
                choice2: {
                    name: "Cotton Spore",
                    img: "/images/eldegoss/cottonSpore.png",
                    cooldown: 10,
                    type: "Area",
                    desc: "Gathers spores around the user that reduce damage received. The spores burst after a short time, dealing damage to opposing Pokemon in the area of effect and decreasing the movement speed of opposing Pokemon for a short time.",
                    upgrade: "Also reduces the damage the user receives while using this move.",
                }
            },
            unite: {
                name: "Cotton Cloud Crash",
                img: "/images/eldegoss/unite.png",
                type: "Area",
                desc: "Has the user float into the air and become invincible. If used again, has the user pound the ground, attacking and shoving opposing Pokemon and restoring HP to ally Pokemon in the area of effect.",
            }
        }
    }
]
