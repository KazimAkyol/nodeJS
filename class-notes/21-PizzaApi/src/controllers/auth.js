"use strict";

/* -------------------------------------------------------
    | FULLSTACK TEAM | NODEJS / EXPRESS |
------------------------------------------------------- */

const User = require('../controllers/user')

module.exports = {

    login: async (req,res) => {

        if (!((username || email) && password)) {
            res.errorStatusCode = 401
            throw new Error('username/email and password are required.')
        }

        const user = await User.findOne({$or:[{username}, {email}], password })

        if (!user) {
            res.errorStatusCode = 401
            throw new Error('Incorrect email/username and password.')
        }

        if (!user.isActive) {
            res.errorStatusCode = 401
            throw new Error('This account is not active.')
        }

        let tokenData = await

        res.status(200).send({
            error: false
        })
    },

    logout: async (req,res) => {

        res.status(200).send({
            error: false
        })
    }
}