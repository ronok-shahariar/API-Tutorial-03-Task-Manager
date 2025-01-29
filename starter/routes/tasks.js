const express = require("express");
const {
  getAllTasks,
  createTask,
  getSingleTask,
  updateSingleTask,
  deleteSingleTask,
} = require("../controllers/tasks");

const router = express.Router();

router.route("/").get(getAllTasks).post(createTask);
router
  .route("/:id")
  .get(getSingleTask)
  .patch(updateSingleTask)
  .delete(deleteSingleTask);

module.exports = router;
