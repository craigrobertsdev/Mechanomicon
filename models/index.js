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

Service.belongsTo(Car, {
  foreignKey: "car_id",
});

Workshop.hasMany(User, {
  foreignKey: "workshop_id",
});

User.belongsTo(Workshop, {
  foreignKey: "workshop_id",
});
Car.hasMany(Job, {
  foreignKey: "car_id",
  onDelete: "CASCADE",
});
Job.belongsTo(Car, {
  foreignKey: "car_id",
});

Job.hasOne(Service, {
  foreignKey: "service_id",
});

Service.belongsTo(Job, {
  foreignKey: "job_id",
});
User.hasMany(Job, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
Job.belongsTo(User, {
  foreignKey: "user_id",
});

User.hasMany(Service, {
  foreignKey: "technician_id",
});
Service.belongsTo(User, {
  foreignKey: "technician_id",
});
module.exports = { User, Car, Job, Service, Workshop };

