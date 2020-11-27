const express = require("express");
const loginRouter = express.Router();
const User = require("../models/user.js");

loginRouter.post("/", function (request, response) {
  
  User.create({
    email: request.body.email,
    password: request.body.password,
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => console.log(err));

  if (!request.body) return response.sendStatus(400);

  User.findOne({ where: { email: request.body.email, password: request.body.password} })
    .then((user) => {
      if (!user) return response.send("false");
      return response.send("true");
    })
    .catch((err) => console.log(err));
  // if (
  //   request.body.email === "victoria.sevryuk@gmail.com" &&
  //   request.body.password === "11235813"
  // )
  //   return response.send("true");
  // else return response.send("false");
});

module.exports = loginRouter;
