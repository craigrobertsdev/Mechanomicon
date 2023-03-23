const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Technician extends Model {}

module.exports = Technician;
