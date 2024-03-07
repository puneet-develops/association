'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Users', 'password', {
      type: Sequelize.STRING,
      allowNull: true, // Allow null for existing records
    });
  },
  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users', 'password');

  }
};
