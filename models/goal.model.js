const mongoose = require("mongoose");
mongoose.set('useFindAndModify', false);

const Schema = mongoose.Schema;

const goalSchema = new Schema(
  {
    targetId: { type: String, required: true },
    // goalId: { type: String, required: true },
    goalName: {type: String, required: true },
    pic: {type: String},
    comment: {type: String, required: false},
    rate: {Type: Number, required: false},
    deadline: {type: Date, required: false},
    isFinished: {type: Boolean, required: true, default: false},
  },
  {
    timestamps: true,
  }
);

const goal = mongoose.model("Goal", goalSchema);

module.exports = goal;
