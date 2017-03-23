const express = require('express');
const Joi = require('joi');
const _ = require('underscore');
let router = express.Router();
const categoryActions = require('../models/category').categoryActions,
    categoryValidators = require('../models/category').categoryValidators;
const verifyJWTToken = require('../middlewares').verifyJWTToken,
    authenticateAsClient = require('../middlewares').authenticateAsClient;

/**
 * @api {get} /categories Get all categories
 * @apiGroup Category
 * @apiVersion 1.0.0
 * @apiParam {String} token A valid Client token should be used here -- Can be passed in header or request body <strong>(required)</strong>
 * @apiError (Error 500) {String} error Shows info about error that occured
 * @apiError (Error 500) {String} status Value is 'failed'. Means the request wasn't successful
 * @apiSuccess {Object} categories Categories information
 * @apiSuccess {String} status Value is 'success'. Means a successful request
 */
router.get('/', verifyJWTToken, authenticateAsClient, (req, res, next) => {
    categoryActions.getAll().then(result => {
        res.status(200).json({
            status: 'success',
            categories: result
        });
    }).catch(error => {
        res.status(500).json({
            status: 'failed',
            error
        });
    });
});

/**
 * @api {get} /categories/:id Get a single category
 * @apiGroup Category
 * @apiVersion 1.0.0
 * @apiParam {String} id ID of the Category to retrieve -- Should be passed as a request parameter <strong>(required)</strong>
 * @apiParam {String} token A valid Client token should be used here -- Can be passed in header or request body <strong>(required)</strong>
 * @apiError (Error 500) {String} error Shows info about error that occured
 * @apiError (Error 500) {String} status Value is 'failed'. Means the request wasn't successful
 * @apiSuccess {Object} category Category information
 * @apiSuccess {String} status Value is 'success'. Means a successful request
 */
router.get('/:id', verifyJWTToken, authenticateAsClient, (req, res, next) => {
    const result = Joi.validate({
        id: req.params.id
    }, categoryValidators.schema2);

    if (_.isNull(result.error)) {
        categoryActions.getOne(req.params.id).then(result => {
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

/**
 * @api {post} /categories/create Create a new category
 * @apiGroup Category
 * @apiVersion 1.0.0
 * @apiParam {String} name Category name <strong>(required)</strong>
 * @apiParam {String} attachment_url Category image URL <strong>(required)</strong>
 * @apiParam {String} token A valid Client token should be used here -- Can be passed in header or request body <strong>(required)</strong>
 * @apiError (Error 500) {String} error Shows info about error that occured
 * @apiError (Error 500) {String} status Value is 'failed'. Means the request wasn't successful
 * @apiSuccess {Object} category Category information
 * @apiSuccess {String} status Value is 'success'. Means a successful request
 * @apiSampleRequest https://nikeminimalist.herokuapp.com/api/v1/categories/create
 */
router.post('/create', verifyJWTToken, authenticateAsClient, (req, res, next) => {
    const result = Joi.validate({
        name: req.body.name,
        attachment_url: req.body.attachment_url,
    }, categoryValidators.schema1);

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

/**
 * @api {put} /categories/:id/edit Edit details of a category
 * @apiGroup Category
 * @apiVersion 1.0.0
 * @apiParam {String} name Category name <strong>(required)</strong>
 * @apiParam {String} attachment_url Category image URL <strong>(required)</strong>
 * @apiParam {String} id ID of the Category to edit -- Should be passed as a request parameter <strong>(required)</strong>
 * @apiParam {String} token A valid Client token should be used here -- Can be passed in header or request body <strong>(required)</strong>
 * @apiError (Error 500) {String} error Shows info about error that occured
 * @apiError (Error 500) {String} status Value is 'failed'. Means the request wasn't successful
 * @apiSuccess {Object} category Category information
 * @apiSuccess {String} status Value is 'success'. Means a successful request
 * @apiSampleRequest https://nikeminimalist.herokuapp.com/api/v1/categories/categoryId/edit
 */
router.put('/:id/edit', verifyJWTToken, authenticateAsClient, (req, res, next) => {
    const result = Joi.validate({
        name: req.body.name,
        attachment_url: req.body.attachment_url,
        id: req.params.id
    }, categoryValidators.schema3);

    if (_.isNull(result.error)) {
        req.body.category_id = req.params.id;
        categoryActions.edit(req.body).then(result => {
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

/**
 * @api {delete} /categories/:id/delete Delete a category
 * @apiGroup Category
 * @apiVersion 1.0.0
 * @apiParam {String} id ID of the Category to delete -- Should be passed as a request parameter <strong>(required)</strong>
 * @apiParam {String} token A valid Client token should be used here -- Can be passed in header or request body <strong>(required)</strong>
 * @apiError (Error 500) {String} error Shows info about error that occured
 * @apiError (Error 500) {String} status Value is 'failed'. Means the request wasn't successful
 * @apiSuccess {String} status Value is 'success'. Means a successful request
 */
router.delete('/:id/delete', verifyJWTToken, authenticateAsClient, (req, res, next) => {
    const result = Joi.validate({
        id: req.params.id
    }, categoryValidators.schema2);

    if (_.isNull(result.error)) {
        categoryActions.remove(req.params.id).then(result => {
            res.status(200).json({status: 'success'});
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
