'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('transactions', { 
      id: { 
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userid: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: {
            tableName: 'users',
            schema: 'public'
          },
          key: 'id'
        },
        allowNull: false
      },
      transaction_type: {
        type: Sequelize.ENUM("savings","expense"),
        allowNull: false
      },
      category_type: {
        type: Sequelize.STRING,
      },
      amount: {
        type: Sequelize.FLOAT,
        defaultValue: '0'
      }, 
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE(3),
      },
      updatedAt: {
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
        type: Sequelize.DATE(3),
      },
      deletedAt: { 
        type: Sequelize.DATE(3),
      },
    },
    {
        engine: 'InnoDB',
        charset: 'utf8mb4',
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('transactions');
  }
};
