"use strict";
/* -------------------------------------------------------
           EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const router = require("express").Router();

const blogCategory = require("../controllers/blogController");

/* ------------------------------------------------------- */
// URL: /blog ->

router.route("/blog").get(blogCategory.list).post(blogCategory.create);

router
  .route("/blog/:categoryId")
  .get(blogCategory.read)
  .put(blogCategory.update)
  .delete(blogCategory.delete);

/* ------------------------------------------------------- */
module.exports = router;
