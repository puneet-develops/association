'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Users','registration_date');
 
  },

  async down (queryInterface, Sequelize) {

  }
};
