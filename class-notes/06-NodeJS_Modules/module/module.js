"use strict";

console.log("modul dosyasi calisti");

//! tek fonksiyonu disari aktarma
// const testFunc = function () {
//   console.log("this is a function");
// };

// module.exports = testFunc;

/* ------------------------------------------------- */

//! birden fazla deger ve fonksiyon gönderme

// const yil = 2025;

// const testFunc1 = function () {
//   console.log("testFunc1 running");
// };
// const testFunc2 = function () {
//   console.log("testFunc2 running");
// };
// module.exports = {
//   //! obje icinde isim degistirme
//   test1: testFunc1,
//   test2: testFunc2,
// };

/* ------------------------------------------------- */

//! tek fonksiyon icinden cagirma:

// const singleFunc = function () {
//   const yil = 2025;
//   console.log(yil);

//   const testFunc1 = function () {
//     console.log("testFunc1 running");
//   };

//   const testFunc2 = function () {
//     console.log("testFunc2 running");
//   };

//   return { testFunc1, testFunc2 };
// };

// module.exports = singleFunc;
/* ------------------------------------------------- *

//! array olarak disari aktarma

const testFunc1 = function () {
  console.log("testFunc1 running");
};
const testFunc2 = function () {
  console.log("testFunc2 running");
};

module.exports = [testFunc1, testFunc2];

/* ------------------------------------------------- */

//! direkt export:
// module.exports.testFunc1 = function () {
//   console.log("testFunc1 running");
// };

// module.exports.testFunc2 = function () {
//   console.log("testFunc2 running");
// };

/* ------------------------------------------------- */

//* Bizim kullanacagimiz yöntem (piyasa standarti):

module.exports = {
  test1: function () {
    console.log("test1 running");
  },
  test2: function () {
    console.log("test2 running");
  },
  test3: function () {
    console.log("test3 running");
  },
  variable: "new value",
};
