"use strict";

/* ------------------------------------------------------------- *
                    Express & Routing
/* ------------------------------------------------------------- */
//* npm init -y => create package.json
//* npm i express dotenv

/* Express Start */

const express = require("express"); // Express değişkenine express Framework atadik.

const app = express(); // Run application on express.
//? Env
require("dotenv").config();
const PORT = process.env.PORT;

//? HTTP_METHODS & URLS:
// app.get("/", (req, res) => res.end("called in 'get' method."));
// app.post("/", (req, res) => res.end("called in 'post' method."));
// app.put("/", (req, res) => res.end("called in 'put' method."));
// app.patch("/", (req, res) => res.end("called in 'patch' method."));
// app.delete("/", (req, res) => res.end("called in 'delete' method."));

//* Tüm methodlara izin ver;
// app.all("/", (req, res) => res.end("called in 'all' method."));

//* app.route('url)
// app
//   .route("/")
//   .get((req, res) => res.send("get"))
//   .post((req, res) => res.send("post"))
//   .put((req, res) => res.send("put"))
//   .delete((req, res) => res.send("delete"));

/* ------------------------------------------------------------------------ *
//? URL(Path) Options:

app.get("/", (req, res) => res.send("in 'root' path")); // == root
app.get("/path", (req, res) => res.send("in path")); // path == '/path/'

//* express-urls supported JokerChar:
app.get("/abc(x?)123", (req, res) => res.send("in abc(x?)123")); // abc123 or abcx123
app.get("/abc(x+)123", (req, res) => res.send("in abc(x+)123")); // abc123 or abc....xxx123
app.get("/abc*123", (req, res) => res.send("in abc*123")); // abc123 or abc(ANY)123

//* express-urls supported regexp:
// app.get(/xyz/, (req, res) => res.send("regexp /xyz/")); // url contains ='xyz'
// app.get(/^\/xyz/, (req, res) => res.send("regexp /^xyz/")); // url starts with ='xyz'
app.get(/xyz$/, (req, res) => res.send("regexp /xyz$/")); // url ends with ='xyz'

/* ------------------------------------------------------------------------ */
//? URL Parameters:
app.get('/blogs', (req,res)=> {
    console.log(req)

    res.send('thia is blogs route')
})



/* ------------------------------------------------------------------------ */
app.listen(PORT, () => console.log("Running at: http://127.0.0.1:" + PORT));
/* ------------------------------------------------------------- */
/* ------------------------------------------------------------- */
/* ------------------------------------------------------------- */
/* ------------------------------------------------------------- */
/* ------------------------------------------------------------- */
/* ------------------------------------------------------------- */
