const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
            isEmail: true,
          },
        },
        phone: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postcode: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        city: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        state: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            len: [8],
          },
        },
        workshop_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'workshop',
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
        hooks: {
            async beforeCreate(newUser) {
                newUserData.password = await bcrypt.hash(newUserData.password, 10);
            return newUser;
            },
        },
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',
    }
);

module.exports = User;