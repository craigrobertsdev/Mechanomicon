const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Workshop extends Model {}

Workshop.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
              }
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
        modelName: 'workshop',
    }
);

module.exports = Workshop;