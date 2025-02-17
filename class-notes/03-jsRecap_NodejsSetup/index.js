"use strict";
// $ node
// console.log("terminal");

// npm install --global nodemon
// nodemon --version

console.log("Nodemon ile js calistiriyoruz");

let num1 = 5;
console.log(typeof num1);
let num2 = 14;
let toplam = num1 + num2;
console.log(toplam);
console.log(`${num1 + num2}`);

console.log("for döngüsü");

for (let i = 1; i < 5; i++) {
  console.log(`Sayi: ${i}`);
}

function carpma(a, b) {
  return a * b;
}
console.log(`${carpma(2, 10)}`);
console.log(typeof `${carpma(2, 10)}`);

const result = carpma(2, 8);
console.log(result);
console.log(typeof result);
