const { Model, DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");
const sequelize = require("../config/connection");

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
    google_id: {
      type: DataTypes.STRING,
      allowNull: true, // Set allowNull to true, as not all users may have a googleId
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
      allowNull: true,
      validate: {
        is: /^[0-9- ]{1,20}$/i, // Allows digits, hyphens and spaces, up to 20 characters
      },
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [5, 255], // Allows between 5 and 255 characters
      },
    },
    postcode: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        is: /^\d{4}$/i, // Allows only 4 digits
      },
    },
    city: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [2, 100], // Allows between 2 and 100 characters
      },
    },
    state: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: [2, 50], // Allows between 2 and 50 characters
      },
    },
    role: {
      type: DataTypes.ENUM("user", "technician", "manager"),
      allowNull: false,
      defaultValue: "user",
    },
    workshop_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "workshop",
        key: "id",
      },
      defaultValue: "1",
    },
    password: {
      type: DataTypes.STRING,
      allowNull: true, // Set this to true to allow password to be nullable
      validate: {
        notEmptyIfNotGoogle: function (value) {
          if (!this.google_id) {
            if (!value) {
              throw new Error("Password cannot be empty");
            }
            if (value.length < 8) {
              throw new Error("Password must be at least 8 characters long");
            }
          }
        },
      },
    },
  },
  {
    hooks: {
      // Set up beforeCreate user hook
      async beforeCreate(newUser) {
        if (newUser.password) {
          newUser.password = await bcrypt.hash(newUser.password, 10);
        }
        return newUser;
      },
      // Set up beforeUpdate user hook
      beforeUpdate: async (updatedUserData) => {
        if (updatedUserData.password) {
          updatedUserData.password = await bcrypt.hash(
            updatedUserData.password,
            10
          );
        }
        return updatedUserData;
      },
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "user",
  }
);

module.exports = User;
