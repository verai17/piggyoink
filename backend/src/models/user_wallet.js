

module.exports = (sequelize, DataTypes) => {
  const user_wallet = sequelize.define(
    'user_wallet',
    { 
      userid: {
        type: DataTypes.INTEGER, 
        allowNull: false
      },
      currentbalance: {
        type: DataTypes.FLOAT,
        defaultValue: '0'
      },
      previousbalance: {
        type: DataTypes.FLOAT,
        defaultValue: '0'
      },
      postbalance: {
        type: DataTypes.FLOAT,
        defaultValue: '0'
      }, 
      lastaddedAt: {
        allowNull: true,
        type: DataTypes.DATE(3),
      },
      lastaddedamount: {
        type: DataTypes.FLOAT,
        defaultValue: '0'
      },
      lastdeductedAt: {
        allowNull: true,
        type: DataTypes.DATE(3),
      },
      lastdeductedamount: {
        type: DataTypes.FLOAT,
        defaultValue: '0'
      }, 
    },
    {
      defaultScope: {
        attributes: { exclude: ['postbalance','previousbalance','lastaddedAt','lastaddedamount','lastdeductedAt','lastdeductedamount'] },
      },
      tableName: "user_wallet"
    },
  );
  user_wallet.associate = function (models) {
    // associations can be defined here
  };
  return user_wallet;
};
