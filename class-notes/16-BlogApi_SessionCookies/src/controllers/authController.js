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

      const user = await User.findOne({email: email})

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
