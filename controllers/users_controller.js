const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const User = require('../models/users.js')
const Pokemon = require('../models/pokemon.js')

//Index
users.get('/', (req,res) => {
    User.find({}, (error, allUsers) => {
        res.render('users/index.ejs', {
            currentUser: req.session.currentUser,
            allUsers: allUsers
        })
    })

})

//New
users.get('/new', (req,res) => {
    res.render('users/new.ejs', {
        currentUser: req.session.currentUser
    })
})

//Create
users.post('/', (req,res) => {
    req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10))
    User.create(req.body, (error, newUser) => {
        console.log('User is created', newUser)
        res.redirect('/')
    })
})

//add fave
users.post('/favorite/:id', (req,res) => {
    User.findById(req.body.userId,(error, foundUser) => {
        Pokemon.findById(req.params.id,(err,foundMon) => {
            if (!foundUser.favePokemon.includes(foundMon.name)){
                foundUser.favePokemon.push(foundMon.name)
            } else {
                let monIndex = foundUser.favePokemon.indexOf(foundMon.name)
                foundUser.favePokemon.splice(monIndex,1)
            }
            foundUser.save((err,savedUser) => {
                req.session.currentUser = savedUser
                res.redirect('/pokemon/'+req.params.id)
            })
        })
    })
})

//Show
users.get('/:id', (req,res) => {
    User.findById(req.params.id, (error, foundUser) => {
        Pokemon.find({}, (err, allPokemon) => {
            res.render('users/show.ejs', {
                currentUser: req.session.currentUser,
                user: foundUser,
                allPokemon: allPokemon
            })
        })
    })
})

//edit
users.get('/:id/edit', (req,res) => {
    res.render('users/edit.ejs', {
        currentUser: req.session.currentUser
    })
})

//update
users.put("/:id", (req,res) => {
    User.findByIdAndUpdate(req.params.id, req.body, {new:true},(error, updatedUser) => {
        req.session.currentUser = updatedUser
        res.redirect('/users/'+req.params.id)
    })
})


//delete
users.delete('/:id', (req,res) => {
    User.findByIdAndRemove(req.params.id, (err, user) => {
        if (err) {
            console.log(err);
        }
        res.redirect('/')
    })
})

module.exports = users
