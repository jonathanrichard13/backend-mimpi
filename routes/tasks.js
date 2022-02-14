const router = require("express").Router();
let Task = require("../models/task.model");

router.route("/").get((req, res) => {
  Task.find()
    .then((tasks) => res.json(tasks))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const taskname = req.body.taskname;
  const finished = Boolean(req.body.finished);
  const type = req.body.type;

  const newTask = new Task({ username, taskname, finished, type });

  newTask
    .save()
    .then(() => res.json("Task added"))
    .catch((err) => res.status(400).json("Error " + err));
});

module.exports = router;
