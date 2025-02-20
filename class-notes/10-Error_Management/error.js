"use strict";
/* -------------------------------------------------------
                EXPRESSJS - ERROR MANAGEMENT
------------------------------------------------------- */

// $ npm init -y
// npm install express dotenv
// echo PORT=8000 > .env
// cat > .gitignore && paste gitignore content & ctrl+c
// nodemon

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
//? throw

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  if (isNaN(id)) {
    throw new Error('ID is not a number');
  } else {
    res.send({
      error: false,
      id,
    });
  }
});

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
