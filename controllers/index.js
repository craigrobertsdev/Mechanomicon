const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
// const workshopRoutes = require("./workshopRoutes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
// router.use("/workshop", workshopRoutes);

module.exports = router;
