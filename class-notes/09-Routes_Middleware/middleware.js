"use strict";

/* --------------------------------------------------------- *
                   EXPRESSJS - MIDDLEWARES
/* --------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;
/* --------------------------------------------------------- *
//? Middleware functions must has three parameters.
//? Last parameter is for next()

// Middleware:
app.get("/", (req, res, next) => {
  console.log("Middleware started");

  next();
});

// Route-Path:
app.get("/", (req, res) => {
  console.log("Route started");

  res.send({ message: "Hello Cohort DE-10" });
});
/* --------------------------------------------------------- *
// Middleware:
app.get("/", (req, res, next) => {
  if (req.query.username == "clarusway") {
    next();
  } else {
    res.send({
      message: "username is wrong",
    });
  }
});

// Route
app.get("/", (req, res) => {
  res.send({ message: "Hello Clarusway" });
});
/* --------------------------------------------------------- *
// Sending data from middleware to others routes.
app.get("/", (req, res, next) => {
  if (req.query.username == "clarusway") {
    req.username = "hagi";
    console.log(req);
    next();
  } else {
    res.send({
      message: "username is wrong",
    });
  }
});

// Route
app.get("/", (req, res) => {
  console.log(req.username);
  res.send({ message: "Hello" });
});
/* --------------------------------------------------------- */

app.get("/", (req, res, next) => {
  req.message1 = "middleware-1 started.";
  next();
});
app.get("/", (req, res, next) => {
  req.message2 = "middleware-2 started.";
  next();
});
app.get("/", (req, res, next) => {
  req.message3 = "middleware-3 started.";
  next();
});
app.get("/", (req, res, next) => {
  req.message4 = "middleware-4 started.";
  next();
});

app.get("/", (req, res) => {
  res.send({
    message1: req.message1,
    message2: req.message2,
    message3: req.message3,
    message4: req.message4,
  });
});

app.listen(PORT, () => console.log("Running at: http://127.0.0.1:" + PORT));
