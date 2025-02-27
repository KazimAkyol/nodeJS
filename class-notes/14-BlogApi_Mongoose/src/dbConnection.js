"use strict";

/* ---------Ex */

//* Mongoose ODM

const mongoose = require("mongoose");

const dbConnection = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/blogAPI")
    .then(() => console.log("* DB Connected *"))
    .catch(() => console.log("! DB Not Connected", err));
};

module.exports = dbConnection;
