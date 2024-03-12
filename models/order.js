  'use strict';
  const {
    Model
  } = require('sequelize');
  module.exports = (sequelize, DataTypes) => {
    class Order extends Model {
      /**
       * Helper method for defining associations.
       * This method is not a part of Sequelize lifecycle.
       * The `models/index` file will call this method automatically.
       */
      static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });

      // Order.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
        this.hasMany(models.OrderItem, { foreignKey: 'order_id', as: 'orderItems' });

        // define association here
      }
    }
    Order.init(
      {
        order_id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: DataTypes.INTEGER
        },
        user_id: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        order_date: {
          type: DataTypes.DATE,
          allowNull: false,
        },
        total_amount: {
          type: DataTypes.FLOAT,
          allowNull: false,
        },
        status: {
          type: DataTypes.STRING,
          allowNull: false,
        },
      }, {
      sequelize,
      modelName: 'Order',
    });
    return Order;
  };