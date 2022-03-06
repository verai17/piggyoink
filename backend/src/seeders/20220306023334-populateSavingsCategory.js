'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('savings_category', [{
      name: 'Cash'
    },
    {
      name: 'Salary'
    },
    {
      name: 'Business'
    },
    {
      name: 'Others'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('savings_category', null, {});
  }
};
