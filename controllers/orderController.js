// controllers/orderController.js

const { Order, OrderItem, Product, sequelize } = require("../models");

const OrderController = {
  async getOrders(req, res) {
    try {
      const orders = await Order.findAll({
        include: [{ model: OrderItem, as: "orderItems" }],
      });
      res.json(orders);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  async getOrderById(req, res) {
    try {
      const orderId = req.params.orderId;
      const order = await Order.findByPk(orderId, {
        include: [{ model: OrderItem, as: "orderItems" }],
      });

      if (!order) {
        return res.status(404).json({ error: "Order not found" });
      }

      res.json(order);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  // Add other order-related controller functions as needed
  async createorders(req, res) {
    const { userId, productsIds } = req.body;
    let transaction;
    let ordern;
    console.log(userId);
    console.log(productsIds);

    try {
      transaction = await sequelize.transaction({ autocommit: false });
      try {
        //perform operation within transaction
        ordern = await Order.create(
          {
            user_id: userId,
            order_date: new Date(),
            total_amount: 0,
            status: "pending",
          },
          { transaction }
        );

        //add orderitem
        for (const productId of productsIds) {
          await OrderItem.create(
            {
              order_id: ordern.order_id,
              product_id: productId,
              quantity: 1,
            },
            {
              transaction,
            }
          );
        }
        const orderItems = await OrderItem.findAll({
          where: { order_id: ordern.order_id },
          transaction,
          include: [{ model: Product, as: "orderItems" }],
        });
        // Calculate the amount
        const totalAmount = orderItems.reduce((total, orderItem) => {
          const productPrice = orderItem.orderItems
            ? orderItem.orderItems.price
            : 0;
          return total + orderItem.quantity * productPrice;
        }, 0);

        // Update total_amount in the Order model
        await Order.update(
          { total_amount: totalAmount },
          { where: { order_id: ordern.order_id }, transaction }
        );

        //transation will be committed if everything above goes well
        await transaction.commit();
        res.json({ message: "order created successfully" });
      } catch (error) {
        await transaction.rollback();
        throw error;
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  async deleteOrder(req, res) {
    const orderId = req.params.orderId;
    try {
      // Find the order
      const order = await Order.findByPk(orderId);
      if (!order) {
        return res.status(404).json({ error: "Order not found" });
      }

      // Delete associated order items
      await OrderItem.destroy({ where: { order_id: orderId } });

      // Delete the order
      await Order.destroy({ where: { order_id: orderId } });

      res.json({ message: "Order deleted successfully" });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};



module.exports = OrderController;
  