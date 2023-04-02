const router = require("express").Router();
const { User, Car, Service } = require("../models");
const { withAuth } = require("../utils/auth");

// Home page route
router.get("/", async (req, res) => {
  try {
    res.render("home", { logged_in: req.session.logged_in });
  } catch (error) {
    res.status(500).json(error);
  }
});

//testing dashboard route
router.get("/dashboard", withAuth, async (req, res) => {
  try {
    if (req.session.role === "user") {
      res.render("customerDashboard"); // this one needs to be changed when Pipat's code is merged
    } else if (req.session.role === "technician") {
      res.render("mechanicDashboard"); // this one needs to be changed when Shae's code is merged
    } else if (req.session.role === "manager") {
      res.redirect("/workshop");
    } else {
      res
        .status(400)
        .json({ message: "Incorrect permissions to access dashboard" });
    }
  } catch (error) {
    res.status(500).json(error);
  }
});

// Render the login/signup page
router.get("/login", async (req, res) => {
  try {
    if (req.session.logged_in) {
      res.redirect("/");
      return;
    }
    res.render("login");
  } catch (error) {
    res.status(500).json(error);
  }
});

//profile page
router.get("/profile", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });
    const user = userData.get({ plain: true });

    res.render("profile", {
      user,
      logged_in: true,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

//reset password
router.get("/resetPassword", (req, res) => {
  try {
    res.render("resetPassword");
  } catch (error) {
    res.status(500).json(error);
  }
});

router.get("/mechanicDashboard", async (req, res) => {
  try {
    res.render("mechanicDashboard");
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
