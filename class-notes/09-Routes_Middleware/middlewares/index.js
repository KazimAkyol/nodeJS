"use strict";

/* --------------------------------------------------------- *
                   EXPRESSJS - MIDDLEWARES
/* --------------------------------------------------------- *

const middleFn1 = (req, res, next) => {
  console.log("middleware function 1 started");
  next();
};

const middleFn2 = (req, res, next) => {
  console.log("middleware function 2 started");
  next();
};

module.exports = { middleFn1, middleFn2 }; //* obje icinde birden fazla function export edilebilir.

/* --------------------------------------------------------- *

module.exports.middleFn1 = (req, res, next) => {
  console.log("middleware function 1 started");
  next();
};

modeule.exports.middleFn2 = (req, res, next) => {
  console.log("middleware function 2 started");
  next();
};

/* --------------------------------------------------------- */

module.exports = {
  middleFn1: (req, res, next) => {
    console.log("middleware function 1 started");
    next();
  },
  middleFn2: (req, res, next) => {
    console.log("middleware function 2 started");
    next();
  },
};
