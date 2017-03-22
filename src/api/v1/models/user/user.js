const Parse = require('parse/node');
const _ = require('underscore');
const hashPassword = require('../../config').hashPassword,
    signJWTToken = require('../../config').signJWTToken,
    checkUniqueUser = require('../../config').checkUniqueUser;
let MinimalistUser = Parse.Object.extend('MinimalistUser');

/**
 * @api {post} /users/register Register a new User
 * @apiGroup User
 * @apiVersion 1.0.0
 * @apiParam {String} email User email <strong><strong>(required)</strong>
 * @apiParam {String} password User password <strong>(required)</strong>
 * @apiParam {String} full_name User full name <strong><strong>(required)</strong>
 * @apiParam {String} phone User phone number <strong>(required)</strong>
 * @apiError (Error 500) {String} error Shows info about error that occured
 * @apiError (Error 500) {String} status Value is 'failed'. Means the request wasn't successful
 * @apiSuccess {Object} user User information
 * @apiSuccess {String} status Value is 'success'. Means a successful request
 * @apiSampleRequest https://nikeminimalist.herokuapp.com/api/v1/users/register
 */
exports.create = (payload, res) => {
    checkUniqueUser(payload.email).then(result => {
        if (_.isNull(result)) {
            let user = new MinimalistUser();
            user.set('email', payload.email);
            user.set('password', hashPassword(payload.password));
            user.set('full_name', payload.full_name);
            user.set('phone', payload.phone);

            user.save(null).then(user => {
                res.status(200).json({
                    status: 'success',
                    user
                });
            }).catch(error => {
                res.status(500).json({
                    status: 'failed',
                    error: 'Failed to create user. Error: ' + error.message
                });
            });
        } else {
            res.status(500).json({
                status: 'failed',
                error: 'User with email \'' + payload.email + '\' exists'
            });
        }
    }).catch(error => {
        res.status(500).json({
            status: 'failed',
            error: error.message
        });
    });
};

/**
 * @api {post} /users/login Authenticate a User
 * @apiGroup User
 * @apiVersion 1.0.0
 * @apiParam {String} email User email <strong>(required)</strong>
 * @apiParam {String} password User password <strong>(required)</strong>
 * @apiError (Error 500) {String} error Shows info about error that occured
 * @apiError (Error 500) {String} status Value is 'failed'. Means the request wasn't successful
 * @apiSuccess {Object} user User information
 * @apiSuccess {String} status Value is 'success'. Means a successful request
 * @apiSuccess {String} token JWT that would be used to make subsequent requests
 * @apiSampleRequest https://nikeminimalist.herokuapp.com/api/v1/users/login
 */
exports.authenticate = (payload, res) => {
    let query = new Parse.Query(MinimalistUser);
    query.select('email', 'full_name', 'phone');
    query.equalTo('email', payload.email);
    query.equalTo('password', hashPassword(payload.password));
    query.first().then(user => {
        res.status(200).json({
            status: 'success',
            user,
            token: signJWTToken(user)
        });
    }).catch(error => {
        res.status(500).json({
            status: 'failed',
            error: 'Failed to authenticate User. Error: ' + error.message
        });
    });
};
