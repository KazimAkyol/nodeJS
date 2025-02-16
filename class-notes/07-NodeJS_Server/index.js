"use strict";

//! $ npm install dotenv

require("dotenv").config(); //? .env dosyasindaki verileri process.env icine yükler.

const PORT = process?.env.PORT || 8000;
const HOST = process?.env.HOST || "127.0.0.1";

const { error } = require("node:console");
const http = require("node:http"); //? http modülünü cagirir. Bu node.js'in icindedir.

const app = http.createServer((req, res) => {
  //? Piyasa standarti app olarak isimlendirilir.
  // console.log(req); //? gelen HTTP istegini tüm detaylariyla yazdirir.
  console.log("--------------------");
  //   if (req.url == "/") {
  //     res.end("<h1>welcome</h1>");
  //   } else if (req.url == "/blogs") {
  //     res.end("<h1>Listelenen Bloglar</h1");
  //   } else if (req.url == "/newBlog") {
  //     res.end("<h1>Yeni blog ekle</h1>");
  //   }

  //* --------------------------------------------------------------------------------------- //

  //   if (req.url == "/") {
  //     res.write("this");
  //     res.write("is");
  //     res.write("home");
  //     res.write("page");
  //     res.write("   ");
  //     res.write("welcome to clarusway");
  //   }
  //   res.end();

  if (req.url == "/") {
    if (req.method == "GET") {
      //* default zaten GET'tir.
      res.end("<h1> Welcome to HomePage </h1>");
    } else if (req.method == "POST") {
      //* eger methodumuz POST ise;
      res.statusCode = 400;
      res.statusMessage = "POST yapamazsin"; //* mesaj döndürür.
      res.end("can not POST methods"); //*tarayiciya mesaj gönderir.
    } else if (req.method == "DELETE") {
      res.writeHead(405, "silme yapamazsin", {
        "Content-Type": "text/html", //* Yanitin iceriginin htmö oldugunu belirtir.
        "another-header": "another content", //* özel bir header ekler.
        // "another-header1": "another content", //* özel bir header ekler.
        // "another-header2": "another content", //* özel bir header ekler.
      });
      res.end("can not this method");
    }
  } else if (req.url == "/list") {
    const obj = {
      error: false,
      message: "this is list page",
    };
    res.end(JSON.stringify(obj));
  } else if (req.url == "/test") {
    res.end("<h1> Test page </h1>");
  }
});

app.listen(PORT, () => console.log(`server running: http://${HOST}:${PORT}`)); // Belirtilen HOST ve POST üzerinden sunucuyu baslatir.
