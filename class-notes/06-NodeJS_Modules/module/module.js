"use strict";

console.log("modul dosyasi calisti");

const testFunc = function () {
  console.log("this is a function");
};

//? Bu fonksiyonu disari aktarmak istiyorum:
module.exports = testFunc;
