const Parse = require('parse/node');
let MinimalistClient = parse.Objct.extend('MinimalistClient');

let authenticateAsClient = (req, res, next) => {
    let query = new Parse.Query(MinimalistClient);
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
            error: 'Failed to retrieve Client. Error: ' + error.message
        });
    });
};

module.exports = authenticateAsClient;
