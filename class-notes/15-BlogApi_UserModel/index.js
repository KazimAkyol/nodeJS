"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

// $ npm init -y => create package.json
// $ npm i express dotenv express-async-errors mongoose
// $ echo PORT=8000 > .env
// cat > .gitignore && paste gitignore content & ctrl+c
// $ nodemon

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */

// Parse data
app.use(express.json());

// Catch error from async
require("express-async-errors");

// DB Connection
// const dbConnection = require('./src/dbConnection');
// dbConnection()
require("./src/dbConnection")();

/* ------------------------------------------------------- */
//* Routes

// Main route
app.all("/", (req, res) => {
  res.send("WELCOME TO BLOG API");
});

// blog & user routes
app.use("/blog", require("./src/routes/blogRouter"));
app.use("/user", require("./src/routes/userRouter"));

// Error Handler:
app.use(require("./src/middlewares/errorHandler"));

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
