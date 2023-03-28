const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class User extends Model {
    validatePassword(pasVal) {
      return bcrypt.compareSync(pasVal, this.password);
    }
}

User.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
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
            
        },
        address: {
            type: DataTypes.STRING,
           
        },
        postcode: {
            type: DataTypes.STRING,
           
        },
        city: {
            type: DataTypes.STRING,
           
        },
        state: {
            type: DataTypes.STRING,
            
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
            len: [8],
          },
        },
        role:{
            type: DataTypes.ENUM('user', 'technician', 'manager'),
            allowNull: false,
            defaultValue: 'user',
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
        hooks: {
            async beforeCreate(newUser) {
                newUser.password = await bcrypt.hash(newUser.password, 10);
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