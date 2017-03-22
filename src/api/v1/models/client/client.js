const Parse = require('parse/node');
const hashPassword = require('../../config').hashPassword,
    signJWTToken = require('../../config').signJWTToken;
let MinimalistClient = Parse.Object.extend('MinimalistClient');

/**
 * @api {post} /clients/login Authenticate a Client
 * @apiGroup Client
 * @apiVersion 1.0.0
 * @apiParam {String} username Client username <strong>(required)</strong>
 * @apiParam {String} password Client password <strong>(required)</strong>
 * @apiError (Error 500) {String} error Shows info about error that occured
 * @apiError (Error 500) {String} status Value is 'failed'. Means the request wasn't successful
 * @apiSuccess {Object} client Client information
 * @apiSuccess {String} status Value is 'success'. Means a successful request
 * @apiSuccess {String} token JWT that would be used to make subsequent requests
 * @apiSampleRequest https://nikeminimalist.herokuapp.com/api/v1/clients/login
 */
exports.authenticate = (payload, res) => {
    let query = new Parse.Query(MinimalistClient);
    query.equalTo('username', payload.username);
    query.equalTo('password', hashPassword(payload.password));
    query.first().then(client => {
        res.status(200).json({
            status: 'success',
            client,
            token: signJWTToken(client)
        });
    }).catch(error => {
        res.status(500).json({
            status: 'failed',
            error: 'Failed to authenticate Client. Error: ' + error.message
        });
    });
};
