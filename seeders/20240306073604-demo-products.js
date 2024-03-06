'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        product_name: 'Laptop',
        price: 1200.00,
        stock: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Smartphone',
        price: 800.00,
        stock: 100,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Headphones',
        price: 100.00,
        stock: 200,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Mouse',
        price: 20.00,
        stock: 150,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Desk Chair',
        price: 150.00,
        stock: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Printer',
        price: 180.00,
        stock: 80,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Monitor',
        price: 300.00,
        stock: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'External Hard Drive',
        price: 80.00,
        stock: 120,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Wireless Keyboard',
        price: 50.00,
        stock: 90,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_name: 'Gaming Console',
        price: 400.00,
        stock: 60,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
    
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});

  }
};
