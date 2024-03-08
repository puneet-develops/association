const jwt = require('jsonwebtoken');
const verifyToken = (req, res, next) => {
  const bearerToken = req.header('Authorization');
  const token = bearerToken.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: Missing token' });
  }
  console.log(token);

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