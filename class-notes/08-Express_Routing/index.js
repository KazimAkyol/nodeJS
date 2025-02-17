"use strict";

/* ------------------------------------------------------------- *
                    Express & Routing
/* ------------------------------------------------------------- */
//* npm init -y => create package.json
//* npm i express dotenv

/* Express Start */

const express = require("express"); // Express değişkenine express Framework atadik.

const app = express(); // Run application on express.
/* ------------------------------------------------------------- */
//* Env
require("dotenv").config();
const PORT = process.env.PORT;

// if(req.url == "/") { //*Routing with NodeJs

// }

//* HTTP_METHODS & URLS:
app.get("/", (req, res) => res.end("called in 'get' method."));
app.post("/", (req, res) => res.end("called in 'post' method."));
app.put("/", (req, res) => res.end("called in 'put' method."));
app.patch("/", (req, res) => res.end("called in 'patch' method."));
app.delete("/", (req, res) => res.end("called in 'delete' method."));

/* ------------------------------------------------------------- */

app.listen(PORT, () => console.log("Running at: http://127.0.0.1:" + PORT));
/* ------------------------------------------------------------- */
/* ------------------------------------------------------------- */
/* ------------------------------------------------------------- */
/* ------------------------------------------------------------- */
/* ------------------------------------------------------------- */
/* ------------------------------------------------------------- */
