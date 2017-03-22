const Parse = require('parse/node');
const _ = require('underscore');
const hashPassword = require('../../config').hashPassword,
    signJWTToken = require('../../config').signJWTToken,
    checkUniqueUser = require('../../config').checkUniqueUser;
let MinimalistUser = Parse.Object.extend('MinimalistUser');

exports.create = (payload) => {
    let promise = new Parse.Promise();
    checkUniqueUser(payload.email).then(result => {
        if (_.isNull(result)) {
            let user = new MinimalistUser();
            user.set('email', payload.email);
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

exports.authenticate = (payload) => {
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
