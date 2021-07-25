const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pokeSchema = new Schema({
    name: String,
    img: String,
    range: String,
    role: String,
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
                img: String,
                cooldown: Number,
                type: String,
                desc: String,
            },
            choice1: {
                name: String,
                img: String,
                cooldown: Number,
                type: String,
                desc: String,
                upgrade: String,
            },
            choice2: {
                name: String,
                img: String,
                cooldown: Number,
                type: String,
                desc: String,
                upgrade: String,
            }
        },
        secondary: {
            start: {
                name: String,
                img: String,
                cooldown: Number,
                type: String,
                desc: String,
            },
            choice1: {
                name: String,
                img: String,
                cooldown: Number,
                type: String,
                desc: String,
                upgrade: String,
            },
            choice2: {
                name: String,
                img: String,
                cooldown: Number,
                type: String,
                desc: String,
                upgrade: String,
            }
        },
        unite: {
            name: String,
            img: String,
            type: String,
            desc: String,
        }
    }
})

const Pokemon = mongoose.model('Pokemon', pokeSchema)

module.exports = Pokemon
