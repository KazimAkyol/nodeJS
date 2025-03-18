"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

// Logger
// $ npm i morgan
// $ https://expressjs.com/en/resources/middleware/morgan.html

const morgan = require("morgan");

// app.use(morgan("tiny"));
// app.use(morgan("short"));
// app.use(morgan("dev"));
// app.use(morgan("common"));
// app.use(morgan("combined")); //* Thunder'da departments URL'e bir GET istegi atildiginda Terminal'de ::ffff:127.0.0.1 - - [17/Mar/2025:15:20:39 +0000] "GET /departments/ HTTP/1.1" 403 102 "-" "Thunder Client (https://www.thunderclient.com)" böyle bir sonuca ulasilir.
//* Biz combined'i kullanacagiz.

// Custom log:
const customLog =
  'TIME=":date[iso]" - URL= ":url" - Method=":method" - IP=":remote-addr" - Ref="referrer" - Status=":status" - Sign=":user-agent" (:response-time[digits]ms)';
// app.use(morgan(customLog));

// Write to file
// const fs = require("node:fs");
// app.use(
//   morgan(customLog, {
//     stream: fs.createWriteStream("./examplelogs.log", { flags: "a+" }), //* Bir dosyayi yazdirmak icin stream degiskeni kullanilir.
//   })
// );

//* Böylelikle bizim yaptigimiz API service'na her bir istek atildiginda log kaydini tutmus olacagiz.

// Write to file - Day by Day;
const fs = require("node:fs");
const now = new Date();
// console.log(now);
const today = now.toISOString().split("T")[0];
console.log(today);

module.exports = morgan(customLog, {
  stream: fs.createWriteStream(`./logs/${today}.log`, { flags: "a+" }),
});

//* Bu kod blogunu yazdiktan sonra dosya ana dizininde logs adinda bir klasör olusturulur ve bundan sonra gün gün tutulacak log kayitlari buraya kaydedilir.
