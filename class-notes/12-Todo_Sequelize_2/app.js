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

//* Buradan itibaren kodlarimizi ve klasör yapisini MCR mantigiyla yazmaya basladik.

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
//* ErrorHandler:

app.use(require("./middlewares/errorHandler"));
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
