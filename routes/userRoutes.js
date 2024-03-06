// location routes/userRoutes.js hai

const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.get('/users', UserController.getUsers);
router.get('/users/:userId', UserController.getUserById);
// user ke or routes 

module.exports = router;
