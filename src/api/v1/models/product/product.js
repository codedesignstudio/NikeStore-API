const Parse = require('parse/node');
let MinimalistProduct = Parse.Object.extend('MinimalistProduct');
let MinimalistCategory = Parse.Object.extend('MinimalistCategory');
let MinimalistFavorite = Parse.Object.extend('MinimalistFavorite');
let MinimalistCart = Parse.Object.extend('MinimalistCart');
let MinimalistUser = Parse.Object.extend('MinimalistUser');

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

exports.addToFavorites = (product_id, user_id) => {
    let promise = new Parse.Promise();
    let query = new Parse.Query(MinimalistProduct);
    query.get(product_id).then(product => {
        let query2 = new Parse.Query(MinimalistUser);
        query2.get(user_id).then(user => {
            let minimalistFavorite = new MinimalistFavorite();
            minimalistFavorite.set('product', product);
            minimalistFavorite.set('user', user);
            minimalistFavorite.save(null).then(
                favorite => promise.resolve(favorite)
            ).catch(error => promise.reject('Failed to add Product to Favorites. Error: ' + error.message));
        }).catch(error => promise.reject('Failed to retrieve User. Error: ' + error.message));
    }).catch(error => promise.reject('Failed to retrieve Product. Error: ' + error.message));

    return promise;
};

exports.addToCart = (product_id, user_id) => {
    let promise = new Parse.Promise();
    let query = new Parse.Query(MinimalistProduct);
    query.get(product_id).then(product => {
        let query2 = new Parse.Query(MinimalistUser);
        query2.get(user_id).then(user => {
            let minimalistCart = new MinimalistCart();
            minimalistCart.set('product', product);
            minimalistCart.set('user', user);
            minimalistCart.save(null).then(
                cart => promise.resolve(cart)
            ).catch(error => promise.reject('Failed to add Product to Cart. Error: ' + error.message));
        }).catch(error => promise.reject('Failed to retrieve User. Error: ' + error.message));
    }).catch(error => promise.reject('Failed to retrieve Product. Error: ' + error.message));

    return promise;
};

exports.removeFromFavorites = (product_id, user_id) => {
    let promise = new Parse.Promise();
    let query = new Parse.Query(MinimalistProduct);
    query.get(product_id).then(product => {
        let query2 = new Parse.Query(MinimalistUser);
        query2.get(user_id).then(user => {
            let query3 = new Parse.Query(MinimalistFavorite);
            query3.equalTo('product', product);
            query3.equalTo('user', user);
            query3.first().then(favorite => {
                favorite.destroy().then(
                    favorite => promise.resolve(null)
                ).catch(error => promise.reject('Failed to remove Product from Favorite. Error: ' + error.message));
            }).catch(error => promise.reject('Failed to retrieve Favorite. Error: ' + error.message));
        }).catch(error => promise.reject('Failed to retrieve User. Error: ' + error.message));
    }).catch(error => promise.reject('Failed to retrieve Product. Error: ' + error.message));

    return promise;
};

exports.removeFromCart = (product_id, user_id) => {
    let promise = new Parse.Promise();
    let query = new Parse.Query(MinimalistProduct);
    query.get(product_id).then(product => {
        let query2 = new Parse.Query(MinimalistUser);
        query2.get(user_id).then(user => {
            let query3 = new Parse.Query(MinimalistCart);
            query3.equalTo('product', product);
            query3.equalTo('user', user);
            query3.first().then(cart => {
                cart.destroy().then(
                    cart => promise.resolve(null)
                ).catch(error => promise.reject('Failed to remove Product from Cart. Error: ' + error.message));
            }).catch(error => promise.reject('Failed to retrieve Cart. Error: ' + error.message));
        }).catch(error => promise.reject('Failed to retrieve User. Error: ' + error.message));
    }).catch(error => promise.reject('Failed to retrieve Product. Error: ' + error.message));

    return promise;
};
