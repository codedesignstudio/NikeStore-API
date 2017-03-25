const Parse = require('parse/node');
const _ = require('underscore');
const hashPassword = require('../../config').hashPassword,
    signJWTToken = require('../../config').signJWTToken,
    checkUniqueUser = require('../../config').checkUniqueUser;
let MinimalistUser = Parse.Object.extend('MinimalistUser');
let MinimalistFavorite = Parse.Object.extend('MinimalistFavorite');
let MinimalistCart = Parse.Object.extend('MinimalistCart');

exports.create = payload => {
    let promise = new Parse.Promise();
    checkUniqueUser(payload.email).then(result => {
        if (_.isNull(result)) {
            let user = new MinimalistUser();
            user.set('email', payload.email.toLowerCase());
            user.set('password', hashPassword(payload.password));
            user.set('full_name', payload.full_name);
            user.set('phone', payload.phone);

            user.save(null).then(
                user => promise.resolve(user)
            ).catch(
                error => promise.reject('Failed to create User. Error: ' + error.message)
            );
        } else promise.reject('User with email \'' + payload.email + '\' exists');
    }).catch(error => promise.reject(error.message));

    return promise;
};

exports.authenticate = payload => {
    let promise = new Parse.Promise();
    let query = new Parse.Query(MinimalistUser);
    query.select('email', 'full_name', 'phone');
    query.equalTo('email', payload.email);
    query.equalTo('password', hashPassword(payload.password));
    query.first().then(user => {
        promise.resolve({
            user,
            token: signJWTToken(user)
        });
    }).catch(error => promise.reject('Failed to authenticate User. Error: ' + error.message));

    return promise;
};

exports.getFavorites = id => {
    let promise = new Parse.Promise();
    let query = new Parse.Query(MinimalistUser);
    query.get(id).then(user => {
        let query2 = new Parse.Query(MinimalistFavorite);
        query2.equalTo('user', user);
        query2.include('user', 'product');
        query2.find().then(
            favorites => promise.resolve(favorites)
        ).catch(error => promise.reject('Failed to retrieve User Favorites. Error: ' + error.message));
    }).catch(error => promise.reject('Failed to retrieve User. Error: ' + error.message));

    return promise;
};

exports.getCart = id => {
    let promise = new Parse.Promise();
    let query = new Parse.Query(MinimalistUser);
    query.get(id).then(user => {
        let query2 = new Parse.Query(MinimalistCart);
        query2.equalTo('user', user);
        query2.include('user', 'product');
        query2.find().then(
            cart => promise.resolve(cart)
        ).catch(error => promise.reject('Failed to retrieve User Cart. Error: ' + error.message));
    }).catch(error => promise.reject('Failed to retrieve User. Error: ' + error.message));

    return promise;
};
