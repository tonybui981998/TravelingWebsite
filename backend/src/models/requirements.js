"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class requirements extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  requirements.init(
    {
      email: DataTypes.STRING,
      name: DataTypes.STRING,
      reason: DataTypes.STRING,
      message: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "requirements",
    }
  );
  return requirements;
};
