"use strict";

//! $ npm install dotenv

require("dotenv").config(); //? .env dosyasindaki verileri process.env icine yükler.

const PORT = process.env.PORT || 8000;
const HOST = process.env.HOST || "127.0.0.1";

const http = require("node:http"); // http modülünü cagirir. Bu node.js'in icindedir.

const app = http.createServer((req, res) => {
  //? Piyasa standarti app olarak isimlendirilir.
  console.log(req); // gelen HTTP istegini tüm detaylariyla yazdirir.
  console.log("--------------------");
});

app.listen(PORT, () => console.log(`server running: http://${HOST}:${PORT}`)); // Belirtilen HOST ve POST üzerinden sunucuyu baslatir.
