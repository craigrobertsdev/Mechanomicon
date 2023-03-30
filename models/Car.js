const { Model, DataTypes } = require('sequelize');
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
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        colour: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
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