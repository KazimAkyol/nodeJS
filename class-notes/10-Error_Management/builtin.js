"use strict";
const { error } = require("console");
/* -------------------------------------------------------
           EXPRESSJS - BUILTIN MIDDLEWARES
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */

//? Data receiving
//* Read & Parse json data
//* Frontend'ten gelen datayi parse yardimiyla objeye ceviriyoruz ve Body JSON'daki datayi tirnaklardan kurtarip app.use(express.json()) ile Response'a yazdiriyoruz. Gelen json veriyi hem okumaya hem de parse yapmayi sagliyor.
app.use(express.json());


//* Read text data
app.use(express.text());

//* Read form data
app.use(express.urlencoded({ extended: true }));

app.all("/:id", (req, res) => {
  res.send({
    error: false,
    params: req.params,
    query: req.query,
    headers: req.headers,
    body: req.body,
  });
});

//* req Body denildiginde Frontend'in bize gönderdigi bir data oldugunu anlayacagiz.

/* ------------------------------------------------------- */

//* Static Files

// app.use("/images", express.static("/.images"));
app.use("/public", express.static("./images"));

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
