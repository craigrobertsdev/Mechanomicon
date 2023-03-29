// Middleware to check if the user has the required role
const checkRole = (requiredRole) => {
  return async (req, res, next) => {
    try {
      // Check if the user is logged in
      if (!req.session.logged_in) {
        return res.status(401).json({ message: "Please log in first!" });
      }

      // Get the user's role from the database
      const user = await User.findOne({
        where: { id: req.session.user_id },
        attributes: ["role"],
      });

      // Check if the user's role matches the required role
      if (user.role !== requiredRole) {
        return res.status(403).json({ message: "Access denied!" });
      }

      // If the user has the required role, proceed to the next middleware
      next();
    } catch (error) {
      res.status(500).json({ message: "An error occurred", error: error });
    }
  };
};
