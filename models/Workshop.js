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
                model: 'User',
                key: 'id'
              }
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
        modelName: 'workshop',
    }
);

module.exports = Workshop;