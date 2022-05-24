const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const keywordSchema = new Schema(
  {
    keyword: { type: String, required: true },
    suggestion1: {type: String, required: true },
    suggestion2: {type: String },
    suggestion3: {type: String },
  }
);

const keyword = mongoose.model("Keyword", keywordSchema);

module.exports = keyword;