"use strict";
/* -------------------------------------------------------
            EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

// Call Model:
const User = require("../models/blogModel");

/* ------------------------------------------------------*/

module.exports = {
  list: async (req, res) => {
    const result = await User.find();

    res.status(200).send({
      error: false,
      result,
    });
  },

  //* CRUD ->

  create: async (req, res) => {
    console.log(req.body);
    if (req.body.password.length < 8) {
      res.errorStatusCode = 400;
      throw new Error("The password must be more than 8 character.");
    }

    //* Body-JSON'da yazilan password en az 8 karakter olarak gönderilmediginde (yani if blogu icinde istenen sart saglanamadigindan) bize bir throw new Error döner ve hata mesaji yazdirilir.

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

    //* response from updateOne (Thunder document reading) :
    //     "result": {
    //     "acknowledged": true, // if update methods ends successfuly
    //     "modifiedCount": 1, // if returns 0 : no any data updated cause data is already up to date.
    //     "upsertedId": null,
    //     "upsertedCount": 0,
    //     "matchedCount": 1 // number of data matches with our filter.
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

    //* response from updateOne (Thunder document reading) :
    //     "result": {
    //     "acknowledged": true, // if delete methods ends succesfuly
    //     "deletedCount": 1 // if returns 0 : no any data delete cause data is not found or already deleted.
    //   },

    const result = await User.deleteOne({ _id: req.params.userId });

    if (result.deletedCount) {
      res.sendStatus(204);
    } else {
      res.errorStatusCode = 404;
      throw new Error("Data is not found or already deleted.");
    }
  },
};
