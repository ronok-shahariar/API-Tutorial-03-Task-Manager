const Task = require("../models/Tasks");

const getAllTasks = (req, res) => {
  res.send("get all tasks");
};
const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};
const getSingleTask = (req, res) => {
  res.json({ id: req.params.id });
};
const updateSingleTask = (req, res) => {
  res.send("update single task");
};
const deleteSingleTask = (req, res) => {
  res.send("delete single task");
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateSingleTask,
  deleteSingleTask,
};
