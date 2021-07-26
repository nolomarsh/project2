const express = require('express')
const bcrypt = require('bcrypt')
const sessions = express.Router()
const User = require('../models/users.js')

sessions.get('/new', (req,res) => {
    res.render('sessions/new.ejs', {
        currentUser: req.session.currentUser
    })
})

sessions.post('/', (req,res) => {
    User.findOne({username:req.body.username}, (error, user) => {
        if (error) {
            console.log(error)
            res.send('Db error')
        } else if (!user) {
            res.send(`<a href='/sessions/new'>Sorry, no user found</a>`)
        } else {
            if (bcrypt.compareSync(req.body.password, user.password)) {
                req.session.currentUser = user
                res.redirect('/pokemon')
            } else {
                res.send(`<a href='/sessions/new'>password does not match</a>`)
            }
        }
    })
})

sessions.delete('/', (req,res) => {
    req.session.destroy(() => {
        res.redirect('/pokemon')
    })
})

module.exports = sessions
