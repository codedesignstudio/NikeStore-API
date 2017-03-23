const express = require('express');
const Joi = require('joi');
const _ = require('underscore');
let router = express.Router();
const userActions = require('../models/user').userActions,
    userValidators = require('../models/user').userValidators;

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
router.post('/register', (req, res, next) => {
    const result = Joi.validate({
        email: req.body.email,
        password: req.body.password,
        full_name: req.body.full_name,
        phone: req.body.phone
    }, userValidators.schema1);

    if (_.isNull(result.error)) {
        userActions.create(req.body).then(result => {
            res.status(200).json({
                status: 'success',
                user: result
            });
        }).catch(error => {
            res.status(500).json({
                status: 'failed',
                error
            });
        });
    } else {
        res.status(500).json({
            status: 'failed',
            error: result.error.details
        });
    }
});

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
router.post('/login', (req, res, next) => {
    const result = Joi.validate({
        email: req.body.email,
        password: req.body.password,
    }, userValidators.schema2);

    if (_.isNull(result.error)) {
        userActions.authenticate(req.body).then(result => {
            res.status(200).json({
                status: 'success',
                user: result.user,
                token: result.token
            });
        }).catch(error => {
            res.status(500).json({
                status: 'failed',
                error
            });
        });
    } else {
        res.status(500).json({
            status: 'failed',
            error: result.error.details
        });
    }
});

module.exports = router;
