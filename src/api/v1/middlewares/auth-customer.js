const Parse = require('parse/node');
let MinimalistUser = Parse.Object.extend('MinimalistUser');

let authenticateAsCustomer = (req, res, next) => {
    let query = new Parse.Query(MinimalistUser);
    query.get(req.decoded.id).then(user => {
        if (user)
            next();
        else
            res.status(500).json({
                status: 'failed',
                error: 'Unauthorized'
            });
    }).catch(error => {
        res.status(500).json({
            status: 'failed',
                error: 'Failed to retrieve User. Error: ' + error.message
        });
    });
};

module.exports = authenticateAsCustomer;
