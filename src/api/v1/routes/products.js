const express = require('express');
const Joi = require('joi');
const _ = require('underscore');
let router = express.Router();
const productActions = require('../models/product').productActions,
    productValidators = require('../models/product').productValidators;
const verifyJWTToken = require('../middlewares').verifyJWTToken,
    authenticateAsClient = require('../middlewares').authenticateAsClient;

/**
 * @api {get} /products/:id Get details of a Product
 * @apiGroup Product
 * @apiVersion 1.0.0
 * @apiParam {String} id ID of Product to retrieve -- Should be passed as a request parameter <strong>(required)</strong>
 * @apiParam {String} token A valid token should be used here (Client or Customer) -- Can be passed in header or request body <strong>(required)</strong>
 * @apiError (Error 500) {String} error Shows info about error that occured
 * @apiError (Error 500) {String} status Value is 'failed'. Means the request wasn't successful
 * @apiSuccess {Object} product Product information
 * @apiSuccess {String} status Value is 'success'. Means a successful request
 */
router.get('/:id', verifyJWTToken, (req, res, next) => {
    const result = Joi.validate({
        id: req.params.id
    }, productValidators.schema2);

    if (_.isNull(result.error)) {
        productActions.getOne(req.params.id).then(result => {
            res.status(200).json({
                status: 'success',
                product: result
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
 * @api {post} /products/:id/changecategory Change the Category a Product belongs to
 * @apiGroup Product
 * @apiVersion 1.0.0
 * @apiParam {String} id ID of the Product -- Should be passed as a request parameter <strong>(required)</strong>
 * @apiParam {String} new_category ID of the new Category <strong>(required)</strong>
 * @apiParam {String} token A valid Client token should be used here -- Can be passed in header or request body <strong>(required)</strong>
 * @apiError (Error 500) {String} error Shows info about error that occured
 * @apiError (Error 500) {String} status Value is 'failed'. Means the request wasn't successful
 * @apiSuccess {Object} product Product information
 * @apiSuccess {String} status Value is 'success'. Means a successful request
 */
router.post('/:id/changecategory', verifyJWTToken, authenticateAsClient, (req, res, next) => {
    const result = Joi.validate({
        id: req.params.id,
        new_category: req.body.new_category
    }, productValidators.schema4);

    if (_.isNull(result.error)) {
        req.body.product_id = req.params.id;
        productActions.changeCategory(req.body).then(result => {
            res.status(200).json({
                status: 'success',
                product: result
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
 * @api {post} /products/create Add a Product to a Category
 * @apiGroup Product
 * @apiVersion 1.0.0
 * @apiParam {String} category_id ID of Category to add the product to <strong>(required)</strong>
 * @apiParam {String} name Product name <strong>(required)</strong>
 * @apiParam {String[]} images Array of Product image URLs -- Minmum:1, Maximum:5 <strong>(required)</strong>
 * @apiParam {String[]} sizes Array of Product Sizes <strong>(optional)</strong>
 * @apiParam {String[]} colors Array of Product Colors <strong>(optional)</strong>
 * @apiParam {String} price Product price <strong>(required)</strong>
 * @apiParam {String} lorem Product description <strong>(required)</strong>
 * @apiParam {String} token A valid Client token should be used here -- Can be passed in header or request body <strong>(required)</strong>
 * @apiError (Error 500) {String} error Shows info about error that occured
 * @apiError (Error 500) {String} status Value is 'failed'. Means the request wasn't successful
 * @apiSuccess {Object} product Product information
 * @apiSuccess {String} status Value is 'success'. Means a successful request
 * @apiSampleRequest https://nikeminimalist.herokuapp.com/api/v1/products/create
 */
router.post('/create', verifyJWTToken, authenticateAsClient, (req, res, next) => {
    const result = Joi.validate({
        name: req.body.name,
        images: req.body.images,
        price: req.body.price,
        lorem: req.body.lorem,
        sizes: req.body.sizes,
        colors: req.body.colors,
        category_id: req.body.category_id
    }, productValidators.schema1);

    if (_.isNull(result.error)) {
        productActions.create(req.body).then(result => {
            res.status(200).json({
                status: 'success',
                product: result
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
 * @api {put} /products/:id/edit Edit details of a product
 * @apiGroup Product
 * @apiVersion 1.0.0
 * @apiParam {String} id ID of Product to edit <strong>(required)</strong>
 * @apiParam {String} name Product name <strong>(required)</strong>
 * @apiParam {String[]} images Array of Product image URLs -- Minmum:1, Maximum:5 <strong>(required)</strong>
 * @apiParam {String[]} sizes Array of Product Sizes <strong>(optional)</strong>
 * @apiParam {String[]} colors Array of Product Colors <strong>(optional)</strong>
 * @apiParam {String} price Product price <strong>(required)</strong>
 * @apiParam {String} lorem Product description <strong>(required)</strong>
 * @apiParam {String} token A valid Client token should be used here -- Can be passed in header or request body <strong>(required)</strong>
 * @apiError (Error 500) {String} error Shows info about error that occured
 * @apiError (Error 500) {String} status Value is 'failed'. Means the request wasn't successful
 * @apiSuccess {Object} product Product information
 * @apiSuccess {String} status Value is 'success'. Means a successful request
 * @apiSampleRequest https://nikeminimalist.herokuapp.com/api/v1/products/producId/edit
 */
router.put('/:id/edit', verifyJWTToken, authenticateAsClient, (req, res, next) => {
    const result = Joi.validate({
        name: req.body.name,
        images: req.body.images,
        price: req.body.price,
        lorem: req.body.lorem,
        sizes: req.body.sizes,
        colors: req.body.colors,
        id: req.params.id
    }, productValidators.schema3);

    if (_.isNull(result.error)) {
        req.body.product_id = req.params.id;
        productActions.edit(req.body).then(result => {
            res.status(200).json({
                status: 'success',
                product: result
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
 * @api {delete} /products/:id/delete Delete a product
 * @apiGroup Product
 * @apiVersion 1.0.0
 * @apiParam {String} id ID of the Product to delete -- Should be passed as a request parameter <strong>(required)</strong>
 * @apiParam {String} token A valid Client token should be used here -- Can be passed in header or request body <strong>(required)</strong>
 * @apiError (Error 500) {String} error Shows info about error that occured
 * @apiError (Error 500) {String} status Value is 'failed'. Means the request wasn't successful
 * @apiSuccess {String} status Value is 'success'. Means a successful request
 */
router.delete('/:id/delete', verifyJWTToken, authenticateAsClient, (req, res, next) => {
    const result = Joi.validate({
        id: req.params.id
    }, productValidators.schema2);

    if (_.isNull(result.error)) {
        productActions.remove(req.params.id).then(result => {
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
