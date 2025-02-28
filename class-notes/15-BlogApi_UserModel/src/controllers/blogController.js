"use strict";
/* -------------------------------------------------------
             EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

// Call Models:
const { BlogCategory, BlogPost } = require("../models/blogModel");

module.exports = {
  list: async (req, res) => {
    const result = await BlogCategory.find();

    res.status(200).send({
      error: false,
      result,
    });
  },

  // CRUD ->

  create: async (req, res) => {
    const result = await BlogCategory.create(req.body);

    res.status(201).send({
      error: false,
      result,
    });
  },

  read: async (req, res) => {
    // await BlogCategory.findOne({...filter})
    // const result = await BlogCategory.findOne({ _id: req.params.categoryId });
    const result = await BlogCategory.findById(req.params.categoryId);

    res.status(200).send({
      error: false,
      result,
    });
  },

  update: async (req, res) => {
    // const result = await BlogCategory.updateOne({ ...filter }, { data });

    // Thunder Document:
    //     "result": {
    //     "acknowledged": true, // if update methods ends successfuly
    //     "modifiedCount": 1,
    //     "upsertedId": null,
    //     "upsertedCount": 0,
    //     "matchedCount": 1
    //   },

    const result = await BlogCategory.updateOne(
      { _id: req.params.categoryId },
      req.body
    );

    res.status(202).send({
      error: false,
      result,
      new: await BlogCategory.findById(req.params.categoryId),
    });
  },

  delete: async (req, res) => {
    // await BlogCategory.deleteOne({...filter})

    // Thunder Document
    //     "result": {
    //     "acknowledged": true, // if delete methods ends succesfuly
    //     "deletedCount": 1 // if returns 0 : no any data delete cause data is not found or already deleted.
    //   }
    const result = await BlogCategory.deleteOne({ _id: req.params.categoryId });

    if (result.deletedCount) {
      res.sendStatus(204);
    } else {
      res.errorStatusCode = 404;
      throw new Error("Data is not found or already deleted.");
    }

    res.status(200).send({
      error: false,
      result,
    });
  },
};
