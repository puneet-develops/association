'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Orders', [
      {
        user_id: 1,
        order_date: new Date(),
        total_amount: 1200.00,
        status: 'Completed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        order_date: new Date(),
        total_amount: 800.00,
        status: 'Pending',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        order_date: new Date(),
        total_amount: 150.00,
        status: 'Shipped',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        order_date: new Date(),
        total_amount: 300.00,
        status: 'Processing',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 5,
        order_date: new Date(),
        total_amount: 500.00,
        status: 'Completed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 6,
        order_date: new Date(),
        total_amount: 250.00,
        status: 'Delivered',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 7,
        order_date: new Date(),
        total_amount: 180.00,
        status: 'Pending',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 8,
        order_date: new Date(),
        total_amount: 700.00,
        status: 'Completed',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 9,
        order_date: new Date(),
        total_amount: 450.00,
        status: 'Shipped',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 10,
        order_date: new Date(),
        total_amount: 600.00,
        status: 'Delivered',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Orders', null, {});

  }
};
