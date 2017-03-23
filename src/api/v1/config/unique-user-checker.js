const Parse = require('parse/node');
let MinimalistUser = Parse.Object.extend('MinimalistUser');

let checkUniqueUser = email => {
    let promise = new Parse.Promise();
    let query = new Parse.Query(MinimalistUser);
    query.equalTo('email', email.toLowerCase());
    query.first().then(user => {
        if (user) {
            promise.resolve(user);
        } else {
            promise.resolve(null);
        }
    }).catch(error => {
        error.message = 'Failed to search for User';
        promise.reject(error);
    });

    return promise;
}

module.exports = checkUniqueUser;
