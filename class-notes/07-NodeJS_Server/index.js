"use strict";

//! $ npm install dotenv

require("dotenv").config(); //? .env dosyasindaki verileri process.env icine yükler.

const PORT = process?.env.PORT || 8000;
const HOST = process?.env.HOST || "127.0.0.1";

const http = require("node:http"); // http modülünü cagirir. Bu node.js'in icindedir.

const app = http.createServer((req, res) => {
  // Piyasa standarti app olarak isimlendirilir.
  console.log(req); // gelen HTTP istegini tüm detaylariyla yazdirir.
  console.log("--------------------");
  //   if (req.url == "/") {
  //     res.end("<h1>welcome</h1>");
  //   } else if (req.url == "/blogs") {
  //     res.end("<h1>Listelenen Bloglar</h1");
  //   } else if (req.url == "/newBlog") {
  //     res.end("<h1>Yeni blog ekle</h1>");
  //   }

  if (req.url == "/") {
    res.write("this");
    res.write("is");
    res.write("home");
    res.write("page");
    res.write("   ");
    res.write("welcome to clarusway");
  }
  res.end();
});

app.listen(PORT, () => console.log(`server running: http://${HOST}:${PORT}`)); // Belirtilen HOST ve POST üzerinden sunucuyu baslatir.
