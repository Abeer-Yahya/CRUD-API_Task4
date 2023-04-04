const mongoose = require("mongoose");

const loggerSchema = mongoose.Schema(
  {
    text: {
      type: String,
      required: [true, "Add a text"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Log", loggerSchema);
