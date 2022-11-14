const headers = require("../libs/headers");
const controller = require("../controllers/getTasksByUser.controller");

const getTasksByUser = async (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const logPrefix = "getTasksByUser";

  let response = {
    headers,
    statusCode: 500,
    body: JSON.stringify({ response: "Internal server error" }),
  };

  const data = {
    ...event.body,
    ...event.pathParameters,
    ...event.queryStringParameters,
  };
  console.info(`data: ${JSON.stringify(data)}`);

  try {
    const result = controller.getTasksByUser(data);
    if (!result.error) {
      response = {
        statusCode: 200,
        body: result,
      };
    } else {
      response = {
        statusCode: 400,
        body: result,
      };
    }
  } catch (error) {
    console.log(`Function: ${logPrefix} | Error: ${error}`);
  } finally {
    console.log(`Function: ${logPrefix} | Response: ${response}`);
    callback(null, JSON.stringify(response));
  }
};

module.exports = {
  getTasksByUser,
};
