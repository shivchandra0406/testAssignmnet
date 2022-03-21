const express = require('express')
const { append } = require('express/lib/response')

const router = express.Router()

const cont = require('../controllers/account-controller')

router.post('/signup',cont.signup)

router.post('/signin',cont.singin)

router.get('/getAllRecored',cont.findAllRecord)

module.exports = router