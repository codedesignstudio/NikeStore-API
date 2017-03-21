const jwt = require('jsonwebtoken');
const JWT_TOKEN_SECRET = require('./constants').JWT_TOKEN_SECRET;

let signJWTToken = user => {
    return jwt.sign(user, JWT_TOKEN_SECRET, { expiresIn: '1y' });
};

module.exports = signJWTToken;
