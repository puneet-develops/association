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

module.exports = verifyToken;
