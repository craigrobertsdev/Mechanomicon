const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
<<<<<<< HEAD
// const workshopRoutes = require("./workshopRoutes");
=======
const workshopRoutes = require("./workshopRoutes");
const customerRoutes = require("./customerRoutes");
>>>>>>> 13e566a55cd88811f29bd1fb6fe200d1e2f2832d

//google route
const authRoutes = require("./authRoutes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
<<<<<<< HEAD
// router.use("/workshop", workshopRoutes);
=======
router.use("/workshop", workshopRoutes);
router.use("/customer", customerRoutes);
>>>>>>> 13e566a55cd88811f29bd1fb6fe200d1e2f2832d

//google route
router.use("/auth", authRoutes);

module.exports = router;
