// controllers/reviewController.js

const { Review } = require('../models');

const ReviewController = {
  async getReviews(req, res) {
    try {
      const reviews = await Review.findAll();
      res.json(reviews);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // Add other review-related controller functions as needed
};

module.exports = ReviewController;
