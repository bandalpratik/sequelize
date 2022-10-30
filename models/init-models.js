var DataTypes = require("sequelize").DataTypes;
var _Persons = require("./Persons");

function initModels(sequelize) {
  var Persons = _Persons(sequelize, DataTypes);

  return {
    Persons,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
