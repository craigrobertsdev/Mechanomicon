const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Part extends Model {}

Part.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  in_stock: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  },
  min_quantity: {
    type: DataTypes.INTEGER,
  },
  price_per_unit: {
    type: DataTypes.DECIMAL,
    allowNull: false,
  },
});

module.exports = Part;
