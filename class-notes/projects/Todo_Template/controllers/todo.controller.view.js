"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */
// Controllers;

const Todo = require('../models/todo.model');

const PRIORITES = {
    '-1': 'Low',
    '0': "Normal",
    '1': "High",
};

module.exports = {
    list: async (req, res) => {

        const result = await Todo.findAndCountAll()

        res.render('index', { todos: result.rows, count: result.count, priorities: PRIORITES });
    },

    create: async (req, res) => {

        if (req.method === 'POST') {
            const result = await Todo.create(req.body);
            res.redirect('/view')
        } else {
            res.render('todoCreate');
        }
    },

    read: async (req, res) => {

        // const result = await Todo.findOne({ where: { id: req.params.id } });
        const result = await Todo.findByPk(req.params.id);

        res.render('todoRead', { todo: result, priorities: PRIORITES });
    },

    update: async (req, res) => {

        if (req.method === 'POST') {

            await Todo.update(req.body, { where: { id: req.params.id } });

            res.redirect('/view')

        } else {

            const result = await Todo.findByPk(req.params.id);

            res.render('todoUpdate', { todo: result });
        }

    },

    delete: async (req, res) => {

        const result = await Todo.destroy({ where: { id: req.params.id } })

        // todo when user click canel it still deletes the data. Fix please

        if (result) {
            res.redirect('/view')
        } else { // failed
            res.errorStatusCode = 404;
            throw new Error('Delete is not succesful. Data is not found or already deleted.');
        }
    }
}