const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pokeSchema = new Schema({
    name: String,
    range: String,
    role: String,
    numEvolutions: Number,
    preEvolutions: [
        {
            name: String,
            evolveLv: Number,
        }
    ],
    stats: {
        offense: {type:Number, min:0, max:5},
        endurance: {type:Number, min:0, max:5},
        mobility: {type:Number, min:0, max:5},
        scoring: {type:Number, min:0, max:5},
        support: {type:Number, min:0, max:5},
    },
    moves: {
        basic: String,
        passive: {
            name: String,
            img: String,
            desc: String
        },
        primary: {
            start: {
                name: String,
                cooldown: Number,
                moveType: String,
                desc: String,
            },
            choiceLv: Number,
            choice1: {
                name: String,
                cooldown: Number,
                moveType: String,
                desc: String,
                upgrade: String,
            },
            choice2: {
                name: String,
                cooldown: Number,
                moveType: String,
                desc: String,
                upgrade: String,
            }
        },
        secondary: {
            start: {
                name: String,
                cooldown: Number,
                moveType: String,
                desc: String,
            },
            choiceLv: Number,
            choice1: {
                name: String,
                cooldown: Number,
                moveType: String,
                desc: String,
                upgrade: String,
            },
            choice2: {
                name: String,
                cooldown: Number,
                moveType: String,
                desc: String,
                upgrade: String,
            }
        },
        unite: {
            name: String,
            moveType: String,
            desc: String,
            level: Number
        }
    }
})

const Pokemon = mongoose.model('Pokemon', pokeSchema)

module.exports = Pokemon
