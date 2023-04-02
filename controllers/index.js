const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const workshopRoutes = require("./workshopRoutes");
const customerRoutes = require("./customerRoutes");

//google route
const authRoutes = require("./authRoutes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/workshop", workshopRoutes);
router.use("/customer", customerRoutes);

//google route
router.use("/auth", authRoutes);

module.exports = router;
