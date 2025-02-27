"use strict";

/* -------------------------------------------------------
         EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

// $ npm init -y
// $ npm i express dotenv express-async-errors
// $ echo PORT=8000 > .env
// $ npm i sequelize sqlite3
// $ nodemon

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Accept json data:
app.use(express.json());

app.all("/", (req, res) => {
  res.send("WELCOME TO TODO API");
});

/* ------------------------------------------------------- */
//* Sequelize

const { Sequelize, DataTypes } = require("sequelize");

//* where is DB(DB Connection Detail)
const sequelize = new Sequelize("sqlite:./db.sqlite3");

//* MODEL:
//* sequelize.define('tableName', {columns})
const Todo = sequelize.define("todos", {
  //   id: { //* No need to define ID field, it will be created auto.
  //     type: DataTypes.INTEGER,
  //     // allowNull: false, // default:true
  //     unique: true,
  //     field: "custom_name",
  //     comment: "description or comment",
  //     primaryKey: true,
  //     autoIncrement: true,
  //   },

  title: {
    type: DataTypes.STRING(256), // varchar(256)
    allowNull: false,
  },

  description: DataTypes.TEXT, // Short and Using

  priority: {
    // -1: Low, 0: Normal, 1: High
    type: DataTypes.SMALLINT,
    allowNull: false,
    defaultValue: 0,
  },

  isDone: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: 0,
  },

  newField: DataTypes.TEXT,

  // No need define createdAt & updateAt fields. They are default created.
});

//* Synchorization:
// sequelize.sync(); // Create table
// sequelize.sync({ force: true }); // Drop Table & Crate Table
sequelize.sync({ alter: true }); // Drop Table & Crate Table

//* DB Connection:
sequelize
  .authenticate()
  .then(() => console.log("* DB Connected *"))
  .catch(() => console.log("! DB Not Connected !"));

/* ------------------------------------------------------- */

//* Routers
const router = express.Router();

// List Todos:
router.get("/todo", async (req, res) => {
  const result = await Todo.findAll(); // Select * From todos

  res.send({
    error: false,
    result,
  });
});

// Create Todo:
router.post("/todo", async (req, res) => {
  const result = await Todo.create({
    title: "title-1",
    description: "description-1",
    isDone: false,
    priority: 0,
  });

  res.send({
    error: false,
    result,
  });
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
