"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | Flight API
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// auth:
// router.use("/auth", require("./auth"));

// user:
router.use("/users", require("./user"));

// document:
router.use("./document.js", require("./document"));

/* ------------------------------------------------------- */
module.exports = router;
