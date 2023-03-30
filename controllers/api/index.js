const router = require("express").Router();

const userRoutes = require('./userRoutes');
const carRoutes = require('./carRoutes');
const serviceRoutes = require('./serviceRoutes');
const workshopRoutes = require('./workshopRoutes');
const jobRoutes = require('./jobRoutes');

router.use('/user', userRoutes);
router.use('/car', carRoutes);
router.use('/service', serviceRoutes);
router.use('/workshop', workshopRoutes);
router.use('/job', jobRoutes);

<<<<<<< HEAD

router.use("/users", userRoutes);
=======
>>>>>>> af50e0e0b8c5d90d010ad4c3963b3cdee8540bc3

module.exports = router;
