"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */

// Parse data
app.use(express.json());

// Catch error from async
require('express-async-errors');

// DB Connection
// const dbConnection = require('./src/dbConnection');
// dbConnection()
require('./src/dbConnection')()

/* ------------------------------------------------------- */
//* Routes

// Main route
app.all('/', (req, res) => {
    res.send('WELCOME TO BLOG API')
});

// Blog route
app.use(require('./src/routes/blogRouter'));

// Error Handler:
app.use(require('./src/middlewares/errorHandler'));

/* ------------------------------------------------------- */
app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT));