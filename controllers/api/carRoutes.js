const router = require("express").Router();
const { Car } = require("../../models");
const { withAuth } = require("../../utils/auth");

// Add car
router.post("/", withAuth, async (req, res) => {
  try {
    console.log("Received add car request:", req.body);

    const userId = req.session.user_id;

    const newCar = await Car.create({
      ...req.body,
      user_id: userId,
    });

    res.status(201).json(newCar);
  } catch (error) {
    res.status(500).json({ message: "Error adding car", error });
  }
});

// Edit car
router.put("/:id", withAuth, async (req, res) => {
  try {
    console.log("Received update car request:", req.params.id, req.body);
    const carId = req.params.id;
    const userId = req.session.user_id;

    const car = await Car.findOne({ where: { id: carId, user_id: userId } });

    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    const { make, model, licensePlate, year, colour } = req.body;
    car.make = make;
    car.model = model;
    car.licensePlate = licensePlate;
    car.year = year;
    car.colour = colour;

    const updatedCar = await car.save();

    res.json(updatedCar);
  } catch (error) {
    console.log("Error details:", error);
    res.status(500).json({ message: "Error updating car", error });
  }
});

// Delete car
router.delete("/:id", withAuth, async (req, res) => {
  try {
    console.log("Received delete car request:", req.params.id);
    const carId = req.params.id;
    const userId = req.session.user_id;

    const car = await Car.findOne({ where: { id: carId, user_id: userId } });

    if (!car) {
      return res.status(404).json({ message: "Car not found" });
    }

    await Car.destroy({ where: { id: carId } });

    res.status(204).json({ message: "Car deleted" });
  } catch (error) {
    console.log("Error details:", error);
    res.status(500).json({ message: "Error deleting car", error });
  }
});

module.exports = router;
