"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
//* Permission control middleware:

module.exports = {


    isLogin: (req,res,next)=> {
        
        if (req.user) {
            next()
        } else {
            res.errorStatusCode = 403
            throw new Error('No Permission: You must login.')
        }
    }
}