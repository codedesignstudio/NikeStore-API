const verifyJWTToken = require('./verify-jwt-token');
const authenticateAsClient = require('./auth-client');
const authenticateAsCustomer = require('./auth-customer');

module.exports = {
    verifyJWTToken,
    authenticateAsClient,
    authenticateAsCustomer
};
