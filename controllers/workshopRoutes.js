const router = require("express").Router();
const withAuth = require("../utils/auth");
const { User, Car, Service, Job } = require("../models");

// when logging in as a manager, gets all data required for the admin dashboard
router.get("/", async (req, res) => {
  // if (!req.session.role === "manager") {
  //     res.status(401).json("You are not authorised to access this page.");
  // }

  // gets all customers and their vehicle service history
  const customerData = User.findAll({
    attributes: [
      "id",
      "first_name",
      "last_name",
      "phone",
      "address",
      "postcode",
      "city",
      "state",
    ],
    where: {
      role: "user",
    },
    include: [
      {
        model: Car,
        attributes: ["license_plate"],
        include: [
          {
            model: Service,
            attributes: ["price"],
            include: {
              model: Job,
              attributes: ["date", "type"],
            },
          },
        ],
      },
    ],
  });

  // gets all technicians and information about the jobs they've done
  const technicianData = User.findAll({
    attributes: [
      "id",
      "first_name",
      "last_name",
      "phone",
      "address",
      "postcode",
      "city",
      "state",
    ],
    where: {
      role: "technician",
    },
    include: [
      {
        model: Service,
        attributes: ["id"],
        include: [
          {
            model: Car,
            attributes: ["license_plate"],
          },
          {
            model: Job,
            attributes: ["type", "date"],
          },
        ],
      },
    ],
  });

  // id (for loading the job page later on), service_type, drop_off, length, notes, price, technician (id),
  // car_id (rego, make, model, user_id (name, phone number))
  const jobData = Job.findAll({
    attributes: ["id", "type", "date", "notes", "drop_off"],
    include: [
      {
        model: Car,
        attributes: ["id", "license_plate", "make", "model", "colour", "year"],
        include: {
          model: User,
          attributes: ["id", "first_name", "last_name", "phone"],
        },
      },
    ],
  });

  const serviceData = await Service.findAll({
    attributes: ["id"],
    include: [
      {
        model: Job,
        attributes: ["date", "type"],
        include: {
          model: Car,
          attributes: ["license_plate"],
        },
      },
    ],
  });

  const [customers, technicians, jobs, services] = await Promise.all([
    customerData,
    technicianData,
    jobData,
    serviceData,
  ]);

  // serialise model data to be readable by view
  const serialisedCustomerData = customers.map((customer) =>
    customer.get({ plain: true })
  );
  const serialisedTechnicianData = technicians.map((technician) =>
    technician.get({ plain: true })
  );
  const serialisedJobData = jobs.map((job) => job.get({ plain: true }));
  const serialisedServiceData = services.map((service) =>
    service.get({ plain: true })
  );

  res.render("workshopDashboard", {
    customers: JSON.stringify(customers),
    technicians: JSON.stringify(technicians),
    jobs: JSON.stringify(jobs),
    services: JSON.stringify(services),
  });
});

module.exports = router;
