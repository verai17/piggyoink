'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('expense_category', [{
      name: 'Rent'
    },
    {
      name: 'Grocery'
    },
    {
      name: 'Shopping'
    },
    {
      name: 'Transportation'
    },
    {
      name: 'Education'
    },
    {
      name: 'Utilities'
    },
    {
      name: 'Payables'
    },
    {
      name: 'Entertainment'
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('expense_category', null, {});
  }
};
