'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Wishlists', [
      {
        user_id: 1,
        product_id: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 2,
        product_id: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 3,
        product_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 4,
        product_id: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 5,
        product_id: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 6,
        product_id: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 7,
        product_id: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 8,
        product_id: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 9,
        product_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_id: 10,
        product_id: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Wishlist', null, {});

  }
};
