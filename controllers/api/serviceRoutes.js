const router = require('express').Router();
const { Service } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newService = await Service.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newService);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const serviceData = await Service.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!serviceData) {
      res.status(404).json({ message: 'No service to delete!' });
      return;
    }

    res.status(200).json(serviceData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;