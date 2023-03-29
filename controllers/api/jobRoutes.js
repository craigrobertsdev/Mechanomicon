const router = require('express').Router();
const { Job } = require('../../models')


router.post('/', async (req, res) => {
    try {
      const jobData = await Job.create(req.body);
      res.status(200).json(jobData);
    } catch (err) {
      res.status(400).json(err);
    }
  });

router.get('/:id', async (req, res) => {
    try {
        const jobData = await Job.findByPk(req.params.id);

        res.status(200).json(jobData);
    } catch (err) {
        res.status(400).json(err);
    }
});

  module.exports = router;