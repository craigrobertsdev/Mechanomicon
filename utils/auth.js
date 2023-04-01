const withAuth = (req, res, next) => {
  // If the user is not logged in via normal login or Google login, redirect the request to the login route
  if (!req.session.logged_in && !req.isAuthenticated()) {
    res.redirect("/login");
  } else {
    // Set req.session.logged_in to true if the user is authenticated via Google login
    if (req.isAuthenticated()) {
      req.session.logged_in = true;
    }
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
    // Set req.session.logged_in to true if the user is authenticated via Google login
    if (req.isAuthenticated()) {
      req.session.logged_in = true;
    }
    next();
  }
};

const attachAuthInfo = (req, res, next) => {
  console.log("AttachAuthInfo called");
  if (req.isAuthenticated()) {
    console.log("AttachAuthInfo: isAuthenticated is true");
    req.session.logged_in = true;
    req.session.user_id = req.user.id;
    res.locals.isAuthenticated = true;
    res.locals.user = req.user;
  } else {
    console.log("AttachAuthInfo: isAuthenticated is false");
  }
  next();
};

module.exports = {
withAuth, withTechnicianAuth, withAdminAuth,  attachAuthInfo,
};
