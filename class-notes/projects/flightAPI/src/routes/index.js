"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | Flight API
------------------------------------------------------- */
const router = require("express").Router();
/* ------------------------------------------------------- */
// user:
router.use("/users", require("./user"));
// document:

/* ------------------------------------------------------- */
module.exports = router;
