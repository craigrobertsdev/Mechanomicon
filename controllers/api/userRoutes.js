const router = require("express").Router();
const { User } = require("../../models");

// Register a new user
router.post("/signup", async (req, res) => {
  try {
    const userData = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      // phone: req.body.phone,
      role: req.body.role,
    });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      console.log("Session: ", req.session);

      res.status(200).json(userData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});

// Login an existing user
router.post("/login", async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });

    if (!userData) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      console.log("Session: ", req.session);

      res
        .status(200)
        .json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
// Logout thgexports = router;
