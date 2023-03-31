const router = require("express").Router();
const passport = require("passport");

//google auth
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/login" }),
  (req, res) => {
    console.log("Google callback route called");

    console.log("Session variables set:", req.session);

    // Set the logged_in session variable
    req.session.logged_in = true;

    // Manually save the session
    req.session.save((err) => {
      if (err) {
        console.error("Error saving session:", err);
        res.redirect("/login");
      } else {
        // Redirect to your desired route
        res.redirect("/");
      }
    });
  }
);

module.exports = router;
