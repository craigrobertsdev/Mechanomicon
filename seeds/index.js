const sequelize = require("../config/connection");

const { Car, Service, User, Workshop } = require("../models");

const seedUsers = require("./userSeeds.json");
const seedCars = require("./carSeeds.json");
const seedWorkshop = require("./workshopSeeds.json");
const seedService = require("./serviceSeeds.json");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");

  await Workshop.bulkCreate(seedWorkshop);
  console.log("\n----- WORKSHOPS SEEDED -----\n");

  await User.bulkCreate(seedUsers, { individualHooks: true });
  console.log("\n----- USERS SEEDED -----\n");

  await Car.bulkCreate(seedCars);
  console.log("\n----- CARS SEEDED -----\n");

  await Service.bulkCreate(seedService);
  console.log("\n----- SERVICES SEEDED -----\n");

  process.exit(0);
};

seedAll();
