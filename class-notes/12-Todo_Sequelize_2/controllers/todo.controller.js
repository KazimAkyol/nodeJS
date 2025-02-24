"use strict";

/* -------------------------------------------------------
           EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

//* Controllers:

module.exports = {
    list: async (req, res) => {
        const result = await Todo.findAll(); // Select * From todos
        // findAndCountAll()
      
        res.send({
          error: false,
          result,
        });
      } ,

    create: ,

    read: ,

    update: ,

    delete: ,
}
