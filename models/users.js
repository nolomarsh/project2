const mongoose = require('mongoose')
const Schema = mongoose.Schema
const Pokemon = require('./pokemon.js')

const userSchema = new Schema({
    username: {type:String, required:true, unique:true},
    password: {type:String, required:true},
    favePokemon: [String],
    friendIds: [String]
})

const User = mongoose.model('User', userSchema)

module.exports = User
