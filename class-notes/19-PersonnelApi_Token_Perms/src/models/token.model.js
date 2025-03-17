"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const { mongoose } = require("../configs/dbConnection");
/* ------------------------------------------------------- */

const TokenSchema = new mongoose.Schema(
  {
    //* Olusturulan token'in kime ait oldugu userId'den anlasilir.
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Personnel", //* Kullanici bilgileri bu modelde oldugu icin reference olarak Personnel model yazilir.
      required: true,
      index: true, //* RAM'de saklanan bilgidir, diger bilgilere göre daha hizli ulasmak icin.
    },

    token: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      index: true,
    },
  },
  { timeseries: true, collection: "tokens" }
);

/* ------------------------------------------------------- */
module.exports = mongoose.model("Token", TokenSchema);

//* token.controller.js ve token.router.js sayfalarini olusturmamizin nedeni admin tarafindan görüntülenmesi icin.
