const mongoose = require("mongoose");

const AuthSchema = mongoose.Schema({
  name: { type: String, required: false },
  email: { type: String, required: true },
  password: { type: String, required: true },
  address: { type: String, required: false },
});

const AuthModel = mongoose.model("users", AuthSchema);

module.exports = AuthModel;
