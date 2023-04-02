const router = require("express").Router();
const { withAuth } = require("../utils/auth");
const { User, Car, Service, Job } = require("../models");

router.get("/", withAuth, async (req, res) => {
  try {
    // Fetch the user's information
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });

    // Fetch the user's cars
    const cars = await Car.findAll({
      where: {
        user_id: req.session.user_id,
      },
    });

    // Get the car IDs for the user's cars
    const userCarsIds = cars.map((car) => car.id);

    // Fetch the user's services with associated job data
    const currentServicesData = await Job.findAll({
      where: {
        car_id: userCarsIds,
        completed: true,
      },
      include: [
        {
          model: Car,
        },
      ],
    });

    const pastServicesData = await Job.findAll({
      where: {
        car_id: userCarsIds,
        completed: true,
      },
      include: [
        {
          model: Car,
        },
      ],
    });

    // Filter the services based on the user's car IDs
    const userCurrentServices = currentServicesData.filter((service) =>
      userCarsIds.includes(service.car_id)
    );
    const userPastServices = pastServicesData.filter((service) =>
      userCarsIds.includes(service.car_id)
    );

    // Log the fetched data
    console.log("User data:", JSON.stringify(userData, null, 2));
    console.log("Cars data:", JSON.stringify(cars, null, 2));
    console.log(
      "Current services data:",
      JSON.stringify(userCurrentServices, null, 2)
    );
    console.log(
      "Past services data:",
      JSON.stringify(userPastServices, null, 2)
    );

    // Render the customer dashboard with the fetched data
    res.render("customerDashboard", {
      user: userData.get({ plain: true }),
      cars: cars.map((car) => car.get({ plain: true })),
      currentServices: userCurrentServices.map((service) =>
        service.get({ plain: true })
      ),
      pastServices: userPastServices.map((service) =>
        service.get({ plain: true })
      ),
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
});

module.exports = router;
