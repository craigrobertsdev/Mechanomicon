const router = require("express").Router();
const withAuth = require("../utils/auth");
const { User, Car, Service, Job } = require("../models");

// will get the technician name and work out id
// create a new service entity in the service table
// associate that service entity to the job and to the technician
// router.post("/technician", withAuth, (req, res) => {});
router.post("/technician", (req, res) => {});

module.exports = router;
