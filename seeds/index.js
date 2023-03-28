const sequelize = require('../config/connection');

const { Car, Service, User, Workshop } = require('../models');

const seedUsers = require('./userSeeds.json');
const seedCars = require('./carSeeds.json');
const seedWorkshop = require('./workshopSeeds.json');
const seedService = require('./serviceSeeds.json');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await Workshop.bulkCreate(seedWorkshop);
  await User.bulkCreate(seedUsers, {individualHooks: true});
  await Car.bulkCreate(seedCars);
  await Service.bulkCreate(seedService);

  process.exit(0);
};

seedAll();
