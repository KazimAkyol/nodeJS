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

/* ------------------------------------------------------- */
//* throw
//* 1- json veri göndermemiz lazim
//* 2- her hatada bizim bildigimiz formatta gönderilmeli

app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  if (isNaN(id)) {
    res.errorStatusCode = 400;
    throw new Error("ID is not a number");
  } else {
    res.send({
      error: false,
      id,
    });
  }
});

/* ------------------------------------------------------- *
//* try-catch

app.get("/user/:id", (req, res, next) => {
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
    // console.log(error);
    // res.send({
    //   error: true,
    //   message: error.message,
    // });
    //* to send this error to erro handler middleware
    next(err); // if you send error in the next method, it goes directly to the error handler middleware function.
  }
});

//* middleware fonksiyonunun calismasi icin try-catch blogunda next(err) yazarak error handler'a yönlendirme yapilarak(middleware fonksiyonunun calisma sistemi) Terminal'de console'a yazilan yazi görülür. Burada 'error handler worked' yazdirildi.
/* ------------------------------------------------------- */

//* Error Handler Middleware
//* throw atilarak, try-catch blogu olmadan da calisir. Bu Error Handler'in gücünü gösterir.
//* Error Handler'dan habersiz hicbir hata attirilamaz.

//* Hatanin kimden kaynaklandigini statusCode olarak ifade edebilmek icin; örnegin id number olmasi gerekirken baska bir veri girildiginde 400(Bad Request), res degiskeninin yazilmasi unutuldugunda 500(Internal Server Error); bir statusCode tanimlanir ve url girilen veriye göre hata türü elde edilir.

const errorHandler = (err, req, res, next) => {
  console.log("error handler worked");
  const statusCode = res.errorStatusCode ?? 500;
  res.status(statusCode).send({
    error: true,
    message: err.message,
  });
};

app.use(errorHandler);

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
