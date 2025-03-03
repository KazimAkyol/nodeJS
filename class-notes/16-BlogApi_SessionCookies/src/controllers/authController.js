"use strict";
/* -------------------------------------------------------
            EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
// Call Model:
const User = require("../models/userModel");

module.exports = {
  login: async (req, res) => {
    const { email, password } = req.body;

    if (email && password) {
      const user = await User.findOne({ email, password }); // findOne runs set method as a default

      if (user) {
        res.send({
          error: false,
          message: "login OK",
          User, // Response'da User'a ait bilgilere ulasilir.
        });
      } else {
        res.errorStatusCode = 401;
        throw new Error("User credentials are wrong.");
      }

      res.send({
        error: false,
      });
    } else {
      res.errorStatusCode = 401;
      throw new Error("Email and Password are required.");
    }
  },

  logout: async (req, res) => {
    res.send({
      error: false,
    });
  },
};
