const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

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
           type: DataTypes.ENUM('service & inspection', 'repairs'),
           defaultValue: 'service & inspection',
        },
        car_id: {
           type: DataTypes.INTEGER,
           references: {
               model: 'car',
               key: 'id'
             }
        },
        drop_off: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        notes: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        price: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        total_time: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        technician_id: {
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
        modelName: 'job',
    }
);

module.exports = Job;