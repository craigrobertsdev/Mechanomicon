const sequelize = require('../config/connection');

const { Car, Service, Technician, User, Workshop } = require('../models');

const seedUsers = require('./userSeeds.json');
const seedCars = require('./carSeeds.json');
const seedWorkshop = require('./workshopSeeds.json');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await Workshop.bulkCreate(seedWorkshop);
  await User.bulkCreate(seedUsers);
  await Car.bulkCreate(seedCars);

  process.exit(0);
};

seedAll();
