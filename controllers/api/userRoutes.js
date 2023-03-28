const router = require('express').Router();
const { User } = require('../../models');

router.post('/', async (req, res) => {
  try {
    const userData = await User.create(req.body);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    
    const userLogin = await User.findOne({ where: { email: req.body.email } });
    if (!userLogin) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, Please try again' });
      return;
    }
    
    const validPassword = await userLogin.validatePassword(req.body.password);
  
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, Please try again' });
      return;
    }
    res.status(200).json(userLogin)
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


  module.exports = router;