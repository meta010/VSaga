const express = require("express");
const AuthModel = require("../Models/Auth.Model");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const AdminRouter = express.Router();
const jwt = require("jsonwebtoken");
const AdminModel = require("../Models/Admin.model");
require("dotenv").config()

AdminRouter.post("/register", async (req, res) => {
  let { name, email, password, adminID, adminPass } = req.body;
  console.log("user",req.body)
  if (adminID == process.env.adminemail && adminPass == process.env.adminpass) {
    try {
      let existingUser = await AdminModel.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ error: "User already exists" });
      } else {
        let newuser = new AdminModel({ name, email, password });
        bcrypt.hash(password, saltRounds, async function (err, hash) {
          if (err) {
            return res.status(500).json({ msg: "Internal server error" });
          } else {
            newuser.password = hash;
            await newuser.save();
            return res.status(201).json({
              msg: "User created",
              data: newuser,
              token: jwt.sign({ data: newuser }, "adminuser"),
            });
          }
        });
      }
    } catch (error) {
      res.status(500).json({ msg: error.message });
    }
  } else {
    res.status(500).json({ msg: "User Not Authenticated" });
  }
});

AdminRouter.post("/login", async (req, res) => {
  let { email, password } = req.body;
  try {
    let user = await AdminModel.findOne({ email });
console.log("user",user)
    if (!user) {
      return res.status(400).send({ message: "User not found" });
    }
    bcrypt.compare(password, user.password, async function (err, result) {
      if (result) {
        return res.status(201).json({
          msg: "User loggedIn Successfully",
          data: user,
          token: jwt.sign({ data: user }, "adminuser"),
        });
      } else {
        return res.status(500).json({ msg: err.message });
      }
    });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});

module.exports = AdminRouter;
