"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

/* 
 * npm init -y
 * npm i express dotenv express-async-errors
 * echo PORT=8000 > .env
 * npm i sequelize sqlite3
*/

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Accept json data:
app.use(express.json());
// Accept form data and conver to object;
app.use(express.urlencoded({ extended: true }));
// Catch async-errors:
require('express-async-errors');

/* ------------------------------------------------------- */
// Templates:
// $ npm i ejs
// https://ejs.co/

app.set('view engine', 'ejs');
// Default templates folder ./views
app.set('views', './public');


/* ------------------------------------------------------- */
// Routes

app.all('/', (req, res) => {
    // we need to call index.ejs from views folder
    // res.render('index.ejs');
    // res.render('index');

    res.send(`
        <div><a href="/view" >Todo Template </a></div>
        <div><a href="/api/v1/todo" >Todo RestAPI </a></div>
    `);
});

app.use('/api/v1', require('./routes/todo.router.api'));
app.use('/view', require('./routes/todo.router.view'));
/* ------------------------------------------------------- */
// ErrorHandler;
app.use(require('./middlewares/errorHandler'));
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));