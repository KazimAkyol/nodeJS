"use strict";

/* -------------------------------------------------------
           EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

const { Router } = require("express");

//* Routers

const router = require("express").Router();
const todo = require("../controllers/todo.controller");

//* List Todos:
// router.get("/todo", todo.list);

//* Create Todo:
// router.post("/todo", todo.create);

//* Read Todo:
// router.get("/todo/:id", todo.read);

//* Update Todo:
// router.put("/todo/:id", todo.update);

//* Delete Todo:
// router.delete("/todo/:id", todo.delete);

router.route("todo").get(todo.list).post(todo.create);

router.route("/todo/id").get(todo.read).put(todo.update).delete(todo.delete);

module.exports = router;
