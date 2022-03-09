

module.exports = (sequelize, DataTypes) => {
  const savings_category = sequelize.define(
    'savings_category',
    { 
      name: {
        type: DataTypes.STRING
      }
    },
    {
      defaultScope: {
        attributes: ['id', 'name']
      },
      tableName: "savings_category"
    },
  );
  savings_category.associate = function (models) {
    // associations can be defined here
  };
  return savings_category;
};
