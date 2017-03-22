const express = require('express');
const Joi = require('joi');
const _ = require('underscore');
let router = express.Router();
const clientActions = require('../models/client').clientActions,
    clientValidator = require('../models/client').clientValidator;

/**
 * @api {post} /clients/login Authenticate a Client
 * @apiGroup Client
 * @apiVersion 1.0.0
 * @apiParam {String} username Client username <strong>(required)</strong>
 * @apiParam {String} password Client password <strong>(required)</strong>
 * @apiError (Error 500) {String} error Shows info about error that occured
 * @apiError (Error 500) {String} status Value is 'failed'. Means the request wasn't successful
 * @apiSuccess {Object} client Client information
 * @apiSuccess {String} status Value is 'success'. Means a successful request
 * @apiSuccess {String} token JWT that would be used to make subsequent requests
 * @apiSampleRequest https://nikeminimalist.herokuapp.com/api/v1/clients/login
 */
router.post('/login', (req, res, next) => {
    const result = Joi.validate({
        username: req.body.username,
        password: req.body.password,
    }, clientValidator);

    if (_.isNull(result.error)) {
        clientActions.authenticate(req.body).then(result => {
            res.status(200).json({
                status: 'success',
                client: result.client,
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
