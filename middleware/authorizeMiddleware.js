const authorize = (roles) => {
    return (req, res, next) => {
      const userRoles = req.Users.role; // Assuming you have a 'roles' field in your User model
  
      if (!roles.some((role) => userRoles.includes(role))) {
        return res.status(403).json({ error: 'Forbidden: Insufficient permissions' });
      }
  
      next();
    };
  };
  
  module.exports = authorize;