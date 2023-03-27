const router = require('express').Router();
const { Car, Service, Technician, User, Workshop } = require('../../models');

router.post('/login', async (req, res) => {
  try {

    const userLogin = await User.findOne({ where: { email: req.body.email } });
    //console.log(userLogin)
    //console.log(userLogin.password)

    if (!userLogin) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, Please try again' });
      return;
    }

    const validPassword = await userLogin.validatePassword(req.body.password);
    console.log(req.body.password)
    console.log(validPassword.password)

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, Please try again' });
      return;
    }
    res.sendFile(path.join(__dirname, '/' + userLogin.id));
  } catch (err) {
    res.status(400).json(err);
  }
  });

router.get('/:id', async (req, res) => {
    try {
      const userData = await User.findByPk(req.params.id);
      
      res.status(200).json(userData);
    } catch (err) {
      res.status(400).json(err);
    }
});

router.get('/:id/cars', async (req, res) => {
  try {
    const carData = await Car.findByPk(req.params.id);
    
    
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

  module.exports = router;