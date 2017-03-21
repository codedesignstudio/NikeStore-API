const jwt = require('jsonwebtoken');
const configConstants = require('../config').configConstants;

let verifyJWTToken = (req, res, next) => {
    let token = req.body.token;
    if (token) {
        jwt.verify(token, configConstants.JWT_TOKEN_SECRET, (error, decoded) => {
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
