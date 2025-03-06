"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

const Personnel = require("../models/personnel.model");

module.exports = {
  login: async (req, res) => {
    const { username, email, password } = req.body;

    if ((username || email) && password) {
      const user = await Personnel.findOne({
        $or: [{ username }, { email }],
        password,
      });

      if (user) {
        if (user.isActive) {

            // Set Session:
            req.session = {id: user._id, }

          res.status(200).send({
            error: false,
          });
        } else {
          res.errorStatusCode = 401;
          throw new Error("The user status is not active");
        }
      } else {
        res.errorStatusCode = 401;
        throw new Error("Wrong email/username or password");
      }
    } else {
      res.errorStatusCode = 401;
      throw new Error("Please enter username/email and password");
    }
  },
};
