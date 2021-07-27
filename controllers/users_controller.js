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

//add/remove fave
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

//add/remove friend
users.post('/friend/:id', (req,res) => {
    User.findById(req.body.currentUserId, (error, foundUser) => {
        User.findById(req.params.id, (error, newFriend) => {
            if (!foundUser.friendIds.includes(newFriend._id.toString())) {
                foundUser.friendIds.push(newFriend._id)
            } else {
                let friendIndex = foundUser.friendIds.indexOf(newFriend._id.toString())
                foundUser.friendIds.splice(friendIndex,1)
            }
            foundUser.save((error,savedUser) => {
                req.session.currentUser = savedUser
                res.redirect('/users/'+req.params.id)
            })
        })
    })
})

//Show
users.get('/:id', (req,res) => {
    User.findById(req.params.id, (error, foundUser) => {
        let friends = []
        for (let friendId of foundUser.friendIds) {
            User.findById(friendId, (error, foundFriend) => {
                friends.push(foundFriend)
            })
        }
        Pokemon.find({}, (err, allPokemon) => {
            res.render('users/show.ejs', {
                currentUser: req.session.currentUser,
                friends: friends,
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
    User.findByIdAndRemove(req.params.id, (err, removedUser) => {
        //find users whose friendIds contain the removedUser's id
        User.find({friendIds: req.params.id}, (err, foundUsers) => {
            //for each found user, remove the removedUser from their array
            for (let user of foundUsers) {
                let friendIndex = user.friendIds.indexOf(req.params.id)
                user.friendIds.splice(friendIndex,1)
                user.save()
            }
        })
        //log the now removed user out
        req.session.destroy(() => {
            res.redirect('/')
        })
    })
})

module.exports = users
