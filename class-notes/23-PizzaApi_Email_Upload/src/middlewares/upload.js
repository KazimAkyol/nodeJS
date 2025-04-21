"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */

//* UPLOAD (Multer Middleware)
// npm i multer
// https://expressjs.com/en/resources/middleware/multer.html

const multer = require("multer");

module.exports = multer({
  //   dest: "./uploads", //* destination of images
  storage: multer.diskStorage({
    destination: "./uploads", // indicate destination
    filename: function (req, file, cb) {
      // Renames file
      console.log("file:", file);
      //   cb(error, this.filename)
      //   cb(null, file.originalname);
      cb(null, Date.now() + "_" + file.originalname);
    },
  }),
});

//* Bu kod blogunu yazip Postman kullanarak /pizzas URL'inde POST Send yapip, cb(callBack) function'i yazarak pizza.png isimli image'i Desktop'tan projemizdeki uploads dosyasina yükler. Ya da ilgili resmin yüklendigi now'i yakalayabilmek icin 21.satirdaki kod blogu yazilir. Potsman'da Key-Value kisminda Key: image Value: File: yazarak birden fazla dosyayi(resmi) da projemize yükleyebiliriz.
