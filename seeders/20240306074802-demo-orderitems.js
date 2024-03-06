'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('OrderItems', [
      {
        order_id: 1,
        product_id: 1,
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 2,
        product_id: 3,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 3,
        product_id: 5,
        quantity: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 4,
        product_id: 2,
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 5,
        product_id: 7,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 6,
        product_id: 9,
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 7,
        product_id: 4,
        quantity: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 8,
        product_id: 8,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 9,
        product_id: 6,
        quantity: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        order_id: 10,
        product_id: 10,
        quantity: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('OrderItems', null, {});
  
  }
};
