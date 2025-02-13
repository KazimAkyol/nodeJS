"use strict";

console.log("indexjs");

//? baska bir js dosyasini iceri aktarma

require("./module/module.js");
// require("./module/module");

//! tek fonksiyonu import etme
// const testFunc = require("./module/module.js");
// testFunc();

// const { testFunc1, testFunc2 } = require("./module/module.js");
// testFunc1();
// testFunc2();
// console.log(testFunc1);

// const singleFunc = require("./module/module.js");
// singleFunc();

// const { testFunc1, testFunc2 } = singleFunc();
// testFunc1();
// testFunc2();

//! Array olarak karsilama
const [testFunc1, testFunc2] = require("./module/module.js");
testFunc1();
testFunc2();
