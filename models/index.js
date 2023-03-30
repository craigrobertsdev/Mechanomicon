const User = require("./User");
const Car = require("./Car");
const Service = require("./Service");
const Workshop = require("./Workshop");
const Job = require("./Job");

User.hasMany(Car, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Car.belongsTo(User, {
  foreignKey: "user_id",
});

Car.hasMany(Service, {
  foreignKey: "car_id",
  onDelete: "CASCADE",
});

Car.hasMany(Job, {
  foreignKey: "car_id",
});

Job.belongsTo(Car, {
  foreignKey: "car_id",
});

Service.belongsTo(Car, {
  foreignKey: "car_id",
});

Job.hasOne(Service, {
  foreignKey: "job_id",
});

Service.belongsTo(Job, {
  foreignKey: "service_id",
});

Workshop.hasMany(User, {
  foreignKey: "workshop_id",
});

User.belongsTo(Workshop, {
  foreignKey: "workshop_id",
});

User.hasMany(Service, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Service.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Car, Service, Workshop, Job };
