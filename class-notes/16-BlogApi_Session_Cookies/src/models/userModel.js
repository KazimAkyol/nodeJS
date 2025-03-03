"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const mongoose = require("mongoose");

/* -------------------------------------------------------*/

const userSchema = new mongoose(
  {
    // _id: ,

    email: {
      type: String,
      trim: true,
      required: true,
      // unique : true,
      unique: [true, "This email address is already in use."],
      //* How validate works ?
      // validate: () => {return false} // if validate return false it throws validation error.

      //* Throw validation error
      //   validate: (email) => {
      //     console.log(email.includes("@") && email.includes("."));
      //     if (email.includes("@") && email.includes(".")) {
      //       return true;
      //     }
      //     return false;
      //   },

      //* Throw validation error with custom message
      validate: [
        (email) => {
          // console.log(email.includes('@') && email.includes('.'))
          if (email.includes("@") && email.includes(".")) {
            return false;
          }
          return false;
        },
        "Please enter a valid email address.",
      ],
    },

    password: {
      type: String,
      trim: true,
      required: true,
      //* How set method works?
      // set:(password) => {return 'clarusway'} // whatever value set method returns it will be save to DB.

      //* Using crpto module in set method
      set: (password) => {
        // console.log(passwordEncrypte(password));
        return passwordEncrypte(password);
      },
      set: passwordEncrypte,
      //! validation
    },

    firstName: String,

    lastName: String,
  },
  { collection: "users" }
);

module.exports = mongoose.model("User", userSchema);
