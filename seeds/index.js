const sequelize = require('../config/connection');

const { Car, Service, Technician, User, Workshop } = require('../../models');

const seedUsers = require('./userSeeds.json');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await User.bulkCreate(seedUsers);

  process.exit(0);
};

seedAll();
