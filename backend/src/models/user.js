

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    'users',
    {
      firstname: {
        type: DataTypes.STRING,
      },
      lastname: {
        type: DataTypes.STRING,
      },
      emailaddress: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      }, 
    },
    {
      defaultScope: {
        attributes: { exclude: ['password'] },
      },
      scopes: {
        withSecretColumns: {
          attributes: { include: ['password'] },
        },
      },
    },
  );
  users.associate = function (models) {
    // associations can be defined here
  };
  return users;
};
