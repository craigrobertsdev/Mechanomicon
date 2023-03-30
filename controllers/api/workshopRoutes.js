const router = require("express").Router();
const { withAdminAuth } = require("../../utils/auth");
const { User, Car, Service, Job } = require("../../models");

// router.post("/", withAdminAuth, async (req, res) => {
router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    const newTechnician = await User.update(
      { role: "technician" },
      {
        where: {
          id: req.body.newTechnicianId,
        },
      }
    );

    if (!newTechnician) {
      res
        .status(400)
        .json({ message: "There was an error updating the user role" });
      return;
    }

    res.status(200).json(newTechnician);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// will get the technician name and work out id
// create a new service entity in the service table
// associate that service entity to the job and to the technician
// router.post("/technician", withAuth, (req, res) => {});
router.post("/technician", (req, res) => {});

module.exports = router;
