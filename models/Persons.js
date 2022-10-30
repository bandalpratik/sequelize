const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Persons', {
    PersonID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true
    },
    LastName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    FirstName: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    Address: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    City: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'Persons',
    schema: 'dbo',
    timestamps: false
  });
};
