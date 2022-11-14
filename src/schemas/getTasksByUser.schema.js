const joi = require("joi");

module.exports = joi.object().keys({
  id: joi.number().required(),
  completed: joi.boolean().optional(),
  title: joi.string().optional(),
});
