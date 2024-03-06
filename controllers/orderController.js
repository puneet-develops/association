// controllers/orderController.js

const { Order, OrderItem } = require('../models');

const OrderController = {
  async getOrders(req, res) {
    try {
      const orders = await Order.findAll({
        include: [{ model: OrderItem, as: 'orderItems' }],
      });
      res.json(orders);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },

  async getOrderById(req, res) {
    try {
      const orderId = req.params.orderId;
      const order = await Order.findByPk(orderId, {
        include: [{ model: OrderItem, as: 'orderItems' }],
      });

      if (!order) {
        return res.status(404).json({ error: 'Order not found' });
      }

      res.json(order);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  },
  // Add other order-related controller functions as needed
};

module.exports = OrderController;
