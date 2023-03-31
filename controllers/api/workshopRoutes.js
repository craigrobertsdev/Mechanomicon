const router = require("express").Router();
const { withAdminAuth } = require("../../utils/auth");
const { User, Car, Service, Job } = require("../../models");

router.post("/", withAdminAuth, async (req, res) => {
  try {
    const newTechnician = await User.update(
      { role: "technician" },
      {
        where: {
          id: req.body.newTechnician,
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

// create a new service entity in the service table
// associate that service entity to the job and to the technician
router.post("/technician", withAdminAuth, async (req, res) => {
  try {
    const job = await Job.findOne({
      where: {
        id: req.body.job,
      },
    });

    let service;

    // if there isn't already a service created for the job, create one
    if (!job.service_id) {
      service = await Service.create({
        car_id: req.body.car,
        technician_id: req.body.technician,
      });
    } else {
      // if the service already exists, as just need to assign a new technician to it
      serviceToUpdate = await Service.findOne({
        where: {
          job_id: req.body.job,
        },
      });

      // add new technician to the service
      service = await Service.update(
        {
          technician_id: req.body.technician,
        },
        {
          where: {
            id: serviceToUpdate.id,
          },
        }
      );
    }

    if (!service) {
      res.status(400).json({ message: "Could not assign technician to job" });
    }

    res.status(200).json(service);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
