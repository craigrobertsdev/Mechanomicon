const router = require("express").Router();
const { withAdminAuth } = require("../../utils/auth");
const { User, Car, Service, Job } = require("../../models");

// called when creating a new technician from the workshop dashboard
router.post("/", withAdminAuth, async (req, res) => {
  try {
    const newTechnician = await User.create({
      ...req.body,
      role: "technician",
    });

    if (!newTechnician) {
      res
        .status(400)
        .json({ message: "There was an error creating the new technician" });
      return;
    }

    res.status(200).json(newTechnician);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a new service entity in the service table
// associate that service entity to the job and to the technician
router.post("/technician", withAdminAuth, async (req, res) => {
  try {
    // find the job and include the associated service if it has one
    const jobData = await Job.findOne({
      where: {
        id: req.body.job,
      },
      include: [
        {
          model: Service,
          attributes: ["job_id"],
        },
      ],
    });

    // serialise the jobData object
    const job = jobData.get({ plain: true });

    let service;

    // if there isn't already a service created for the job, create one
    if (!job.service.job_id) {
      service = await Service.create({
        car_id: req.body.car,
        technician_id: req.body.technician,
      });
    } else {
      // if the service already exists, as just need to assign a new technician to it
      const serviceToUpdate = await Service.findOne({
        where: {
          job_id: req.body.job,
        },
      });

      // add new technician to the service
      service = await Service.update(
        {
          technician_id: parseInt(req.body.technician),
        },
        {
          where: {
            id: serviceToUpdate.dataValues.id,
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
