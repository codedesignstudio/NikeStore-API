const Parse = require('parse/node');
let MinimalistCategory = Parse.Object.extend('MinimalistCategory');

let checkUniqueCategory = (name) => {
    let promise = new Parse.Promise();
    let query = new Parse.Query(MinimalistCategory);
    query.equalTo('name', name.toLowerCase());
    query.first().then(category => {
        if (category) {
            promise.resolve(category);
        } else {
            promise.resolve(null);
        }
    }).catch(error => {
        error.message = 'Failed to search for Category';
        promise.reject(error);
    });

    return promise;
};

module.exports = checkUniqueCategory;
