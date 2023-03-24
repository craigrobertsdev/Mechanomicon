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
        oilChanged: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        filterChanged: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        brakesChecked: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        coolantChecked: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        batteryChecked: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        suspensionChecked: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        filtersChecked: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        tyresRotated: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        generalInspection: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },
        additionalNotes: {
            type: DataTypes.STRING,
        },
        technician_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'technician',
                key: 'id'
              }
        },
        car_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'car',
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