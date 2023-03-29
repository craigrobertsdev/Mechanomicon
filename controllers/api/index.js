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


module.exports = router;
