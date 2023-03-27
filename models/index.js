const User = require('./User');
const Car = require('./Car');
const Service = require('./Service');
const Technician = require('./Technician');
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


// The Fuck??
//Technician.hasOne(User, {
//    foreignKey: 'technician_id'
//});
//User.belongsTo(Technician, {
//    foreignKey: 'technician_id'
//})


//Workshop.hasMany(Technician, {
//    foreignKey: 'workshop_id',
//});
  
//Technician.belongsTo(Workshop, {
//    foreignKey: 'workshop_id',
//});

Workshop.hasMany(Car, {
    foreignKey: 'workshop_id',
});
  
Car.belongsTo(Workshop, {
    foreignKey: 'workshop_id',
});

Workshop.hasMany(User, {
    foreignKey: 'workshop_id',
});
  
User.belongsTo(Workshop, {
    foreignKey: 'workshop_id',
});

module.exports = {User, Car, Service, Technician, Workshop}
