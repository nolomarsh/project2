const express = require('express')
const pokemon = express.Router()
const Pokemon = require('../models/pokemon.js')
const seed = require('../models/pokemonSeed.js')
const printStars = require('../public/stars.js')

//Index
pokemon.get('/', (req,res) => {
    Pokemon.find({}, (error, pokemon) => {
        res.render('pokemon/index.ejs', {
            allPokemon: pokemon,
            currentUser: req.session.currentUser
        })
    })
})

// TODO: new route
//New
pokemon.get('/new', (req,res) => {

})

// TODO: create route
//Create
pokemon.post('/', (req,res) => {

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
            currentUser: req.session.currentUser,
            printStars: printStars
        })
    })
})

// TODO: edit route
//Edit
pokemon.get('/:id/edit', (req,res) => {

})

// TODO: update route
//update
pokemon.put('/:id', (req,res) => {

})

// TODO: destroy route
//destroy
pokemon.delete('/:id', (req,res) => {

})

module.exports = pokemon
