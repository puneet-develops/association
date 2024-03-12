'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    
    static associate(models) {
      this.belongsToMany(models.User, { through: 'Wishlist', foreignKey: 'product_id' });
      this.hasMany(models.OrderItem, { foreignKey: 'product_id' ,as:'orderItems'});
      this.hasMany(models.Review, { foreignKey: 'product_id',as: 'reviews' });
      // define association here
    }
  }
  Product.init({
    product_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    
    product_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    stock: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {
    sequelize,
    modelName: 'Product',
  });
  return Product;
};