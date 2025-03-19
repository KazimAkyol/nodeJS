"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const router = require("express").Router();
const pizza = require("../controllers/pizza");
/* ------------------------------------------------------- */
// UPLOAD (Multer Middleware)
// npm i multer

const multer = require("multer");

const upload = multer({
  //   dest: "./uploads", //* destination of images
  storage: multer.diskStorage({
    destination: "./uploads",
    filename: function (req, file, cb) {
      console.log("file:", file);
      //   cb(error, this.filename)
      //   cb(null, file.originalname);
      cb(null, Date.now() + "_" + file.originalname);
    },
  }),
}); //* Bu kod blogunu yazip Postman kullanarak /pizzas URL'inde POST Send yapip, cb(callBack) function'i yazarak pizza.png isimli image'i Desktop'tan projemizdeki uploads dosyasina yükler. Ya da ilgili resmin yüklendigi now'i yakalayabilmek icin 21.satirdaki kod blogu yazilir.

/* ------------------------------------------------------- */
// URL: /tokens

router.route("/").get(pizza.list).post(upload.single("image"), pizza.create);

router
  .route("/:id")
  .get(pizza.read)
  .put(pizza.update)
  .patch(pizza.update)
  .delete(pizza.delete);

/* ------------------------------------------------------- */
module.exports = router;
