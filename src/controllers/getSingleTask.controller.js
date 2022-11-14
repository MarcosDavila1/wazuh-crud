const schema = require("../schemas/getSingleTask.schema");
const service = require("../services/tasks.service");

const getSingleTask = (data) => {
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

  const { id } = value;
  const result = service.getSingleTask(id);

  if (result) {
    return {
      error: false,
      statusCode: 200,
      data: result,
    };
  } else {
    return {
      error: true,
      statusCode: 400,
    };
  }
};

module.exports = {
  getSingleTask,
};
