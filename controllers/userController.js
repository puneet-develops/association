//location controllers/userController.js hai

const { User, Order, Wishlist, Review } = require('../models');

const UserController = {
  async getUsers(req, res) {
    try {
      const users = await User.findAll({
        attributes:['user_id','username','email'],
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


  async updateUser(req, res) {
    try {
      const userId = req.params.userId;
      const { username, email } = req.body;
      // Check if the user exists
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      // Update the user
      await user.update({ username, email });
      res.json(user);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async deleteUser(req, res) {
    try {
      const userId = req.params.userId;
      // Check if the user exists
      const user = await User.findByPk(userId);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      // Delete the user
      await user.destroy();
      res.json({ message: 'User deleted successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  
};
  // Add other user-related controller functions as needed


module.exports = UserController;
