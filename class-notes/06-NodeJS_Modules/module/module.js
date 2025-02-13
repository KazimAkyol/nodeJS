"use strict";

console.log("modul dosyasi calisti");

//! tek fonksiyonu disari aktarma
// const testFunc = function () {
//   console.log("this is a function");
// };

// module.exports = testFunc;

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

const testFunc1 = function () {
  console.log("testFunc1 running");
};
const testFunc2 = function () {
  console.log("testFunc2 running");
};

module.exports = [testFunc1, testFunc2];
