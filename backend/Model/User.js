const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  userid: { type: String, required: false, min: 3, max: 25 },
  cardid: { type: String, required: false, min: 3, max: 25 },
  username: { type: String, required: false, min: 4, max: 25},
  site: { type: String, required: false, min: 4, max: 25},
  password: { type: String, required: false, min: 4, max: 20 },
  balance: { type: Number, required: false },
  date: { type: Date, default: Date.now },
  devices: { type:Array, required: false },
  operations: { type: Array, required: false },
});

module.exports = mongoose.model("users", UserSchema);