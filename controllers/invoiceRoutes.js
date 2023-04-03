const router = require("express").Router();
const { User, Car, Service, Job } = require("../models");

router.get("/:id", async (req, res) => {
  try {
    const jobData = await Job.findByPk(req.params.id, {
      include: [
        {
          model: Service,
          include: [
            {
              model: Car,
              include: [
                {
                  model: User,
                },
              ],
            },
          ],
        },
      ],
    });

    const job = jobData.get({ plain: true });

    if (
      req.session.user_id === job.service.car.user.id ||
      req.session.role === "manager" ||
      req.session.user_id === job.service.technician_id
    ) {
      res.render("invoice", {
        job,
        logged_in: true,
      });
    } else {
      res.status(404).send("You are not authorised to view this invoice");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
