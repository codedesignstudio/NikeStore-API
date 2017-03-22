const Parse = require('parse/node');
const _ = require('underscore');
const checkUniqueCategory = require('../../config').checkUniqueCategory;
let MinimalistCategory = Parse.Object.extend('MinimalistCategory');

exports.create = (payload, res) => {
    checkUniqueCategory(payload.name).then(result => {
        if (_.isNull(result)) {
            let minimalistCategory = new MinimalistCategory();
            minimalistCategory.set('name', payload.name);
            minimalistCategory.save(null).then(category => {
                res.status(200).json({
                    status: 'success',
                    category
                });
            }).catch(error => {
                res.status(500).json({
                    status: 'failed',
                    error: 'Failed to create Category. Error: ' + error.message
                });
            });
        } else {
            res.status(500).json({
                status: 'failed',
                error: 'Category \'' + payload.name + '\' exists'
            });
        }
    }).catch(error => {
        res.status(500).json({
            status: 'failed',
            error: error.message
        });
    });
};
