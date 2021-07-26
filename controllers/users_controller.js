const bcrypt = require('bcrypt')
const express = require('express')
const users = express.Router()
const User = require('../models/users.js')

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

//Show
users.get('/:id', (req,res) => {
    res.render('users/show.ejs', {
        currentUser: req.session.currentUser
    })
})

module.exports = users
