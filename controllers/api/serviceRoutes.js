const router = require("express").Router();
const { Car, Service, job } = require("../../models");
const { withAuth } = require("../../utils/auth");

router.post("/", async (req, res) => {
  try {
    const serviceData = await Service.create(req.body);
    res.status(200).json(serviceData);
  } catch (err) {
    res.status(400).json(err);
  }
});

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
