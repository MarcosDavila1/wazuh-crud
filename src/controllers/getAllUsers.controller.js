const service = require("../services/users.service");

const getAllUsers = () => {
  const result = service.getAllUsers();

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
  getAllUsers,
};
