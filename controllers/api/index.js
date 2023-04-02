const router = require("express").Router();

const userRoutes = require("./userRoutes");
const carRoutes = require("./carRoutes");
const serviceRoutes = require("./serviceRoutes");
const jobRoutes = require("./jobRoutes");
const workshopRoutes = require("./workshopRoutes");

router.use("/user", userRoutes);
router.use("/car", carRoutes);
router.use("/service", serviceRoutes);
router.use("/job", jobRoutes);
router.use("/workshop", workshopRoutes);

module.exports = router;
