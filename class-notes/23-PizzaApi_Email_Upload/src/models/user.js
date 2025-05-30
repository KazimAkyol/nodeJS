"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
const passwordEncrypt = require("../helpers/passwordEncrypt");
/* ------------------------------------------------------- */

const Userschema = new mongoose.Schema(
  {
    username: {
      type: String,
      trim: true,
      required: true,
      index: true,
    },

    email: {
      type: String,
      trim: true,
      required: true,
      index: true,
      unique: true,
      validate: [
        (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email),
        "Please enter a valid email address.",
      ],
    },

    password: {
      type: String,
      trim: true,
      required: true,
      set: (password) => passwordEncrypt(password),
    },

    isActive: {
      type: Boolean,
      default: true,
    },

    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { collection: "users", timestamps: true }
);

module.exports = mongoose.model("User", Userschema);
