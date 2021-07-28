const express = require('express')
const pokemon = express.Router()
const Pokemon = require('../models/pokemon.js')
const seed = require('../models/pokemonSeed.js')

//Index
pokemon.get('/', (req,res) => {
    Pokemon.find({}, (error, pokemon) => {
        res.render('pokemon/index.ejs', {
            allPokemon: pokemon,
            currentUser: req.session.currentUser
        })
    })
})

//Index (filtered)
pokemon.get('/filter/:role', (req,res) => {
    Pokemon.find({role: req.params.role}, (error, filteredPokemon) => {
        res.render('pokemon/indexFilter.ejs', {
            allPokemon: filteredPokemon,
            currentUser: req.session.currentUser,
            filterRole: req.params.role
        })
    })
})

//Seed
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

//Show
pokemon.get('/:id', (req,res) => {
    Pokemon.findById(req.params.id, (error,pokemon) => {
        console.log(pokemon.name)
        res.render('pokemon/show.ejs', {
            pokemon: pokemon,
            currentUser: req.session.currentUser
        })
    })
})

module.exports = pokemon
