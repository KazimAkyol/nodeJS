"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

//* Authentication Middleware

module.exports = async (req, res, next) => {
  console.log("authentication middleware worked.");

  next();
};
