const schema = require("../schemas/getTasksByUser.schema");
const service = require("../services/users.service");

const getTasksByUser = (data) => {
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

  const { id, completed, title } = value;
  const result = service.getTasksByUser(id, completed, title);

  if (result) {
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
  getTasksByUser,
};
