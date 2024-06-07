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



 const generateToken = (Task) => {
  const passPhrase = process.env.JWT_SECRETE;
  return jwt.sign(Task, passPhrase, { expiresIn: '7d' });
};


module.exports ={ createTaskSchema,  generateToken, updateTaskSchema };
