const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  deviceid: { type: String, required: false, min: 3, max: 25 },
  location: { type: String, required: false, min: 3, max: 25 },
  site: { type: String, required: false, min: 6, max: 255 },
  type: { type: String, required: false, min: 6, max: 25},
  date: { type: Date, default: Date.now },
  allowedsites: { type:Array, required: false },
  operations: { type: Array, required: false },
});

module.exports = mongoose.model("Device", UserSchema);