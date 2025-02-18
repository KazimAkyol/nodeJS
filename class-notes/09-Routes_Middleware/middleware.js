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
app.get("/", (req, res) => {
  console.log("Route started");

  next();
});

// Route-Path:
app.get("/", (req, res, next) => {
  console.log("Middleware started");

  res.send({ message: "Hello Cohort DE-10" });
});
/* --------------------------------------------------------- */
// Middleware:
app.get("/", (req, res, next) => {
  if ((req.query.username = "clarusway")) {
    next();
  } else {
    res.send({
      message: "username is wrong",
    });
  }
});

app.get("/", (req, res) => {
  res.send({ message: "Hello Clarusway" });
});

app.listen(PORT, () => console.log("Running at: http://127.0.0.1:" + PORT));
