const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    next();
  }
};

const withAdminAuth = (res, req, next) => {
  if (!req.session.role === "manager") {
    res
      .status(401)
      .json({ message: "You are not authorised to perform this action" });
  } else {
    next();
  }
};

module.exports = { withAuth, withAdminAuth };
