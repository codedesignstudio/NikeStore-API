const Joi = require('joi');

const schema = Joi.object().keys({
    name: Joi.string().required(),
    attachment_url: Joi.string().required()
}).with('name', 'attachment_url');

module.exports = schema;
