"use strict";
/* -------------------------------------------------------
           EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

// $ npm init -y
// npm i express dotenv express-async-errors
// echo PORT=8000 > .env
// npm i sequelize sqlite3
// nodemon

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Accept json data:
app.use(express.json());

// Catch async-errors:
require("express-async-errors");

/* ------------------------------------------------------- */
//* Routes

app.all("/", (req, res) => {
  res.send("WELCOME TO TODO API");
});

app.use(require("./routes/todo.router"));
/* ------------------------------------------------------- */
const errorHandler = (err, req, res, next) => {
  const errorStatusCode = res.errorStatusCode ?? 500;
  console.log("errorHandler worked.");
  res.status(errorStatusCode).send({
    error: true, // special data
    message: err.message, // error string message
    cause: err.cause, // error option cause
    // stack: err.stack, // error details
  });
};
app.use(errorHandler);
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
