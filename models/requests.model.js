const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const targetSchema = new Schema(
  {
    username: { type: String, required: true },
    targetUsername: {type: String, required: true },
    status: {type: String, required: true, default: "pending"}
  },
  {
    timestamps: true,
  }
);

const target = mongoose.model("Request", targetSchema);

module.exports = target;
