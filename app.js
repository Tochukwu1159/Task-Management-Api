const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const taskRouter = require('./src/routes/task');
const db = require('./src/config/database');


const app = express();
app.use(cors());
app.use(morgan("dev"));

app.use(express.json());

db.sync().then(() => {
  console.log('Database connected successfully')
}).catch(err => {
  console.log(err)
})

app.use('/tasks', taskRouter);

const PORT = process.env.PORT || 4400;
app.listen(PORT, () => {
  console.clear();
  console.log(`Server is running on port ${PORT}`);
  console.log(`http://localhost:${PORT}`);
});
