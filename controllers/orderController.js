// controllers/orderController.js

const { Order, OrderItem, sequelize } = require('../models');

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
  async orders(req,res) {
    const {userId , productsIds}= req.body;

    try {
      const transaction=await sequelize.transaction();
      try{
        //perform operation within transaction 
        const order = await Order.create(
          { user_id: userId, order_date: new Date(),total_amount: 0,status: 'pending'},
          { transaction }
        );
        //add orderitem
        for(const productId of productsIds){
          await OrderItem.create({
            order_id:order.order_id,product_id:productId,quantity:1,
          },{
            transaction
          })
        }
        //transation will be committed if everything above goes well
        await transaction.commit();
        res.json({message:'order created successfully'});
      }catch(error){
        await transaction.rollback();
        throw error;
      }
    }catch(error){
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });   
    }
  },
};

module.exports = OrderController; 
