"use strict";
const { error } = require("console");
/* -------------------------------------------------------
              EXPRESSJS - BUILTIN MIDDLEWARES
--------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
//? Data Receiving
//* Read & Parse json data
//* Front-end'ten gelen datayi parse yardimiyla objeye ceviriyoruz ve Body JSON'daki datayi tirnaklardan kurtarip app.use(express.json()) ile Response'a yazdiriyoruz. Gelen json veriyi hem okumayi hem de parse yapmayi saglar.
app.use(express.json());

//* Read text data
//* Thunder'da Body Text'ten Resonse'a text gönderebilmek icin asagidaki kod blogu kullanilir:
app.use(express.text());

//* Read form data
//* Thunder'da Body Form-encode'dan Response'a name-value gönderebilmek icin ve ayrica Terminal'de body-parser deprecated undefined extended hatasi almamak icin ({extended:true}) asagidaki kod blogu kullanilir:
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
//* url'i bizim Back-end tarafindaki folder structure'mizla eslesiyorsa ve eslesen veriyi cekmek istiyorsak bunlara Static Files denir. Genelde resim olarak gärülür.

// app.use("/images", express.static("./images"));
app.use("/public", express.static("./images"));

//* Browser'a localhost:8000/public/nodejs.png yazinca elimizdeki resim ekrana bastirilir.

/* ------------------------------------------------------- */

app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
