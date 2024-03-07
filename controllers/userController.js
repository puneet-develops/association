//location controllers/userController.js hai

const { User, Order, Wishlist, Review } = require('../models');

const UserController = {
  async getUsers(req, res) {
    try {
      const users = await User.findAll({
        attributes:['username','email','registration_date'],
      });
      res.json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async getUserById(req, res) {
    try {
      const userId = req.params.userId;
      const user = await User.findByPk(userId, {
        include: [
          { model: Order, as: "orders" },
          { model: Wishlist, as: "wishlist" },
          { model: Review, as: "reviews" },
        ],
      });

      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }

      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // Add other user-related controller functions as needed
};

module.exports = UserController;
