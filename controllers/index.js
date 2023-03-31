const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const workshopRoutes = require("./workshopRoutes");

//google route
const authRoutes = require("./authRoutes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/workshop", workshopRoutes);

//google route
router.use("/auth", authRoutes);

module.exports = router;
