"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */

const User = require("../models/user");
const Token = require("../models/token");
const passwordEncrypt = require("../helpers/passwordEncrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  login: async (req, res) => {
    /*
            #swagger.tags = ["Authentication"]
            #swagger.summary = "Login"
            #swagger.description = 'Login with username (or email) and password for get simpleToken and JWT'
            #swagger.parameters["body"] = {
                in: "body",
                required: true,
                schema: {
                    "username": "test",
                    "password": "aA12345.?",
                }
            }
        */

    const { username, email, password } = req.body;

    if (!((username || email) && password)) {
      res.errorStatusCode = 401;
      throw new Error("username/email and password are required.");
    }

    const user = await User.findOne({
      $or: [{ username }, { email }],
      password,
    });

    if (!user) {
      res.errorStatusCode = 401;
      throw new Error("Incorrect email/username and password.");
    }

    if (!user.isActive) {
      res.errorStatusCode = 401;
      throw new Error("This account is not active.");
    }

    /* Simple Token */
    //* Bir projede sadece tek bir token türü kullanilir. Simple token ya da JWT.

    let tokenData = await Token.findOne({ userId: user._id });

    if (!tokenData) {
      tokenData = await Token.create({
        userId: user._id,
        token: passwordEncrypt(Date.now() + user._id),
      });
    }
    /* Simple Token */

    /* JWT Token */
    //* JWT'nin bir ömürleri vardir.
    //* AccessT - 30 dk, RefreshT - 2 GÜN.
    //* Her istekte bana AccessT'i gönder diyecegiz
    //* Backend'ten Frontend'e RefreshT döndürülerek AccessT gönderilir. Güvenlik amaciyla böyle bir yol izlenir.Kötü amacli kullanici(Hacker) AccessT ulasip browser'daki enduser'a ait bilgileri calmak isteyebilir. 30 dk sonra RefreshT döndürülerek yeni AccesT gönderilir. Bu sürecte RefreshT'nin da süresi biterse browser'daki enduser'i logout yapip ondan login olmasi istenerek isleyis en basa alinir.

    //* Access Token:
    const accessData = {
      _id: user._id,
      username: user.username,
      email: user.email,
      isActive: user.isActive,
      isAdmin: user.isAdmin,
    };

    // jwt.sign(payload, secretKey, lifetime);

    const accessToken = jwt.sign(accessData, process.env.ACCESS_KEY, {
      expiresIn: "5m",
    });

    //* Refresh Token:
    const refreshData = {
      _id: user._id,
      password: user.password,
    };

    const refreshToken = jwt.sign(refreshData, process.env.REFRESH_KEY, {
      expiresIn: "1d",
    });

    /* JWT Token */

    res.status(200).send({
      error: false,
      bearer: {
        //* jwt ile beraber kullanilir.
        acces: accessToken,
        refresh: refreshToken,
      },
      token: tokenData.token,
      user,
    });
  },

  refresh: async (req, res) => {
    /*
            #swagger.tags = ["Authentication"]
            #swagger.summary = "Refresh"
            #swagger.description = 'Refresh with refreshToken for get accessToken'
            #swagger.parameters["body"] = {
                in: "body",
                required: true,
                schema: {
                    "bearer": {
                    refresh:"...refreshToken..."
                    },
                }
            }
        */

    const { refresh } = req.body?.bearer;

    if (!refresh) {
      res.errorStatusCode = 401;
      throw new Error("Refresh token not found.");
    }

    const refreshData = jwt.verify(refresh, process.env.REFRESH_KEY);

    if (!refreshData) {
      res.errorStatusCode = 401;
      throw new Error("JWT Refresh data is wrong.");
    }

    const user = await User.findOne({ _id: refreshData._id });

    if (!user && user.password !== refreshData.password) {
      res.errorStatusCode = 401;
      throw new Error("Wrong id or password.");
    }

    if (!user.isActive) {
      res.errorStatusCode = 401;
      throw new Error("This account is not active.");
    }

    const accessData = {
      _id: user._id,
      username: user.username,
      email: user.email,
      isActive: user.isActive,
      isAdmin: user.isAdmin,
    };

    res.status(200).send({
      error: false,
      bearer: {
        access: jwt.sign(accessData, process.env.ACCESS_KEY, {
          expiresIn: "1m",
        }),
      },
    });
  },

  logout: async (req, res) => {
    /*
           #swagger.tags = ["Tokens"]
           #swagger.summary = "Create Token"
        */

    // const result = req.user
    //   ? await Token.deleteOne({ userId: req.user._id })
    //   : null;

    res.status(200).send({
      error: false,
      //   message: result?.deletedCount
      //     ? "User logged out and token deleted."
      //     : "User Logged out.",
      message: "JWT: No need any process for logout.",
    });
  },
};
