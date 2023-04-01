const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Job extends Model {}

Job.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      type: DataTypes.ENUM("service & inspection", "repairs"),
      defaultValue: "service & inspection",
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    drop_off: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    notes: {
      type: DataTypes.STRING,
      allowNull: false,
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
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "job",
  }
);

module.exports = Job;
