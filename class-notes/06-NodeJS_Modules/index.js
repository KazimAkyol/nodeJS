"use strict";

// $ npm init -y
// $ npm install //* package-lock.json olusturur.
// $ nodemon //* nodemon index.js'de calistirir ve izler.

console.log("indexjs");

//? baska bir js dosyasini iceri aktarma:

require("./module/module.js");
// require("./module/module");

//! tek fonksiyonu import etme
// const testFunc = require("./module/module.js");
// testFunc();

//! ismi degistirilmis fonksiyonlari yeni isimleriyle destructuring ettik:
// const { test1:func1, test2 } = require("./module/module.js");
// func1();
// test2();

/* ------------------------------------------------- */

// const singleFunc = require("./module/module.js");
// singleFunc();
// const { testFunc1, testFunc2 } = singleFunc();
// testFunc1();
// testFunc2();

/* ------------------------------------------------- *

//* array olarak karsilama
const [testFunc1, testFunc2] = require("./module/module.js");
testFunc1();

/* ------------------------------------------------- */

//* direkt export sonrasi karsilama
// testFunc1();
// testFunc2();

/* ------------------------------------------------- */

//* Bizim kullanacagimiz import yöntemi:

const {
  test1: func1,
  test2,
  test3,
  variable: deger,
} = require("./module/module.js");
func1();
test2();
test3();
console.log(deger);
