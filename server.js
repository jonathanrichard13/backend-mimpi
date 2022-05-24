const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const taskRouter = require('./routes/tasks');
const usersRouter = require('./routes/users');
const freelancerRouter = require('./routes/freelancers')
const targetSettingRouter = require('./routes/targetSettings')
const requestRouter = require('./routes/requests')
const goalRouter = require('./routes/goal')
const metricRouter = require('./routes/metric')
const keywordRouter = require('./routes/keyword')

app.use('/tasks', taskRouter);
app.use('/users', usersRouter);
app.use('/freelancer', freelancerRouter);
app.use('/target-setting', targetSettingRouter)
app.use('/requests', requestRouter);
app.use('/goal', goalRouter);
app.use('/metric', metricRouter);
app.use('/keyword', keywordRouter)

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
