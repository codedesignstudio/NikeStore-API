const Parse = require('parse/node');
const _ = require('underscore');
const checkUniqueCategory = require('../../config').checkUniqueCategory;
let MinimalistCategory = Parse.Object.extend('MinimalistCategory');

exports.create = (payload) => {
    let promise = new Parse.Promise();
    checkUniqueCategory(payload.name).then(result => {
        if (_.isNull(result)) {
            let minimalistCategory = new MinimalistCategory();
            minimalistCategory.set('name', payload.name);
            minimalistCategory.set('attachment_url', payload.attachment_url);
            minimalistCategory.save(null).then(
                category => promise.resolve(category)
            ).catch(error => promise.reject('Failed to create Category. Error: ' + error.message));
        } else promise.reject('Category \'' + payload.name + '\' exists');
    }).catch(error => promise.reject(error.message));

    return promise;
};
