const Sequelize = require("sequelize");

const sequelize = require("../util/database");

const ParentSku = sequelize.define(
  "parent_skus_test_table",
  {
    Sku: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
    },
    Parent: Sequelize.INTEGER,
    CreatedBy: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    UpdatedBy: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    CreatedAt: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    UpdatedAt: {
      type: Sequelize.DATE,
      allowNull: true,
    },
  },
  { timestamps: false, freezeTableName: true }
);

module.exports = ParentSku;
