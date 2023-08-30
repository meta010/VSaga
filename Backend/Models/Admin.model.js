const mongoose = require("mongoose");

const AdminSchema = mongoose.Schema({
  name: { type: String, required: false },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const AdminModel = mongoose.model("adminuser", AdminSchema);

module.exports = AdminModel;
