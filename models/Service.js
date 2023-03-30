const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

class Service extends Model {}

Service.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    oilChanged: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    filterChanged: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    brakesChecked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    coolantChecked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    batteryChecked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    suspensionChecked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    filtersChecked: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    tyresRotated: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    additionalNotes: {
      type: DataTypes.STRING,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: 0
    },
    total_time: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "0"
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
    car_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "car",
        key: "id",
      },
    },
    technician_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "user",
        key: "id",
      },
    },
    job_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "service",
        key: "id",
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "service",
  }
);

module.exports = Service;
