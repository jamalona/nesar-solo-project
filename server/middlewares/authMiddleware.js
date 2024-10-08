const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).send('Access denied');

  try {
    const decoded = jwt.verify(token, 'secret');
    req.admin = decoded;
    next();
  } catch (err) {
    res.status(400).send('Invalid token. '+err.message);
  }
};
