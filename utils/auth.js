const withAuth = (req, res, next) => {
  // If the user is not logged in, redirect the request to the login route
  if (!req.session.logged_in) {
    res.redirect("/login");
  } else {
    next();
  }
};

const withTechnicianAuth = (req, res, next) => {
  if (req.session.role !== "technician" || req.session.role !== "manager") {
    res.redirect("/");
  } else {
    next();
  }
};

const withAdminAuth = (req, res, next) => {
  if (req.session.role !== "manager") {
    res.redirect("/");
  } else {
    next();
  }
};

module.exports = { withAuth, withAdminAuth };
