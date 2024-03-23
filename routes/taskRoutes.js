const express = require("express");
const router = express.Router();
const taskController = require("../controllers/taskController");
const authMiddleware = require("../middlewares/authMiddleware");

router.use(authMiddleware);

router.get("/", taskController.getAllTasks);
router.post("/", taskController.createTask);
router.get("/:taskId", taskController.getTaskById);
router.put("/:taskId", taskController.updateTask);
router.delete("/:taskId", taskController.deleteTask);

module.exports = router;
