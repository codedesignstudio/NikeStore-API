const Joi = require('joi');

const schema = Joi.object().keys({
    username: Joi.string().required(),
    password: Joi.string().required()
});

module.exports = schema;
