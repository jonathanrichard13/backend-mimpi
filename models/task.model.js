const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema(
  {
    username: { type: String, required: true },
    taskname: { type: String, required: true },
    finished: { type: Boolean, default: false },
    type: { type: String, default: "daily" },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("task", taskSchema);

module.exports = Task;
