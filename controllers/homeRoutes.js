const router = require("express").Router();
const { User, Car, Service } = require("../models");

// Home page route
router.get("/", async (req, res) => {
  try {
    res.render("home", { logged_in: req.session.logged_in });
  } catch (error) {
    res.status(500).json(error);
  }
});

//testing dashboard route
router.get("/dashboard", async (req, res) => {
  try {
    res.render("dashboard");
  } catch (error) {
    res.status(500).json(error);
  }
});

// Render the login/signup page
router.get("/login", (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect("dashboard"); // <--- This is the route that needs to be changed to the dashboard
    return;
  }

  res.render("login");
});

//reset password
router.get("/resetPassword", (req, res) => {
  res.render("resetPassword");
});

module.exports = router;
