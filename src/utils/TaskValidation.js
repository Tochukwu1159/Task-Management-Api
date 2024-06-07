const Joi = require('joi');

const createTaskSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().lowercase(),
  completed: Joi.boolean()
})
const updateTaskSchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().lowercase(),
  completed: Joi.boolean()
});



module.exports ={ createTaskSchema, updateTaskSchema };
