// routes/reviewRoutes.js

const express = require('express');
const router = express.Router();
const ReviewController = require('../controllers/reviewController');

router.get('/reviews', ReviewController.getReviews);
// Add other review-related routes as needed

module.exports = router;
