const router = require('express').Router();
const { Car, Service, Technician, User, Workshop } = require('../../models');

//REMOVE!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
router.get('/:id', async (req, res) => {
    try {
        const userData = await Car.findByPk(req.params.id);
      
        res.status(200).json(userData);
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