"use strict";
/* -------------------------------------------------------
    NODEJS EXPRESS | Flight API
------------------------------------------------------- */

const Flight = require("../models/flight");

module.exports = {
  list: async (req, res) => {
    /* 
            #swagger.tags = ['Flights']
            #swagger.summary = 'List Flights'
            #swagger.desription = `
                You can send query with endpoint for filter[], search[], sort[], page and limit.
                <ul> Examples usage:
                    <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
    */

    const result = await res.getModelList(Flight);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Flight),
      result,
    });
  },

  create: async (req, res) => {
    //   { "flightNumber": "IS-AN-001",
    //     "airline": "THY",
    //     "departure": "ANKARA",
    //     "departureDate": "2020-10-01 10:00:00",
    //     "arrival": "ANKARA",
    //     "arrivalDate": "2020-10-01 12:00:00",
    //     "createdId": "652ceaa1bae9cde5e8a97522"
    // }

    /* 
        #swagger.tags = ['Flights']
        #swagger.summary = 'Create Flight'
        #swagger.parameters['body']={
            in:"body",
            required:true,
            schema:{
                $ref:'#/definitions/Flight',
            },
    */

    const result = await Flight.create(req.body);

    res.status(201).send({
      error: false,
      result,
    });
  },

  read: async (req, res) => {
    /* 
        #swagger.tags = ['Flights']
        #swagger.summary = 'Get Single Flight'
      */

    const result = await Flight.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      result,
    });
  },

  update: async (req, res) => {
    /* 
        #swagger.tags = ['Flights']
        #swagger.summary = 'Update Flight'
        #swagger.parameters['body']={
            in:"body",
            required:true,
            schema:{
                 $ref:'#/definitions/Flight',
            },
    */

    const result = await Flight.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });

    if (result.modifiedCount) {
      res.errorStatusCode = 404;
      throw new Error("Data is not updated");
    }

    res.status(202).send({
      error: false,
      new: await Flight.updateOne({ _id: req.params.id }),
    });
  },

  delete: async (req, res) => {
    /* 
        #swagger.tags = ['Flights']
        #swagger.summary = 'Delete Flight'
      */

    const result = await Flight.deleteOne({ _id: req.params.id });

    res.status(result.deletedCount ? 204 : 404).send({
      error: false,
      result,
      message: "Data is not found or already deleted.",
    });
  },
};
