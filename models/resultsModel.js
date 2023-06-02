const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema(
  {
    createdBy: {
      type: String,
      required: [true, "Please provide the 'createdBy' field."],
    },
    examination: {
      type: String,
      required: [true, "Please provide the 'examination' field."],
    },
    date: {
      type: String,
      required: [true, "Please provide the 'date' field."],
    },
    subjects: {
      type: Array,
      required: [true, "Please provide the 'subjects' field."],
    },
    class: {
      type: String,
      required: [true, "Please provide the 'class' field."],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("results", resultSchema);
