const Parse = require('parse/node');
const _ = require('underscore');
let MinimalistProduct = Parse.Object.extend('MinimalistProduct');
let MinimalistFavorite = Parse.Object.extend('MinimalistFavorite');
let MinimalistUser = Parse.Object.extend('MinimalistUser');

let checkUniqueFavorite = (req, res, next) => {
    let query = new Parse.Query(MinimalistProduct);
    query.get(req.params.id).then(product => {
        let query2 = new Parse.Query(MinimalistUser);
        query2.get(req.decoded.id).then(user => {
            let query3 = new Parse.Query(MinimalistFavorite);
            query3.equalTo('product', product);
            query3.equalTo('user', user);
            query3.first().then(favorite => {
                if (_.isUndefined(favorite)) {
                    next();
                } else {
                    res.status(500).json({
                        status: 'failed',
                        error: 'Product is already in User Favorites'
                    });
                }
            }).catch(error => {
                res.status(500).json({
                    status: 'failed',
                    error: 'Failed to retrieve Favorite. Error: ' + error.message
                });
            });
        }).catch(error => {
            res.status(500).json({
                status: 'failed',
                error: 'Failed to retrieve User. Error: ' + error.message
            });
        });
    }).catch(error => {
        res.status(500).json({
            status: 'failed',
            error: 'Failed to retrieve Product. Error: ' + error.message
        });
    });
};

module.exports = checkUniqueFavorite;
