const express = require('express')
const {userSigninValidator, userSignupValidator}  = require('../validator/userValidator')
const {runValidation} = require('../validator') 
const {registerUser, userLogin}  = require('../controllers/userController')

const router = express.Router();

router.post('/register', userSignupValidator, runValidation, registerUser)
router.post('/login', userSigninValidator, runValidation, userLogin)

module.exports = router