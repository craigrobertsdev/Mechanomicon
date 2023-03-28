const router = require("express").Router();

const userRoutes = require("./userRoutes");
const carRoutes = require("./carRoutes");
const serviceRoutes = require("./serviceRoutes.js");
const workshopRoutes = require("./workshopRoutes");

router.use("/user", userRoutes);
router.use("/car", carRoutes);
router.use("/service", serviceRoutes);
router.use("/workshop", workshopRoutes);

module.exports = router;
