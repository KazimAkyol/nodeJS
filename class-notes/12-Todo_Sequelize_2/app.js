"use strict";
/* -------------------------------------------------------
           EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

// $ npm init -y
// npm i express dotenv express-async-errors
// echo PORT=8000 > .env
// npm i sequelize sqlite3
// nodemon

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Accept json data:
app.use(express.json());

// Catch async-errors:
require("express-async-errors");

app.all("/", (req, res) => {
  res.send("WELCOME TO TODO API");
});

/* ------------------------------------------------------- */




/* ------------------------------------------------------- */
//* Routers
const router = express.Router();

// List Todos:
router.get("/todo", async (req, res) => {
  const result = await Todo.findAll(); // Select * From todos
  // findAndCountAll()

  res.send({
    error: false,
    result,
  });
});

// Create Todo:
router.post("/todo", async (req, res) => {
  // const result = await Todo.create({
  //     title: "title-1",
  //     description: 'description-1',
  //     isDone: false,
  //     priority: 0
  // });

  const result = await Todo.create(req.body);

  res.status(201).send({
    error: false,
    result,
  });
});

//* TODO => READ - UPDATE - DELETE

//* Read Todo:

router.get("/todo/:id", async (req, res) => {
  //   const result = await Todo.findOne({ where: { id: req.params.id } });

  const result = await Todo.findByPk(req.params.id);

  res.status(202).send({
    error: false,
    result,
  });
});

//* Update Todo:

router.put("/todo/:id", async (req, res) => {
  //   const result = await Todo.update({ ...newData }, { ...where }); => [1]:success, [0]:failed
  //   const result = await Todo.update(
  //     { title: "title-updated-5" },
  //     { where: { id: 10 } }
  //   );
  const result = await Todo.update(
    { title: req.body },
    { where: { id: req.params.id } }
  );

  res.status(202).send({
    error: false,
    result,
    new: await Todo.findByPk(req.params.id),
  });
});

//* Delete Todo:

router.delete("/todo/:id", async (req, res) => {
  // await Todo.destroy({ ...where }); => 1:success, 0:failed
  const result = await Todo.destroy({ where: { id: req.params.id } });

  // 204 status code does not display and response
  //   res.status(204).send({
  //     error: false,
  //     result,
  //   });

  if (result) {
    // successfull
    res.sendStatus(204);
  } else {
    // failed
    res.statusCode = 404;
    throw new Error(
      "Delete is not successful. Data is not found or already deleted."
    );
  }
});

app.use(router);
/* ------------------------------------------------------- */
const errorHandler = (err, req, res, next) => {
  const errorStatusCode = res.errorStatusCode ?? 500;
  console.log("errorHandler worked.");
  res.status(errorStatusCode).send({
    error: true, // special data
    message: err.message, // error string message
    cause: err.cause, // error option cause
    // stack: err.stack, // error details
  });
};
app.use(errorHandler);
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));
