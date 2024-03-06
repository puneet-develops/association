'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.User, { through: 'Wishlist', foreignKey: 'product_id' });
      this.hasMany(models.OrderItem, {as:'orderItems', foreignKey: 'product_id' });
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