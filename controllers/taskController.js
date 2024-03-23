const Task = require("../model/Task");

async function getAllTasks(req, res, next) {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const sortField = req.query.sortBy || "dueDate";
    const sortOrder = req.query.order === "desc" ? -1 : 1;
    const filter = {};
    if (req.query.completed) {
      filter.completed = req.query.completed === "true";
    }
    const skip = (page - 1) * limit;
    const tasks = await Task.find(filter)
      .skip(skip)
      .limit(limit)
      .sort({ [sortField]: sortOrder });
    res.json(tasks);
  } catch (error) {
    next(error);
  }
}

async function createTask(req, res, next) {
  try {
    const task = await Task.create(req.body);
    res.status(201).json(task);
  } catch (error) {
    next(error);
  }
}

async function getTaskById(req, res, next) {
  try {
    const task = await Task.findById(req.params.taskId);
    if (!task) {
      res.status(404).json({ message: "Task not found" });
      return;
    }
    res.json(task);
  } catch (error) {
    next(error);
  }
}

async function updateTask(req, res, next) {
  try {
    const task = await Task.findByIdAndUpdate(req.params.taskId, req.body, {
      new: true,
      runValidators: true,
    });
    if (!task) {
      res.status(404).json({ message: "Task not found" });
      return;
    }
    res.json(task);
  } catch (error) {
    next(error);
  }
}

async function deleteTask(req, res, next) {
  try {
    const task = await Task.findByIdAndDelete(req.params.taskId);
    if (!task) {
      res.status(404).json({ message: "Task not found" });
      return;
    }
    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getAllTasks,
  createTask,
  getTaskById,
  updateTask,
  deleteTask,
};
