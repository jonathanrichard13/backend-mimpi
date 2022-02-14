const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const targetSchema = new Schema(
  {
    // targetId: { type: String, required: true },
    username: { type: String, required: true },
    target: {type: String, required: true },
    isFinished: {type: Boolean, required: true, default: false},
    deadline: {type: Date, required: false},
    comment: {type: String},
    detail: {type: String}
  },
  {
    timestamps: true,
  }
);

const target = mongoose.model("Target Setting", targetSchema);

module.exports = target;
