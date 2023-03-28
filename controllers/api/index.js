const router = require("express").Router();
const userRoutes = require('./userRoutes');
const carRoutes = require('./carRoutes');
const serviceRoutes = require('./serviceRoutes');
const workshopRoutes = require('./workshopRoutes');

router.use('/user', userRoutes);
router.use('/car', carRoutes);
router.use('/service', serviceRoutes);
router.use('/workshop', workshopRoutes);

const userRoutes = require("./userRoutes");


router.use("/users", userRoutes);

module.exports = router;
