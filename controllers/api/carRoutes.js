const router = require('express').Router();
const { Car } = require('../../models');


router.post('/', async (req, res) => {
    try {
      const carData = await Car.create(req.body);
      res.status(200).json(carData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.get('/', async (req, res) => {
    try {

        //REMOVE LATER !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        req.session.user_id = 1
        //REMOVE LATER !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        const carData = await Car.findAll({ where: { user_id: req.session.user_id } });
      
        res.status(200).json(carData);
    } catch (err) {
        res.status(400).json(err);
    }
});

  module.exports = router;