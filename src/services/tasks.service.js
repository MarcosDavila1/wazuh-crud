const tasksData = require("../assets/tasks.json");

const getTasks = (completed = null, title = null) => {
  const logPrefix = "getTasks";

  try {
    if (completed && title) {
      const result = tasksData.filter(
        (task) => task.completed === completed && task.title.includes(title)
      );
      console.log(`Service: ${logPrefix} | Result: ${result}`);
      return result;
    } else if (completed) {
      const result = tasksData.filter((task) => task.completed === completed);
      console.log(`Service: ${logPrefix} | Result: ${result}`);
      return result;
    } else if (title) {
      const result = tasksData.filter((task) => task.title.includes(title));
      console.log(`Service: ${logPrefix} | Result: ${result}`);
      return result;
    } else {
      console.log(`Service: ${logPrefix} | Result: ${tasksData}`);
      return tasksData;
    }
  } catch (error) {
    console.log(`Service: ${logPrefix} | Error: ${error}`);
  }
};

const getSingleTask = (id) => {
  const logPrefix = "getSingleTask";

  try {
    const result = tasksData.find((task) => task.id === id);
    console.log(`Service: ${logPrefix} | Result: ${result}`);
    return result;
  } catch (error) {
    console.log(`Service: ${logPrefix} | Error: ${error}`);
  }
};

module.exports = {
  getTasks,
  getSingleTask,
};
