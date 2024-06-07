const Task = require("../models/Task");
const { createTaskSchema,updateTaskSchema } = require("../utils/TaskValidation");

class TaskService {
  async createTask(title, description, completed) {
    try {
      const validationResult = createTaskSchema.validate({
        title,
        description,
        completed
      });
      if (validationResult.error) {
        return {
          error: validationResult.error.details[0].message,
        };
      }
    let  task = await Task.create({ title, description, completed});
    
      return {
        message: "Task created successfully",
        task,
      };
    } catch (error) {
      return {
        error: "Internal server error",
      };
    }
  }

  async getTasks() {
    try {
      const tasks = await Task.findAll();
      return {
        message: "Successfully fetched all tasks",
        tasks,
      };
    } catch (error) {
      return {
        error: "failed to fetch all task",
        route: "/tasks",
      };
    }
  }

  async getTaskById(id) {
    try {
      const task = await Task.findByPk(id);
      if (!task) {
        throw new Error("Task not found");
      }
      return {
        message: "Successfully fetched single task",
        task,
      };
    } catch (error) {
      return {
        error: "failed to fetch single task",
        route: "/tasks/:id",
      };
    }
  }

  async updateTask(id, title, description, completed) {
    try {
      const validateUpdate = updateTaskSchema.validate({
        title, description, completed
      });
  
      if (validateUpdate.error) {
        return {
          error: validateUpdate.error.details[0].message,
        };
      }
  
      const task = await Task.findByPk(id);
      if (!task) {
        return {
          error: "Task not found",
        };
      }
      const updateTaskRecord = await task.update({ title, description, completed});
      return {
        message: "Update Successful",
        record: updateTaskRecord,
      };
    } catch (error) {
      return {
        error: "Failed to update record",
        route: "/tasks/:id",
      };
    }
  }
  async deleteTask(id) {
    try {
      const task = await Task.findByPk(id);
      if (!task) {
        throw new Error("Task not found");
      }
      await task.destroy();
      return task;
    } catch (error) {
      throw new Error("Failed to delete task");
    }
  }

}

module.exports = new TaskService();