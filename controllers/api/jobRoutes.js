const router = require("express").Router();
const { Job } = require("../../models");
const { withAuth } = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newJob = await Job.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(201).json(newJob);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Failed to create a new job" });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const jobData = await Job.findByPk(req.params.id);

    res.status(200).json(jobData);
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
