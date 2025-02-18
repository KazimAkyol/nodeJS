"use strict";

/* --------------------------------------------------------- *
                   EXPRESSJS - ROUTING
/* --------------------------------------------------------- */

// $ npm init -y
// $ npm i express dotenv
// $ .gitignore dosyasini gitignore.io'ya Node yazarak oradaki kodlari alip klasördeki .gitignore dosyasina yapistirilir.
// $ echo PORT=8000 > .env => yazarak klasöre otomatik olarak .env dosyasi olusturulur.

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT;

app.listen(PORT, () => console.log("Running at: http://127.0.0.1:" + PORT));
