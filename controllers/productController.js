//location h controllers/productController.js

const { Product, OrderItem, Review } = require("../models");

const ProductController = {
  async getProducts(req, res) {
    try {
      const products = await Product.findAll();
      res.json(products);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  async getProductById(req, res) {
    try {
      const productId = req.params.productId;
      const product = await Product.findByPk(productId, {
        include: [  
          {
            model: OrderItem,
            as: "orderItems",
           
          },
           {  model: Review,
             as: 'reviews', // Ensure this alias matches the one in the association
             attributes: ["user_id", 'rating', 'createdAt'], },
        ],
      });

      if (!product) {
        return res.status(404).json({ error: "Product not found" });
      }

      res.json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  // Add other product-related controller functions as needed
};

module.exports = ProductController;
