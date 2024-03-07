'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Order, { foreignKey: 'user_id', as: 'orders' });
      this.hasMany(models.Wishlist, { foreignKey: 'user_id', as: 'wishlist' });
      this.hasMany(models.Review, { foreignKey: 'user_id', as: 'reviews' });

      //User.hasMany(models.Order, { foreignKey: 'user_id' });
      this.belongsToMany(models.Product, { through: 'Wishlist', foreignKey: 'user_id' });

      // define association here
    }
  }
  User.init({
    user_id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    registration_date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    password: {
      type:DataTypes.STRING,}
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};