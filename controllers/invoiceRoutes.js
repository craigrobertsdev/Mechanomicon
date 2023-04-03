const router = require("express").Router();
const { Car, Service, Job } = require("../models");

router.get("/:id", async (req, res) => {
  try {
    const jobData = await Job.findByPk(req.params.id, {
      include: [
        {
          model: Service,
          include: [
            {
              model: Car,
            },
          ],
        },
      ],
    });

    const job = jobData.get({ plain: true });

    res.render("invoice", {
      job,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
