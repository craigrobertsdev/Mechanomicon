const router = require("express").Router();
const { User } = require("../../models");
const { withAuth } = require("../../utils/auth");

// Register a new user
router.post("/signup", async (req, res) => {
  try {
    const userData = await User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      email: req.body.email,
      password: req.body.password,
      role: "user",
    });

    const user = userData.get({ plain: true });

    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      req.session.role = user.role;



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

    const validPassword = userData.validatePassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const user = userData.get({ plain: true });

    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.logged_in = true;
      req.session.role = user.role;

      res
        .status(200)
        .json({ user: userData, message: "You are now logged in!" });
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Logout the user
router.post("/logout", (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

// update user profile
router.put("/:id", withAuth, async (req, res) => {
  try {
    const [userData] = await User.update(
      {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        phone: req.body.phone,
        address: req.body.address,
        postcode: req.body.postcode,
        city: req.body.city,
        state: req.body.state,
      },
      {
        where: {
          id: req.session.user_id,
        },
      }
    );

    res
      .status(200)
      .json({ message: "Profile updated successfully!", data: userData });
  } catch (error) {
    res.status(500).json({ message: "Failed to update profile", error: error });
  }
});

module.exports = router;
