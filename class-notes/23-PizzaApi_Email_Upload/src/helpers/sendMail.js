"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */

const nodemailer = require("nodemailer");

module.exports = function sendMail(to, subject, message) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "akyolkzm.2016493@gmail.com",
      pass: "krkh fxow gujl cjhf",
    },
  });

  // Send Mail
  transporter.sendMail(
    {
      from: "akyolkzm.2016493@gmail.com",
      to: to,
      subject: subject,
      text: message,
      html: message,
    },
    function (error, success) {
      success ? console.log("SUCCESS:", success) : console.log("ERROR:", error);
    }
  );
};
