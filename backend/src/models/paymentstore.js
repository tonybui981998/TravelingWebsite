"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PayMentStore extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PayMentStore.init(
    {
      email: DataTypes.STRING,
      name: DataTypes.STRING,
      startDate: DataTypes.STRING,
      endDate: DataTypes.STRING,
      totalPeople: DataTypes.INTEGER,
      totalPrice: DataTypes.INTEGER,
      paymentStatus: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "PayMentStore",
    }
  );
  return PayMentStore;
};
