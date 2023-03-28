const router = require('express').Router();
const {User, Workshop } = require('../../models');


router.get('/', async (req, res) => {
    try {

        const workshopData = await Workshop.findByPk(1);
      
        res.status(200).json(workshopData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/technicians', async (req, res) => {
    try {

        const techData = await User.findAll({ where: { is_Technician: true } });
      
        res.status(200).json(techData);
    } catch (err) {
        res.status(400).json(err);
    }
});

  module.exports = router;