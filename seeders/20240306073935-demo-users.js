'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        username: 'arjun_kumar',
        email: 'arjun.kumar@example.com',
        registration_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'neha_sharma',
        email: 'neha.sharma@example.com',
        registration_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'rishabh_gupta',
        email: 'rishabh.gupta@example.com',
        registration_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'priya_patel',
        email: 'priya.patel@example.com',
        registration_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'amit_singh',
        email: 'amit.singh@example.com',
        registration_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'pooja_mishra',
        email: 'pooja.mishra@example.com',
        registration_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'raj_verma',
        email: 'raj.verma@example.com',
        registration_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'ananya_shukla',
        email: 'ananya.shukla@example.com',
        registration_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'vikas_pandey',
        email: 'vikas.pandey@example.com',
        registration_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        username: 'sonal_joshi',
        email: 'sonal.joshi@example.com',
        registration_date: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
    
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
