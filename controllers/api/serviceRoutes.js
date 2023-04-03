const router = require("express").Router();
const { withTechnicianAuth } = require("../../utils/auth");
const { User, Car, Service, Job } = require("../../models");

// when logging in as a manager, gets all data required for the admin dashboard
router.get("/", withTechnicianAuth, async (req, res) => {
  // id (for loading the job page later on), service_type, drop_off, length, notes, price, technician (id),
  // car_id (rego, make, model, user_id (name, phone number))
  try {
  const jobData = Job.findAll({
    attributes: ["id", "type", "date", "notes", "drop_off", "completed"],
    include: [
      {
        model: Car,
        attributes: ["id", "license_plate", "make", "model", "colour", "year"],
      },
    ],
  });

  const [ jobs, services] = await Promise.all([
  jobData,
  serviceData,
  ]);

  const serialisedJobData = jobs.map((job) => job.get({ plain: true }));
    const serialisedServiceData = services.map((service) =>
      service.get({ plain: true })
  );

  res.render("workshopDashboard", {
    jobs: serialisedJobData,
    services: serialisedServiceData,
    // passed to the view in this format for capturing in a script tag allowing linked javascript files to access the data
    jobsJSON: JSON.stringify(jobs),
    servicesJSON: JSON.stringify(services),
    logged_in: req.session.logged_in,
  });
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/job/:id', async (req, res) => {
//   const jobData = Job.findAll({
//     attributes: ["id", "type", "date", "notes", "drop_off", "completed"],
//     include: [
//       {
//         model: Car,
//         attributes: ["id", "license_plate", "make", "model", "colour", "year"],
//       },
//     ],
//   });
// });

// const jobs = await Promise.all(jobData);

// const serialisedJobData = jobs.map((job) => job.get({ plain: true }));

// res.render("workshopDashboard", {
//   jobs: serialisedJobData,
//   jobsJSON: JSON.stringify(jobs),
// });

// router.post("/", async (req, res) => {
//   try {
//     const serviceData = await Service.create(req.body);
//     res.status(200).json(serviceData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

router.get("/", async (req, res) => {
  try {
    //REMOVE LATER !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    req.session.user_id = 1;
    //REMOVE LATER !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    var serviceData = [];
    const carData = await Car.findAll({
      where: { user_id: req.session.user_id },
    });
    if (carData.length > 1) {
      for (i = 0; i < carData.length; i++) {
        serviceData.push(carData[i].make + " " + carData[i].model);
        serviceData.push(
          await Service.findAll({ where: { car_id: carData[i].id } })
        );
      }
    } else {
      serviceData = await Service.findAll({ where: { car_id: carData[0].id } });
    }

    res.status(200).json(serviceData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
