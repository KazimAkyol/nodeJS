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
        // /* SESSION */

        // 1.yol:
        // req.session = {
        //   email: user.email,
        //   password: user.password,
        // };

        // 2.yol:
        req.session._id = user._id;
        req.session.password = user.password;

        // /* SESSION */

        /* COOKIE */

        if (req.body.remindMe == true) {
          req.session.remindMe = true;
          req.sessionOptions.maxAge = 1000 * 60 * 60 * 24 * 2; // set maxAge to 2 days
        }

        /* COOKIE */

        res.send({
          error: false,
          message: "login: OK",
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
    req.session = null;

    res.send({
      error: false,
      message: "logout: OK",
    });
  },
};
