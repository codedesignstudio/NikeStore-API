const express = require('express');
const Joi = require('joi');
const _ = require('underscore');
let router = express.Router();
const userActions = require('../models/user').userActions,
    userValidator = require('../models/user').userValidator;

router.post('/register', (req, res, next) => {
    const result = Joi.validate({
        email: req.body.email,
        password: req.body.password,
    }, userValidator);

    if (_.isNull(result.error)) {
        userActions.create(req.body, res);
    } else {
        res.status(500).json({
            status: 'failed',
            error: result.error.details
        });
    }
});

router.post('/login', (req, res, next) => {
    const result = Joi.validate({
        email: req.body.email,
        password: req.body.password,
    }, userValidator);

    if (_.isNull(result.error)) {
        userActions.authenticate(req.body, res);
    } else {
        res.status(500).json({
            status: 'failed',
            error: result.error.details
        });
    }
});

module.exports = router;
