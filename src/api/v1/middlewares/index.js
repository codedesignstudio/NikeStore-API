const verifyJWTToken = require('./verify-jwt-token');
const authenticateAsClient = require('./auth-client');
const authenticateAsCustomer = require('./auth-customer');
const checkUniqueFavorite = require('./unique-customer-favorite');
const checkUniqueCart = require('./unique-customer-cart');

module.exports = {
    verifyJWTToken,
    authenticateAsClient,
    authenticateAsCustomer,
    checkUniqueFavorite,
    checkUniqueCart
};
