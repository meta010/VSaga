const express = require("express");
const AuthModel = require("../Models/Auth.Model");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const AuthRouter = express.Router();
const jwt = require("jsonwebtoken");
const AuthMiddleware = require("../Middlewares/Auth.middleware");
const AdminMiddleware = require("../Middlewares/Admin.middleware");



AuthRouter.post("/register", async (req, res) => {
  let { name, email, password } = req.body;
console.log(req.body)
  try {
    let existingUser = await AuthModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    } else {
      let newuser = new AuthModel({ name, email, password });
      bcrypt.hash(password, saltRounds, async function (err, hash) {
        if (err) {
          return res.status(500).json({ msg: "User Not registered" });
        } else {
          newuser.password = hash;
          await newuser.save();
          return res
            .status(201)
            .json({
              msg: "User created",
              data: newuser,
              token: jwt.sign({ data: newuser }, "authuser"),
            });
        }
      });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});


AuthRouter.post("/login", async (req, res) => {
  let { email, password } = req.body;

  try {
    let user = await AuthModel.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    } else {
      bcrypt.compare(password, user.password, async function (err, result) {
        if (result) {
          return res
            .status(201)
            .json({
              msg: "User loggedIn Successfully",
              data: user,
              token: jwt.sign({ data: user }, "authuser"),
            });
        } else {
          return res.status(500).json({ msg: "email or password incorrect"});
        }
      });
    }
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
});


AuthRouter.delete("/delete/:id",AdminMiddleware,async (req,res)=>{
  let id = req.params.id
  try {
      let deluser = await  AuthModel.findByIdAndDelete({_id:id})
      res.status(200).send({"msg":"User Deleted",data:deluser})
  } catch (error) {
      res.status(500).send({"msg":error.message})
      }

})


AuthRouter.get("/all",AdminMiddleware,async (req,res)=>{
 
  try {
      let alluser = await  AuthModel.find({})
      res.status(200).send({"msg":"All Users",data:alluser})
  } catch (error) {
      res.status(500).send({"msg":error.message})
      }

})


AuthRouter.patch('/update/address/:id', AuthMiddleware, async (req, res) => {

  let id = req.params.id
  try {
      let updateduser = await  AuthModel.findByIdAndUpdate({_id:id},{address:req.body.address})
      let user = await AuthModel.findOne({_id:id})
      res.status(200).send({"msg":"User Address Updated",data:user})
  } catch (error) {
      res.status(500).send({"msg":error.message})
      }


})





module.exports = AuthRouter;
