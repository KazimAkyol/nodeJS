"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

const Department = require("../models/department.model");

module.exports = {
  list: async (req, res) => {
    const result = await res.getModelList(Department);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Department),
      result,
    });
  },

  create: async (req, res) => {
    const result = await Department.create(req.body);

    res.status(201).send({
      error: false,
      result,
    });
  },

  read: async (req, res) => {
    const result = await Department.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      result,
    });
  },

  update: async (req, res) => {
    const result = await Department.updateOne(
      { _id: req.params.id },
      req.body,
      {
        runValidators: true, //* model'de bir validation islemi varsa update'de tekrardan calistir.
        new: true, // returns updated data
      }
    );

    res.status(202).send({
      error: false,
      result,
    });
  },

  delete: async (req, res) => {
    const result = await Department.deleteOne({ _id: req.params.id });

    res.status(result.deletedCount ? 204 : 404).send({
      error: true,
      message: "Data is not found or already deleted.",
    });
  },
};
