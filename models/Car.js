const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Car extends Model {}

Car.init(
    {   
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        licensePlate: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
        },
        make: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        model: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        year: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        colour: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        User_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
              }
        },  
        workshop_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'workshop',
                key: 'id'
              }
        },      
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'car',
    }
);

module.exports = Car;