const express = require('express');
const Joi = require('joi');
const _ = require('underscore');
let router = express.Router();
const clientActions = require('../models/client').clientActions,
    clientValidator = require('../models/client').clientValidator;

router.post('/login', (req, res, next) => {
    const result = Joi.validate({
        username: req.body.username,
        password: req.body.password,
    }, clientValidator);

    if (_.isNull(result.error)) {
        clientActions.authenticate(req.body, res);
    } else {
        res.status(500).json({
            status: 'failed',
            error: result.error.details
        });
    }
});

module.exports = router;
