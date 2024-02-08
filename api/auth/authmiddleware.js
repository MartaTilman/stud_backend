// authMiddleware.js

const jwt = require('jsonwebtoken');

const authenticateUser = (req, res, next) => {
  // Check if Authorization header is present
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ message: 'Missing Authorization header' });
  }

  // Extract JWT token from the Authorization header
  const token = authHeader.split(' ')[1];
  if (!token) {
    return res.status(401).json({ message: 'Invalid Authorization header format' });
  }

  // Verify the JWT token and extract user ID
  jwt.verify(token, 'your_secret_key', (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: 'Invalid token' });
    }
    req.user = decoded;
    next();
  });
};

module.exports = authenticateUser;
