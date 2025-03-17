"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
//* Authentication Control Middleware:

const Token = require("../models/token.model");

module.exports = async (req, res, next) => {
  req.user = null;

  // Authorization: Token ...tokenKey...
  // Authorization: ApiKey ...tokenKey...
  // Authorization: Bearer ...tokenKey...
  // Authorization: Auth ...tokenKey...
  // Authorization: X-API-KEY ...tokenKey...
  // Authorization: x-auth-token ...tokenKey...

  // Get Token from Headers:
  // console.log(req.headers.authorization.split(" ")[1]); //* console.log atip sirasiyla req.headers yazip Thunder'da yazilana ulasilir, oradan Authorization'da gönderilen value'ya yani Token'a ulasilir. split yazarak bir array olarak yakalanir ve [1] yazarak Token'a en yalin haliyle ulasilir. Bunu kod blogu seklinde yazalim:

  const auth = req.headers.authorization || null; // Token ...TokenKey...
  const tokenKey = auth ? auth.split(" ") : null; // ['Token', ...TokenKey...]

  if (tokenKey && tokenKey[0] == "Token") {
    const tokenData = await Token.findOne({ token: tokenKey[1] }).populate(
      "userId"
    );

    // console.log(tokenData);

    if (tokenData) req.user = tokenData.userId;
  }

  next();
};
