const Joi = require('joi');

const schema1 = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
    full_name: Joi.string().required(),
    phone: Joi.string().required()
});

const schema2 = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required()
});

module.exports = {
    schema1, schema2
};
