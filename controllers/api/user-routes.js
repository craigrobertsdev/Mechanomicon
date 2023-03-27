const router = require('express').Router();
const { Car, Service, Technician, User, Workshop } = require('../../models');

router.post('/login', async (req, res) => {
  try {

    const userLogin = await User.findOne({ where: { email: req.body.email } });
    console.log(req.body.email)

    if (!userLogin) {
      res
        .status(400)
        .json({ message: 'No Email- Please try again' });
      return;
    }

    const validPassword = await userLogin.validatePassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, Please try again' });
      return;
    }
    res.sendFile(path.join(__dirname, '/' + userLogin.id));
  } catch (err) {
    res.status(400).json(err);
    console.log("banana")
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

  module.exports = router;