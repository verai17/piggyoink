'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('expense_category', { 
      id: { 
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING
      }
    },
    {
        engine: 'InnoDB',
        charset: 'utf8mb4',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('expense_category');
  }
};
