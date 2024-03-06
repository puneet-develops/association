'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Product, { foreignKey: 'product_id', as: 'reviews' });
      this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
    }
  }
  Review.init(
    {
      review_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
      },
      product_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model:'Products',
          key: 'product_id',
        },
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'Users',
          key: 'user_id',
        },
      },
      rating: {
        type: DataTypes.FLOAT,
        allowNull: false,
      },
    }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};