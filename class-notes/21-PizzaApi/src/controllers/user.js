"use strict";
const { read, update } = require("../../../18-PersonnelApi/src/controllers/personnel.controller");
/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */

const User = require("../models/user");

module.exports = {
    list: async (req,res) => {

        const result = await

        res.status(200).send({
            error: false,
            result
        })
    },

    create: async (req,res) => {

        const result = await

        res.status(200).send({
            error: false,
            result
        })
    },

    read: async (req,res) => {

        const result = await

        res.status(200).send({
            error: false,
            result
        })
    },

    update: async (req,res) => {

        const result = await

        res.status(200).send({
            error: false,
            result
        })
    },

    delete: async (req,res) => {

        const result = await

        res.status(200).send({
            error: false,
            result
        })
    }
}