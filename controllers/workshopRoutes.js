const router = require("express").Router();
const withAuth = require("../utils/auth");
const { Technician, Job } = require("../models");

// called when logging in as a technician, get all technicians and all jobs that are
// pending.
router.get("/", async (req, res) => {
  // if (!req.session.role === "technician") {
  //     res.status(401).json("You are not authorised to access this page.");
  // }

  // don't forget to return these as plain!!!
  //   let [mechanics, jobs] = await Promise.all(
  //     Technician.findAll(),
  //     Job.findAll()
  //   );

  let mechanics = [
    {
      id: 1,
      name: "Craig",
      jobs: [
        {
          id: 1,
          time: new Date(2023, 23, 3, 10, 0, 0),
          service_name: "service & inspection",
          car: {
            registration: "ABC123",
          },
        },
        {
          id: 2,
          time: new Date(2023, 23, 3, 11, 0, 0),
          service_name: "service & inspection",
          car: {
            registration: "ABC124",
          },
        },
      ],
    },
    {
      id: 2,
      name: "Paul",
      jobs: [
        {
          id: 3,
          time: new Date(2023, 23, 3, 10, 0, 0),
          service_name: "service & inspection",
          car: {
            registration: "ABC123",
          },
        },
        {
          id: 4,
          time: new Date(2023, 23, 3, 11, 0, 0),
          service_name: "service & inspection",
          car: {
            registration: "ABC124",
          },
        },
      ],
    },
  ];

  let jobs = [
    {
      id: 1,
      time: new Date("2023, 23, 3, 10, 0, 0"),
      service_name: "service & inspection",
      car: {
        registration: "ABC123",
      },
    },
    {
      id: 2,
      time: new Date("2023, 23, 3, 11, 0, 0"),
      service_name: "service & inspection",
      car: {
        registration: "ABC124",
      },
    },
    {
      id: 3,
      time: new Date("2023, 23, 3, 10, 0, 0"),
      service_name: "service & inspection",
      car: {
        registration: "ABC123",
      },
    },
    {
      id: 4,
      time: new Date("2023, 23, 3, 11, 0, 0"),
      service_name: "service & inspection",
      car: {
        registration: "ABC124",
      },
    },
  ];

  const num_mechanics = 2;
  res.render("workshopDashboard", { mechanics, jobs, num_mechanics });
});

// router.get("/workshop", async (req, res) => {
//   try {
//     const customerData = await User.findAll();

//     render 
//   } catch(err) {
//     res.status(500).json(err);
//   }
// })

module.exports = router;