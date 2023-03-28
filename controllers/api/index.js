const router = require("express").Router();
const userRoutes = require('./userRoutes');
const carRoutes = require('./carRoutes');
const serviceRoutes = require('./serviceRoutes');

router.use('/user', userRoutes);
router.use('/car', carRoutes);
router.use('/service', serviceRoutes);

module.exports = router;
