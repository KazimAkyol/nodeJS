"use strict";
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */

const Order = require("../models/order");

module.exports = {
  list: async (req, res) => {
    /* 
            #swagger.tags = ['Orders']
            #swagger.summary = 'List Orders'
            #swagger.desription = `
                You can sen query with endpoint for filter[], search[], sort[], page and limit.
                <ul> Examples usage:
                    <li>URL/?<b>filter[field1]=value1&filter[field2]=value2</b></li>
                    <li>URL/?<b>search[field1]=value1&search[field2]=value2</b></li>
                    <li>URL/?<b>sort[field1]=1&sort[field2]=-1</b></li>
                    <li>URL/?<b>page=2&limit=1</b></li>
                </ul>
            `
    */
    //* swagger'lari kullanabilmek icin(dökümantasyon yazabilmek icin) yorum satirinin icinde #swagger seklinde yazip ici istenildigi gibi doldurulabilir.

    const result = await res.getModelList(Order, ["userId", "pizzaId"]); //* Daha detayli islemleri yapabilmek icin getModelList kullanildi.
    //* Burada oldugu gibi birden fazla id'yi populate etmek icin array icine yazilir.

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Order),
      result,
    });
  },

  create: async (req, res) => {
    /* 
        #swagger.tags = ['Orders']
        #swagger.summary = 'Create Order'
    */

    //* adding loggend in user's id to req.body as userId field
    req.body.userId = req.user._id;

    //* find pizza price using pizzaId field
    const pizza = await Pizza.findOne({ _id: req.body.pizzaId });

    if (!pizza) {
      res.errorStatusCode = 404;
      throw new Error("Pizza not found");
    }

    req.body.price = pizza?.price;

    const result = await Order.create(req.body);

    res.status(201).send({
      error: false,
      result,
    });
  },

  read: async (req, res) => {
    /* 
        #swagger.tags = ['Orders']
        #swagger.summary = 'Get Single Order'
    */

    const result = await Order.findOne({ _id: req.params.id }).populate([
      "userId",
      "pizzaId",
    ]);

    res.status(200).send({
      error: false,
      result,
    });
  },

  update: async (req, res) => {
    /* 
        #swagger.tags = ['Orders']
        #swagger.summary = 'Update Order'
    */

    const result = await Order.updateOne({ _id: req.params.id }, req.body, {
      runValidators: true,
    });

    if (result.modifiedCount) {
      res.errorStatusCode = 404;
      throw new Error("Data is not updated");
    }

    res.status(202).send({
      error: false,
      new: await Order.updateOne({ _id: req.params.id }),
    });
  },

  delete: async (req, res) => {
    /* 
        #swagger.tags = ['Orders']
        #swagger.summary = 'Delete Order'
    */

    const result = await Order.deleteOne({ _id: req.params.id });

    res.status(result.deletedCount ? 204 : 404).send({
      error: false,
      result,
      message: "Data is not found or already deleted.",
    });
  },
};
