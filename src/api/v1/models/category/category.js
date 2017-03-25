const Parse = require('parse/node');
const _ = require('underscore');
const checkUniqueCategory = require('../../config').checkUniqueCategory;
const productActions = require('../product').productActions;
let MinimalistCategory = Parse.Object.extend('MinimalistCategory');

exports.getAll = () => {
    let promise = new Parse.Promise();
    let query = new Parse.Query(MinimalistCategory);
    query.find().then(
        categories => promise.resolve(categories)
    ).catch(error => promise.reject('Failed to retrieve Categories. Error: ' + error.message));

    return promise;
};

exports.getOne = id => {
    let promise = new Parse.Promise();
    let query = new Parse.Query(MinimalistCategory);
    query.get(id).then(
        category => promise.resolve(category)
    ).catch(error => promise.reject('Failed to retrieve Category. Error: ' + error.message));

    return promise;
};

exports.getProducts = id => {
    let promise = new Parse.Promise();
    let query = new Parse.Query(MinimalistCategory);
    query.get(id).then(category => {
        productActions.getAllInCategory(category).then(
            result => promise.resolve(result)
        ).catch(error => promise.reject(error));
    }).catch(error => promise.reject('Failed to retrieve Category. Error: ' + error.message));

    return promise;
};

exports.create = payload => {
    let promise = new Parse.Promise();
    checkUniqueCategory(payload.name).then(result => {
        if (_.isNull(result)) {
            let minimalistCategory = new MinimalistCategory();
            minimalistCategory.set('name', payload.name.toLowerCase());
            minimalistCategory.set('attachment_url', payload.attachment_url);
            minimalistCategory.save(null).then(
                category => promise.resolve(category)
            ).catch(error => promise.reject('Failed to create Category. Error: ' + error.message));
        } else promise.reject('Category \'' + payload.name + '\' exists');
    }).catch(error => promise.reject(error.message));

    return promise;
};

exports.edit = payload => {
    let promise = new Parse.Promise();
    let query = new Parse.Query(MinimalistCategory);
    query.get(payload.category_id).then(category => {
        category.set('name', payload.name.toLowerCase());
        category.set('attachment_url', payload.attachment_url);
        category.save(null).then(
            category => promise.resolve(category)
        ).catch(error => promise.reject('Failed to edit Category. Error: ' + error.message));
    }).catch(error => promise.reject('Failed to retrieve Category. Error: ' + error.message));

    return promise;
};

exports.remove = id => {
    let promise = new Parse.Promise();
    let query = new Parse.Query(MinimalistCategory);
    query.get(id).then(category => {
        category.destroy().then(
            category => promise.resolve(null)
        ).catch(error => promise.reject('Failed to delete Category. Error: ' + error.message));
    }).catch(error => promise.reject('Failed to retrieve Category. Error: ' + error.message));
    
    return promise;
};

// TODO: Add products counts to getAll and getOne
// TODO: Delete all products in category on delete
