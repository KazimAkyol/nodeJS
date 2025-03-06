"use strict";
/* -------------------------------------------------------
         EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
// Call Model;

const User = require("../models/userModel");

module.exports = {
  //* User login oldugunda buradaki login controller calisacak.
  login: async (req, res) => {
    const { email, password } = req.body;

    //* email ve password'ü gönderip göndermedigini kontrol etmek icin:

    if (email && password) {
      const user = await User.findOne({ email, password }); // findOne runs set method as a defult

      //* Gönderilen Email ve Password DB ile eslesiyor mu? Register islemi yapan kullanici icin Login islemi basarilidir. Daha önce Register islemi yapmamis kullanici DB'de bulunamaz.

      if (user) {
        /* SESSION */

        // 1.yol:
        // req.session = {
        //   email: user.email,
        //   password: user.password,
        // };

        // 2.yol:
        req.session._id = user._id;
        req.session.password = user.password;

        /* SESSION */

        /* COOKIE */

        if (req.body.remindMe == true) {
          req.session.remindMe = true;
          req.sessionOptions.maxAge = 1000 * 60 * 60 * 24 * 2; // set maxAge to 2 days
        }

        /* COOKIE */

        res.send({
          error: false,
          message: "login. OK",
          User, // Response'da User'a ait bilgilere ulasilir.
        });
      } else {
        res.errorStatusCode = 401;
        throw new Error("User credentials are wrong.");
      }
    } else {
      res.errorStatusCode = 401;
      throw new Error("Email and Password required.");
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
