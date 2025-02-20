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

/* ------------------------------------------------------- *
//* throw
//* 1- json veri göndermemiz lazim
//* 2- her hatada bizim bildigimiz formatta gönderilmeli

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  if (isNaN(id)) {
    throw new Error("ID is not a number");
  } else {
    res.send({
      error: false,
      id,
    });
  }
});

/* ------------------------------------------------------- */
//* try-catch


app.get("/user/:id", (req, res) => {
  const id = req.params.id;

  try {
    if (isNaN(id)) {
      throw new Error("ID is not a number");
    } else {
      res.send({
        error: false,
        id,
      });
    }
  } catch (error) {
    console.log(error);
    res.send({
      error: true,
      message: error.message,
    });
  }
});

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
