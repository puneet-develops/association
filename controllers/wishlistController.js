// controllers/wishlistController.js

const { Wishlist } = require('../models');

const WishlistController = {
  async getWishlist(req, res) {
    try {
      const wishlist = await Wishlist.findAll();
      res.json(wishlist);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // Add other wishlist-related controller functions as needed
};

module.exports = WishlistController;
