const { request } = require('express');
const express = require('express')
const router = express.Router()
const { ensureAuth,ensureGuest } = require('../middleware/auth')
//login page
router.get('/', ensureGuest, (req, res) =>{
    res.render('login');
})
//dashboard
router.get('/dashboard',ensureAuth, (req, res) =>{
    res.render('dashboard');
})

module.exports = router