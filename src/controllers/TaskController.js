const TaskService = require("../services/TaskService");

class TaskController {
  async createTask(req, res) {
    const { title, description, completed } = req.body;
    const task = await TaskService.createTask(title, description, completed );
    return res.json(task);
  }

  async getTasks(req, res) {
    const tasks = await TaskService.getTasks();
    res.json(tasks);
  }


  async getTaskById(req, res) {
    const { id } = req.params;
    const task = await TaskService.getTaskById(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(task);
  }

  async updateTask(req, res) {
    const { id } = req.params;
    const {title, description, completed } = req.body;
    const task = await TaskService.updateTask(id,title, description, completed );
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json(task);
  }

  async deleteTask(req, res) {
    const { id } = req.params;
    const task = await TaskService.deleteTask(id);
    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }
    res.json({ message: "Task deleted successfully" });
  }
}

module.exports = TaskController;
