"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- */

// Routers;

const router = require('express').Router();
const todo = require('../controllers/todo.controller.view');


router.get('/', todo.list);

router.all('/create', todo.create);

router.get('/:id', todo.read);

router.all('/:id/update', todo.update)

router.get('/:id/delete', todo.delete)


module.exports = router;