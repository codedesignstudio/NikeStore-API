const Parse = require('parse/node');
const _ = require('underscore');
let MinimalistProduct = Parse.Object.extend('MinimalistProduct');
let MinimalistCategory = Parse.Object.extend('MinimalistCategory');

exports.getOne = id => {
    let promise = new Parse.Promise();
    let query = new Parse.Query(MinimalistProduct);
    query.include('category');
    query.get(id).then(
        product => promise.resolve(product)
    ).catch(error => promise.reject('Failed to retrieve Product. Error: ' + error.message));

    return promise;
};

exports.getAllInCategory = category => {
    let promise = new Parse.Promise();
    let query = new Parse.Query(MinimalistProduct);
    query.equalTo('category', category);
    query.find().then(
        products => promise.resolve(products)
    ).catch(error => promise.reject('Failed to retrieve Products. Error: ' + error.message));

    return promise;
};

exports.changeCategory = payload => {
    let promise = new Parse.Promise();
    let query = new Parse.Query(MinimalistProduct);
    query.include('category');
    query.get(payload.product_id).then(product => {
        if (product.get('category').id == payload.new_category) {
            promise.reject('Product is already in ' + product.get('category').get('name') + ' Category. Select another Category');
        } else {
            let query2 = new Parse.Query(MinimalistCategory);
            query2.get(payload.new_category).then(category => {
                product.set('category', category);
                product.save(null).then(
                    product => promise.resolve(product)
                ).catch(error => promise.reject('Failed to change Product Category. Error: ' + error.message));

            }).catch(error => promise.reject(error));
        }
    }).catch(error => promise.reject('Failed to retrieve Product. Error: ' + error.message));

    return promise;
};

exports.create = payload => {
    let promise = new Parse.Promise();
    let query = new Parse.Query(MinimalistCategory);
    query.get(payload.category_id).then(category => {
        let minimalistProduct = new MinimalistProduct();
        minimalistProduct.set('name', payload.name);
        minimalistProduct.set('images', payload.images);
        minimalistProduct.set('price', payload.price);
        minimalistProduct.set('sizes', payload.sizes);
        minimalistProduct.set('colors', payload.colors);
        minimalistProduct.set('lorem', payload.lorem);
        minimalistProduct.set('category', category);
        minimalistProduct.save(null).then(
            product => promise.resolve(product)
        ).catch(error => promise.reject('Failed to create Product. Error: ' + error.message));
    }).catch(error => promise.reject(error));

    return promise;
};

exports.edit = payload => {
    let promise = new Parse.Promise();
    let query = new Parse.Query(MinimalistProduct);
    query.include('category');
    query.get(payload.product_id).then(product => {
        product.set('name', payload.name);
        product.set('images', payload.images);
        product.set('price', payload.price);
        product.set('sizes', payload.sizes);
        product.set('colors', payload.colors);
        product.set('lorem', payload.lorem);
        product.save(null).then(
            product => promise.resolve(product)
        ).catch(error => promise.reject('Failed to edit Product. Error: ' + error.message));
    }).catch(error => promise.reject('Failed to retrieve Product. Error: ' + error.message));

    return promise;
};

exports.remove = id => {
    let promise = new Parse.Promise();
    let query = new Parse.Query(MinimalistProduct);
    query.get(id).then(product => {
        product.destroy().then(
            product => promise.resolve(null)
        ).catch(error => promise.reject('Failed to delete Product. Error: ' + error.message));
    }).catch(error => promise.reject('Failed to retrieve Product. Error: ' + error.message));
    return promise;
};
