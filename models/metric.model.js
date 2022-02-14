const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const metricSchema = new Schema(
  {
    targetId: {type: String, required: true },
    goalId: { type: String, required: true },
    // metricId: { type: String, required: true },
    metricName: {type: String, required: true },
    isFinished: {type: Boolean, required: true, default: false},
    deadline: {type: Date, required: false},
    comment: {type: String},
    pic: {type: String},
    rate: {type: Number}
  },
  {
    timestamps: true,
  }
);

const metric = mongoose.model("Metric", metricSchema);

module.exports = metric;