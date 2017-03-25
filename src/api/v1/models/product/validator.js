const Joi = require('joi');

const schema1 = Joi.object().keys({
    name: Joi.string().required(),
    images: Joi.array().items(Joi.string()).min(1).max(5).unique().required(),
    price: Joi.string().required(),
    lorem: Joi.string().required(),
    sizes: Joi.array().items(Joi.string()).unique(),
    colors: Joi.array().items(Joi.string()).unique(),
    category_id: Joi.string().required()
});

const schema2 = Joi.object().keys({
    id: Joi.string().required()
});

const schema3 = Joi.object().keys({
    name: Joi.string().required(),
    images: Joi.array().items(Joi.string()).min(1).max(5).unique().required(),
    price: Joi.string().required(),
    lorem: Joi.string().required(),
    sizes: Joi.array().items(Joi.string()).unique(),
    colors: Joi.array().items(Joi.string()).unique(),
    id: Joi.string().required()
});

const schema4 = Joi.object().keys({
    id: Joi.string().required(),
    new_category: Joi.string().required()
});

module.exports = {
    schema1, schema2,
    schema3, schema4
};
