const express = require('express')
const pokemon = express.Router()
const Pokemon = require('../models/pokemon.js')
const seed = require('../models/pokemonSeed.js')

pokemon.get('/', (req,res) => {
    Pokemon.find({}, (error, pokemon) => {
        res.render('pokemon/index.ejs', {
            allPokemon: pokemon
        })
    })
})

pokemon.get('/seed', (req,res) => {
    Pokemon.deleteMany({}, () => {})
    Pokemon.create(seed, (error,data) => {
        if (error) {
            console.log(error)
        }
        console.log('Reverted to seed date')
        res.redirect('/pokemon')
    })
})

module.exports = pokemon
