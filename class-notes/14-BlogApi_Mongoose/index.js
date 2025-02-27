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

app.use(express.json());

require("express-async-errors");

app.all("/", (req, res) => {
  res.send("WELCOME TO BLOG API");
});

// continue from here...

// Catch Errors:
app.use(require("./src/errorHandler"));

/* ------------------------------------------------------- */

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
