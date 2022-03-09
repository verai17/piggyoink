

module.exports = (sequelize, DataTypes) => {
  const transactions = sequelize.define(
    'transactions',
    { 
      userid: {
        type: DataTypes.INTEGER, 
        allowNull: false
      },
      transaction_type: {
        type: DataTypes.ENUM("savings","expense"),
        allowNull: false
      },
      category_type: {
        type: DataTypes.STRING,
      },
      amount: {
        type: DataTypes.FLOAT,
        defaultValue: '0'
      }, 
    },
    { 
      tableName: "transactions"
    },
  );
  transactions.associate = function (models) {
    // associations can be defined here
  };
  return transactions;
};
