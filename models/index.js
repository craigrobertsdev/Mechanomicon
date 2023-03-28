const User = require('./User');
const Car = require('./Car');
const Service = require('./Service');
const Workshop = require('./Workshop');

User.hasMany(Car, {
    foreignKey: 'user_id',
});
  
Car.belongsTo(User, {
    foreignKey: 'user_id',
});

Car.hasMany(Service, {
    foreignKey: 'car_id',
});
  
Service.belongsTo(Car, {
    foreignKey: 'car_id',
});

Workshop.hasMany(User, {
    foreignKey: 'workshop_id',
});
  
User.belongsTo(Workshop, {
    foreignKey: 'workshop_id',
});

module.exports = {User, Car, Service, Workshop}
