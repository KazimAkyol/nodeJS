"use strict";

/* --- EXPRESSJS */

const mongoose = require("mongoose");

// const nameSchema = new mongoose.Schema({ fields }, { options });

const nameSchema = new mongoose.Schema({
    // _id: // auto created and increment

    fieldName: {
        type: String,
        default: null,
        trim: true,
        unique: true,
        select: false, // if we don't want to send this field.
        index:true,
        // required: true,
        required: [true, 'custom error message'],
        // enum: ['1', '2', '3'],
        // enum: [1,2,3],
        enum: [[1,2,3], 'custom error message'],
        // validate: ()=>true, // if return false it will throw a validation error.
        validate: [()=> true,'cutom error message'],
        get: () => {return data}, // it works default when we do read operation
        set: ()=> {return data}, // it works default when we do create or update operation
    }
},{})
