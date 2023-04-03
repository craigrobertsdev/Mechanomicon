const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoutes = require("./homeRoutes");
const workshopRoutes = require("./workshopRoutes");
const customerRoutes = require("./customerRoutes");
const invoiceRoutes = require("./invoiceRoutes");

//google route
const authRoutes = require("./authRoutes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);
router.use("/workshop", workshopRoutes);
router.use("/customer", customerRoutes);
router.use("/invoice", invoiceRoutes);

//google route
router.use("/auth", authRoutes);

module.exports = router;
