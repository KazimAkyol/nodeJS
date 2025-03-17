"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

const Personnel = require("../models/personnel.model");
const Token = require("../models/token.model");
const passwordEncrypt = require("../helpers/passwordEncrypt");

module.exports = {
  //* User login oldugunda buradaki login controller calisacak:
  login: async (req, res) => {
    const { username, email, password } = req.body;

    //* username or email ve password'ü gönderip göndermedigini kontrol etmek icin:

    if ((username || email) && password) {
      const user = await Personnel.findOne({
        $or: [{ email }, { username }],
        password,
      });

      //* Gönderilen Email ve Password DB ile eslesiyor mu? Register islemi yapan kullanici icin Login islemi basarilidir. Daha önce Register islemi yapmamis kullanici DB'de bulunamaz.

      if (user) {
        if (user.isActive) {
          //* Token (var mi yok mu?)
          let tokenData = await Token.findOne({ userId: user._id });

          //* Create Token
          if (!tokenData) {
            tokenData = await Token.create({
              userId: user._id,
              token: passwordEncrypt(Date.now() + user._id), //* Kisinin sifrelemek istedigi bir string'i bu fonksiyona parametre olarak gönderdiginde sifreli 64 karakterli bir hexadecimal yapi döndürür.
            }); //* Böylelikle create islemi yaparak benzersiz bir token olusturulur.
          }

          res.status(200).send({
            error: false,
            token: tokenData.token,
            user,
          });
        } else {
          res.errorStatusCode = 401;
          throw new Error("The user status is not active");
        }
      } else {
        res.errorStatusCode = 401;
        throw new Error("Wrong email/username and password");
      }
    } else {
      res.errorStatusCode = 401;
      throw new Error("Please enter username/email and password");
    }
  },

  logout: async (req, res) => {
    // let result;
    // if (req.user) {
    //   result = awaitToken.deleteOne({ userId: req.user._id });
    // } else {
    //   result = null;
    // }

    const result = req.user
      ? await Token.deleteOne({ userId: req.user._id })
      : null;

    res.status(200).send({
      error: false,
      message: "Logout OK",
      result,
    });
  },
};

/* ------------------------------------------------------- *
//* Login & Logout with cookie-session
module.exports = {
    login: async (req, res) => {

        const { username, email, password } = req.body


        if ((username || email) && password) {

            const user = await Personnel.findOne({ $or: [{ username }, { email }], password });

            if (user) {

                if (user.isActive) {

                    // Set Session:
                    req.session = { id: user._id, password: user.password }

                    // Set Cookie:
                    if (req.body?.rememberMe) {
                        req.sessionOptions.maxAge = 1000 * 60 * 60 * 24 * 3 // 3 days
                    }

                    res.status(200).send({
                        error: false,
                        user
                    });

                } else {
                    res.errorStatusCode = 401;
                    throw new Error('The user status is not active');
                }

            } else {
                res.errorStatusCode = 401;
                throw new Error('Wrong email/username or password');
            }

        } else {
            res.errorStatusCode = 401;
            throw new Error('Please anter username/email and password');
        }
    },

    logout: async () => {
        req.session = null

        res.send({
            error: false,
            maessage: "Logout is completed"
        })
    }
};
/* ------------------------------------------------------- */
