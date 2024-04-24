//location h controllers/productController.js

const { NUMBER } = require("sequelize");
const { Product, OrderItem, Review } = require("../models");

const ProductController = {
  async getProducts(req, res) {
    try {
      
    //   const pageAsnumber=Number.parseInt(req.query.page);
    //   const sizeAsnumber=Number.parseInt(req.query.size);
    //   let page=0;
    //   if(!Number.isNaN(pageAsnumber)&& pageAsnumber >0){
    //     page=pageAsnumber;
    //   }
    //   let size=10;
    //   if(!Number.isNaN(sizeAsnumber)&& sizeAsnumber >0 && sizeAsnumber<10){
    //     size=sizeAsnumber;
    //   }
    //   const products = await Product.findAndCountAll({
    //     limit:size,
    //     offset:page*size
    //   });
    //  // console.log(res.send(products),"hello");
    //   res.json({
    //     content:products.rows,
    //     totalpages:Math.ceil(products.count/size)
    //   });
      const products = await Product.findAll({
        limit: req.pagination.limit,
        offset: req.pagination.offset,
        where: req.pagination.filterField && req.pagination.filterValue ? { [req.pagination.filterField]: req.pagination.filterValue } : undefined,

      });
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
  async createProduct(productData) {
    try {
      const newProduct = await Product.create(productData);
      return newProduct;
    } catch (error) {
      throw new Error('Failed to create product: ' + error.message);
    }
  },
  async updateProduct(productId, updatedProductData) {
    try {
      const product = await Product.findByPk(productId);
      if (!product) {
        throw new Error('Product not found');
      }
      await product.update(updatedProductData);
      return product;
    } catch (error) {
      throw new Error('Failed to update product: ' + error.message);
    }
  },
  async deleteProduct(productId) {
    try {
      const product = await Product.findByPk(productId);
      if (!product) {
        throw new Error('Product not found');
      }
      await product.destroy();
      return { message: 'Product deleted successfully' };
    } catch (error) {
      throw new Error('Failed to delete product: ' + error.message);
    }
  },
    

  
};

module.exports = ProductController;
