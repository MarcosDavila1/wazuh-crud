const usersData = require("../assets/users.json");
const tasksData = require("../assets/tasks.json");

const getAllUsers = () => {
  const logPrefix = "getAllUsers";

  try {
    const result = usersData;
    console.log(`Service: ${logPrefix} | Result: ${result.length}`);
    return result;
  } catch (error) {
    console.log(`Service: ${logPrefix} | Error: ${error}`);
  }
};

const getSingleUser = (id) => {
  const logPrefix = "getSingleUser";

  try {
    const result = usersData.find((user) => user.id === id);
    console.log(`Service: ${logPrefix} | Result: ${result.length}`);
    return result;
  } catch (error) {
    console.log(`Service: ${logPrefix} | Error: ${error}`);
  }
};

const getTasksByUser = (id, completed = null, title = null) => {
  const logPrefix = "getTasksByUser";

  try {
    if (completed && title) {
      const result = tasksData.filter(
        (task) =>
          task.user_id === id &&
          task.completed === completed &&
          task.title.includes(title)
      );
      console.log(`Service: ${logPrefix} | Result: ${result}`);
      return result;
    } else if (completed) {
      const result = tasksData.filter(
        (task) => task.user_id === id && task.completed === completed
      );
      console.log(`Service: ${logPrefix} | Result: ${result}`);
      return result;
    } else if (title) {
      const result = tasksData.filter(
        (task) => task.user_id === id && task.title.includes(title)
      );
      console.log(`Service: ${logPrefix} | Result: ${result}`);
      return result;
    } else {
      const result = tasksData.filter((task) => task.user_id === id);
      console.log(`Service: ${logPrefix} | Result: ${result}`);
      return result;
    }
  } catch (error) {
    console.log(`Service: ${logPrefix} | Error: ${error}`);
  }
};

module.exports = {
  getAllUsers,
  getSingleUser,
  getTasksByUser,
};
