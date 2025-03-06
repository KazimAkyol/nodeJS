"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */

const Personnel = require("../models/personnel.model");

module.exports = {

    login : async (req,res) => {

        const {username, email,password} = req.body

        if ((username || email) &&  password) {
            res.status(200).send({
                error: false,
            })
        } else {
            res.errorStatusCode = 401
            throw new Error('Please enter usernam/email and password')
        }
        
        
    }
}