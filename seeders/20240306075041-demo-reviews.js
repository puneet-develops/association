'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reviews', [
      {
        product_id: 1,
        user_id: 1,
        rating: 4.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 2,
        user_id: 2,
        rating: 3.8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 3,
        user_id: 3,
        rating: 4.2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 4,
        user_id: 4,
        rating: 4.0,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 5,
        user_id: 5,
        rating: 3.5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 6,
        user_id: 6,
        rating: 4.7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 7,
        user_id: 7,
        rating: 3.9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 8,
        user_id: 8,
        rating: 4.1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 9,
        user_id: 9,
        rating: 4.8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        product_id: 10,
        user_id: 10,
        rating: 4.3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Reviews', null, {});
  }
};
