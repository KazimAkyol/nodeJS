"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const router = require("express").Router();
const personnel = require("../controllers/personnel.controller");
const { isLogin } = require("../middlewares/permissions");
/* ------------------------------------------------------- */
// URL: /personnels

router.use(isLogin); //* her bir route'dan önce isLogin permission'i kullanmak icin kisayolda bu sekilde yazilabilir.

router.route("/").get(personnel.list).post(personnel.create);

router
  .route("/:id")
  .get(personnel.read)
  .put(personnel.update)
  .patch(personnel.update)
  .delete(personnel.delete);

/* ------------------------------------------------------- */
module.exports = router;
