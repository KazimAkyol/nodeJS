"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */

const OrderSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    pizzaId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Pizza",
      required: true,
    },

    size: {
      type: String,
      trim: true,
      required: true,
      enum: ["Small", "Medium", "Large", "XLarge"], //* enum: Kullaniciya sinirli sayida secenek verdigimiz durumlarda kullanilan bir yapidir.
    },

    quantity: {
      type: Number,
      default: 1,
    },

    price: {
      type: Number,
      required: true,
    },

    totalPrice: {
      type: Number,
      default: function () {
        // Create
        returnthis.quantity * this.price; //* this keyword'ü ile icinde bulunan objenin degiskeninden bahsediyor.
      },
      transform: function () {
        // Update
        return this.quantity * this.price;
      },
    },
  },
  {
    collection: "orders",
    timestamps: true,
  }
);

module.exports = mongoose.model("Order", OrderSchema);
