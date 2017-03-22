const express = require('express');
const Joi = require('joi');
const _ = require('underscore');
let router = express.Router();
const categoryActions = require('../models/category').categoryActions,
    categoryValidator = require('../models/category').categoryValidator;
const verifyJWTToken = require('../middlewares').verifyJWTToken,
    authenticateAsClient = require('../middlewares').authenticateAsClient;

/**
 * @api {post} /categories/create Create a new Category
 * @apiGroup Category
 * @apiVersion 1.0.0
 * @apiParam {String} name Category name <strong>(required)</strong>
 * @apiParam {String} attachment_url Category image URL <strong>(required)</strong>
 * @apiError (Error 500) {String} error Shows info about error that occured
 * @apiError (Error 500) {String} status Value is 'failed'. Means the request wasn't successful
 * @apiSuccess {Object} category Category information
 * @apiSuccess {String} status Value is 'success'. Means a successful request
 * @apiSuccess {String} token JWT that would be used to make subsequent requests
 * @apiSampleRequest https://nikeminimalist.herokuapp.com/api/v1/categories/create
 */
router.post('/create',verifyJWTToken, authenticateAsClient, (req, res, next) => {
    const result = Joi.validate({
        name: req.body.name,
        attachment_url: req.body.attachment_url,
    }, categoryValidator);

    if (_.isNull(result.error)) {
        categoryActions.create(req.body).then(result => {
            res.status(200).json({
                status: 'success',
                category: result
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
