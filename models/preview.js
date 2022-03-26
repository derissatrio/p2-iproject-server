'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Preview extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Preview.belongsTo(models.User)
    }
  }
  Preview.init({
    ongkir: DataTypes.INTEGER,
    name: DataTypes.STRING,
    total: DataTypes.INTEGER,
    weight: DataTypes.INTEGER,
    destination: DataTypes.INTEGER,
    UserId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Preview',
  });
  return Preview;
};