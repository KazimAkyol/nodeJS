"use strict";
/* -------------------------------------------------------
             EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

// Call Models:
const { User, BlogPost } = require("../models/blogModel");

// User Controller:
module.exports.User = {
  list: async (req, res) => {
    const result = await User.find();

    res.status(200).send({
      error: false,
      result,
    });
  },

  // CRUD ->

  create: async (req, res) => {
    const result = await User.create(req.body);

    res.status(201).send({
      error: false,
      result,
    });
  },

  read: async (req, res) => {
    // await User.findOne({...filter})
    // const result = await User.findOne({ _id: req.params.userId });
    const result = await User.findById(req.params.userId);

    res.status(200).send({
      error: false,
      result,
    });
  },

  update: async (req, res) => {
    // const result = await User.updateOne({ ...filter }, { data });

    // Thunder Document:
    //     "result": {
    //     "acknowledged": true, // if update methods ends successfuly
    //     "modifiedCount": 1,
    //     "upsertedId": null,
    //     "upsertedCount": 0,
    //     "matchedCount": 1
    //   },

    const result = await User.updateOne({ _id: req.params.userId }, req.body);

    res.status(202).send({
      error: false,
      result,
      new: await User.findById(req.params.userId),
    });
  },

  delete: async (req, res) => {
    // await User.deleteOne({...filter})

    // Thunder Document
    //     "result": {
    //     "acknowledged": true, // if delete methods ends succesfuly
    //     "deletedCount": 1 // if returns 0 : no any data delete cause data is not found or already deleted.
    //   }
    const result = await User.deleteOne({ _id: req.params.userId });

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

/* ------------------------------------------------------- */
// User Controller:
module.exports.blogCategory = {
  list: async (req, res) => {
    // await BlogPost.find({ ...filter }, { ...select });
    // const result = await User.find();

    //* the field you want display give true value. _id default is true
    //* the field you want to expand with more detail, send the name of in populate method.
    const result = await User.find(
      {},
      { userId: true, title: true, content: true }
    ).populate("userId");

    res.status(200).send({
      error: false,
      result,
    });
  },

  // CRUD ->

  create: async (req, res) => {
    const result = await User.create(req.body);

    res.status(201).send({
      error: false,
      result,
    });
  },

  read: async (req, res) => {
    // await User.findOne({...filter})
    // const result = await User.findOne({ _id: req.params.userId });
    const result = await User.findById(req.params.postId).populate("userId");

    res.status(200).send({
      error: false,
      result,
    });
  },

  update: async (req, res) => {
    // await User.updateOne({...filter},{...data})

    //* response from updateOne : {
    // "acknowledged": true, // if update methods ends successfuly
    // "modifiedCount": 1, // if returns 0 : no any data updated cause data is already up to date.
    // "upsertedId": null,
    // "upsertedCount": 0,
    // "matchedCount": 1 // number of data matches with our filter.
    // }

    const result = await User.updateOne({ _id: req.params.userId }, req.body);

    res.status(202).send({
      error: false,
      result,
      new: await User.findById(req.params.userId),
    });
  },

  delete: async (req, res) => {
    // await User.deleteOne({...filter})

    //* response from deleteOne : {
    // "acknowledged": true, // if delete methods ends successfuly
    // "deletedCount": 1, // if returns 0 : no any data delete cause data is not found or already deleted.
    // }
    const result = await User.deleteOne({ _id: req.params.userId });

    if (result.deletedCount) {
      res.sendStatus(204);
    } else {
      res.errorStatusCode = 404;
      throw new Error("Data is not found or already deleted.");
    }
  },
};

/* ------------------------------------------------------- */
// BlogPost Controller:
module.exports.blogPost = {
  list: async (req, res) => {
    const result = await BlogPost.find();

    res.status(200).send({
      error: false,
      result,
    });
  },

  // CRUD ->

  create: async (req, res) => {
    const result = await BlogPost.create(req.body);

    res.status(201).send({
      error: false,
      result,
    });
  },

  read: async (req, res) => {
    // await BlogPost.findOne({...filter})
    // const result = await BlogPost.findOne({ _id: req.params.blogId });
    const result = await BlogPost.findById(req.params.blogId);

    res.status(200).send({
      error: false,
      result,
    });
  },

  update: async (req, res) => {
    // await BlogPost.updateOne({...filter},{...data})

    //* response from updateOne : {
    // "acknowledged": true, // if update methods ends successfuly
    // "modifiedCount": 1, // if returns 0 : no any data updated cause data is already up to date.
    // "upsertedId": null,
    // "upsertedCount": 0,
    // "matchedCount": 1 // number of data matches with our filter.
    // }

    const result = await BlogPost.updateOne(
      { _id: req.params.blogId },
      req.body
    );

    res.status(202).send({
      error: false,
      result,
      new: await BlogPost.findById(req.params.blogId),
    });
  },

  delete: async (req, res) => {
    // await BlogPost.deleteOne({...filter})

    //* response from deleteOne : {
    // "acknowledged": true, // if delete methods ends successfuly
    // "deletedCount": 1, // if returns 0 : no any data delete cause data is not found or already deleted.
    // }
    const result = await BlogPost.deleteOne({ _id: req.params.blogId });

    if (result.deletedCount) {
      res.sendStatus(204);
    } else {
      res.errorStatusCode = 404;
      throw new Error("Data is not found or already deleted.");
    }
  },
};

// module.exports = { blogCategory, blogPost }
