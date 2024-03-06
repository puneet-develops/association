// controllers/orderItemController.js

const { OrderItem } = require('../models');

const OrderItemController = {
  async getOrderItems(req, res) {
    try {
      const orderItems = await OrderItem.findAll();
      res.json(orderItems);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // Add other order item-related controller functions as needed
};

module.exports = OrderItemController;
