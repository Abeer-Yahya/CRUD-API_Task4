const mongoose = require("mongoose");

const loggerSchema = mongoose.Schema({
  text: {
    type: String,
    required: [true, "Add a text"],
  },
});

module.exports = mongoose.model("Log", loggerSchema);
