const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  const bearerToken = req.header('Authorization');

  // Check if bearerToken is undefined or null
  if (!bearerToken) {
    return res.status(401).json({ error: 'Unauthorized: Missing token' });
  }

  // Split the bearerToken and extract the token
  const tokenParts = bearerToken.split(' ');
  if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
    return res.status(401).json({ error: 'Unauthorized: Invalid token format' });
  }

  const token = tokenParts[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); 
    req.user = decoded.user;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }
};
const verifyAdminToken = (req, res, next) => {
  const bearerToken = req.header('Authorization');

  // Check if bearerToken is undefined or null
  if (!bearerToken) {
      return res.status(401).json({ error: 'Unauthorized: Missing token' });
  }

  // Split the bearerToken and extract the token
  const tokenParts = bearerToken.split(' ');
  if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
      return res.status(401).json({ error: 'Unauthorized: Invalid token format' });
  }

  const token = tokenParts[1];

  try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Check if user role is 'admin'
      if (decoded.user.roles === 'admin'|| decoded.user.roles === 'superadmin' ) {
          next();
      } else {
          return res.status(403).json({ error: 'Forbidden: Only superadmin and admin have the access allowed' });
      }
  } catch (error) {
      console.error(error);
      res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }
};
const superadminToken = (req, res, next) => {
  const bearerToken = req.header('Authorization');

  // Check if bearerToken is undefined or null
  if (!bearerToken) {
      return res.status(401).json({ error: 'Unauthorized: Missing token' });
  }

  // Split the bearerToken and extract the token
  const tokenParts = bearerToken.split(' ');
  if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
      return res.status(401).json({ error: 'Unauthorized: Invalid token format' });
  }

  const token = tokenParts[1];

  try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Check if user role is 'admin'
      if (decoded.user.roles === 'superadmin') {
          next();
      } else {
          return res.status(403).json({ error: 'Forbidden: Only superadmin users allowed' });
      }
  } catch (error) {
      console.error(error);
      res.status(401).json({ error: 'Unauthorized: Invalid token' });
  }
};
module.exports = { verifyToken, verifyAdminToken ,superadminToken};
