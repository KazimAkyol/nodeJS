"use strict";

/* --------------------------------------------------------- *
                   EXPRESSJS - MIDDLEWARES
/* --------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

app.get("/", (req, res) => {
  res.send({ message: "Hello Cohort DE-10" });
});

app.listen(PORT, () => console.log("Running at: http://127.0.0.1:" + PORT));
