

module.exports = (sequelize, DataTypes) => {
  const expense_category = sequelize.define(
    'expense_category',
    { 
      name: {
        type: DataTypes.STRING
      }
    },
    {
      defaultScope: {
        attributes: ['id', 'name']
      },
      tableName: "expense_category"
    },
  );
  expense_category.associate = function (models) {
    // associations can be defined here
  };
  return expense_category;
};
