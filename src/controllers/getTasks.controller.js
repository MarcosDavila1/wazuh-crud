const schema = require("../schemas/getTasks.schema");
const service = require("../services/tasks.service");

const getTasks = (data) => {
  const { error, value } = schema.validate(data, {
    abortEarly: false,
    allowUnknown: true,
  });

  if (error) {
    return {
      statusCode: 400,
      message: error.details ? error.details.map((e) => e.message) : error,
    };
  }

  const { completed, title } = value;
  const result = service.getTasks(completed, title);

  if (result.length) {
    const formatResult = {
      total_items: result.length,
      data: result,
    };
    return {
      error: false,
      statusCode: 200,
      data: formatResult,
    };
  } else {
    return {
      error: true,
      statusCode: 400,
    };
  }
};

module.exports = {
  getTasks,
};
