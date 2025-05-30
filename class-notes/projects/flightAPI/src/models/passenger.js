"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | Flight API
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ---------------------------------------------------- */

const PassengerSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },

    lastName: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },

    gender: {
      type: String,
      enum: [null, "M", "F"], //* sinirli sayida secenek sunulmak istendiginde enum degiskeni kullanilir.
      default: null,
      required: true,
    },

    emai: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      validate: [
        (email) => /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email),
        "Please enter a valid email address.",
      ],
    },

    createdId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    collection: "passenger",
    timestamps: true,
  }
);

module.exports = mongoose.model("Passenger", PassengerSchema);
