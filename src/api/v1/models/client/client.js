const Parse = require('parse/node');
const hashPassword = require('../../config').hashPassword,
    signJWTToken = require('../../config').signJWTToken;
let MinimalistClient = Parse.Object.extend('MinimalistClient');

exports.authenticate = (payload, res) => {
    let promise = new Parse.Promise();
    let query = new Parse.Query(MinimalistClient);
    query.equalTo('username', payload.username);
    query.equalTo('password', hashPassword(payload.password));
    query.first().then(client => {
        promise.resolve({
            client,
            token: signJWTToken(client)
        });
    }).catch(error => promise.reject('Failed to authenticate Client. Error: ' + error.message));

    return promise;
};
