const express = require('express');
const TaskController = require('../controllers/TaskController');
const loggerMiddleware = require("../middleWare/loggerMiddleware");
const taskController = new TaskController();

const router = express.Router();


router.use(loggerMiddleware); // Apply the middleware to all routes

router.post("/", taskController.createTask);
router.get("/", taskController.getTasks);
router.get("/:id", taskController.getTaskById);
router.put("/:id", taskController.updateTask);
router.delete("/:id", taskController.deleteTask);

module.exports = router;
