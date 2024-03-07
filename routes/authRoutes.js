const express = require('express');
//const authRoutes = require('../controllers/authController');
const authController = require('../controllers/authController');

//const { registerUser, signInUser} = require('../controllers/authController');
const router = express.Router();

router.post('/sign-up', authController.registerUser);  
router.post('/sign-in', authController.signInUser);

module.exports = router;