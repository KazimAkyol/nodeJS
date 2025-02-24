"use strict";

/* -------------------------------------------------------
           EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

//* Controllers:

const Todo = require("../models/todo.model");

module.exports = {
  list: async (req, res) => {
    const result = await Todo.findAll(); // Select * From todos
    // findAndCountAll()

    res.send({
      error: false,
      result,
    });
  },

  create: async (req, res) => {
    // const result = await Todo.create({
    //     title: "title-1",
    //     description: 'description-1',
    //     isDone: false,
    //     priority: 0
    // } ,

    const result = await Todo.create(req.body);

    res.status(201).send({
      error: false,
      result,
    });
  },

  read: async (req, res) => {
    //   const result = await Todo.findOne({ where: { id: req.params.id } });

    const result = await Todo.findByPk(req.params.id);

    res.status(202).send({
      error: false,
      result,
    });
  },

  update: async (req, res) => {
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
  },

  delete: async (req, res) => {
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
  },
};
