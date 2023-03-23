const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Service extends Model {}

Service.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        technician_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Technician',
                key: 'id'
              }
        },
        car_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'Car',
                key: 'id'
              }
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'service',
    }
);

module.exports = Service;