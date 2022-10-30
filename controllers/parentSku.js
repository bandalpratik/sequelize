const sequelize = require("../util/database");
const initModels = require("../models/init-models");
var models = initModels(sequelize);
const ParentSku = require("../models/parentSku");

exports.getIndex = (req, res, next) => {
  ParentSku.findAll()
    .then((resp) =>
      res.status(200).json({
        data: resp,
      })
    )
    .catch((err) => console.log(err));
};

exports.addParent = (req, res, next) => {
  const { sku, parent, createdBy } = req.body;
  console.log(req.body);

  ParentSku.create({
    Sku: sku,
    Parent: parent,
    CreatedBy: createdBy,
    CreatedAt: new Date(),
  })
    .then((saved) => {
      res.status(200).json({
        message: "SKU added successfully",
        data: saved,
      });
    })
    .catch((err) => {
      res.status(400).json({
        message: "SKU already exists",
        error: err.message,
        type: err.errors[0].type,
      });
    });
};

exports.updateParent = (req, res, next) => {
  const { parent, sku, updatedBy } = req.body;
  const currentDate = new Date();
  ParentSku.update(
    { Parent: parent, UpdatedAt: currentDate, UpdatedBy: updatedBy },
    {
      where: {
        Sku: sku,
      },
    }
  ).then((count) => {
    res.status(200).json({
      message: "SKU updated successfully",
      recordsUpdated: count,
    });
  });
};

exports.deleteParent = (req, res, next) => {
  const { sku } = req.query;
  console.log(req.query);
  ParentSku.destroy({
    where: {
      sku: sku,
    },
  }).then((count) => {
    res.status(200).json({
      message: "Sku deleted successfully",
      recordsDeleted: count,
    });
  });
};
