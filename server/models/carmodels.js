'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class CarModels extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  CarModels.init({
    model: DataTypes.STRING,
    category: DataTypes.STRING,
    description: DataTypes.TEXT,
    img: DataTypes.STRING,
    price: DataTypes.REAL,
    year: DataTypes.INTEGER,
    slogan: DataTypes.TEXT,
    fullmodel: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'CarModels',
  });
  return CarModels;
};