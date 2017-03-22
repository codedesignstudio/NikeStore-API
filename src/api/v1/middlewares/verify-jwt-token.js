const jwt = require('jsonwebtoken');
const constantsConfig = require('../config').constantsConfig;

let verifyJWTToken = (req, res, next) => {
    let token = req.body.token;
    if (token) {
        jwt.verify(token, constantsConfig.JWT_TOKEN_SECRET, (error, decoded) => {
            if (error) {
                res.status(500).json({
                    status: 'failed',
                    error: 'Failed to authenticate token'
                });
            } else {
                req.decoded = decoded;
                next();
            }
        });
    } else {
        res.status(500).json({
            status: 'failed',
            error: 'No token provided'
        });
    }
};

module.exports = verifyJWTToken;
