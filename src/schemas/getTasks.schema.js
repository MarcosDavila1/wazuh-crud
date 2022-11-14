const joi = require("joi");

module.exports = joi.object().keys({
  completed: joi.boolean().optional(),
  title: joi.string().optional(),
});
