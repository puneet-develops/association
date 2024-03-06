'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wishlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      
      this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
      this.belongsTo(models.Product, { foreignKey: 'product_id', as: 'product' });

      // define association here
    }
  }
  Wishlist.init({
    
    user_id:{ 
      type:DataTypes.INTEGER,
      allowNull:false,
      references: {
        model: 'Users',
        key: 'user_id',
      },
    },
    product_id: { 
      type:DataTypes.INTEGER,
      allowNull:false,
      references: {
        model: 'Products',
        key: 'product_id',
      },
    },
  }, {
    sequelize,
    modelName: 'Wishlist',
  });
  return Wishlist;
};