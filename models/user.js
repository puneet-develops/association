'use strict';
const bcrypt=require('bcrypt');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {

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
    password: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    role:{  
      type:DataTypes.STRING,
      defaultValue:'user',
      allowNull:false,
    },
  }, {
    hooks:{
      beforeCreate:async(user)=>{ 
        const saltRounds=10;
        user.password=await bcrypt.hash(user.password,saltRounds);
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};