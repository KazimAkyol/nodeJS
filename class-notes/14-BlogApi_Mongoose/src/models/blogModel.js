"use strict";
/* -------------------------------------------------------
          EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

/* ---------------------------------------------------- */

const mongoose = require("mongoose");

/* ---------------------------------------------------- */
//* BlogCategorySchema

// Create Schema
const blogCategorySchema = new mongoose.Schema(
  {
    //_id: ,
    name: {
      type: String, // varchar
      trim: true,
      required: true,
    },
  },
  {
    collection: "BlogCategories",
  }
);

// Set Model
const BlogCategory = mongoose.model("BlogCategory", blogCategorySchema);

/* ----------------------------------------------------------------------- */
//* BlogPost Schema

// Create Schema

const blogPostSchema = new mongoose.Schema(
  {
    // _id: ,

    categoryId: {
      // default relation : ManyToOne
      type: mongoose.Schema.Types.ObjectId,
      ref: "BlogCategory",
      required: true,
      // unique:true // convert to OneToOne Relation.
    },

    title: {
      type: String,
      trim: true,
      required: true,
    },

    content: {
      type: String,
      trim: true,
      required: true,
    },

    // createdAt
    // updatedAt
  },
  {
    collection: "blogPosts",
    timestamps: true,
  }
);

// Set Model
const BlogPost = mongoose.model("BlogPost", blogPostSchema);

/* ----------------------------------------------------------------------- */
module.exports = { BlogCategory, BlogPost };

/* ----------------------------------------------------------------------- *
//* Sample
//* Create Schema
//* new mongoose.Schema({ fields }, { options });

const nameSchema = new mongoose.Schema(
  {
    // _id: // auto created and increment

    fieldName1: Number, // Short hand usage
    fieldName2: Boolean,

    fieldName3: {
      type: String, // JS Data Type
      default: null,
      trim: true, // Cuts the space before & after.
      unique: true, // Make it faster reachable in search.
      select: false, // if we don't want to send this field.
      index: true,
      // required: true,
      required: [true, "custom error message"],
      // enum: ['1', '2', '3'],
      // enum: [1,2,3],
      enum: [[1, 2, 3], "custom error message"],
      // validate: ()=>true, // if return false it will throw a validation error.
      validate: [() => true, "custom error message"],
      get: () => {
        return data;
      }, // it works default when we do read operation
      set: () => {
        return data;
      }, // it works default when we do create or update operation
    },
  },
  {
    collection: "CollectionName", // table name
    timestamps: true, // createdAt & updatedAt
  }
);

//* Database ile iletisime gecebilmek icin Schema'yi Model'e cevirmeliyiz.

//* Convert Schema to Model
//* mongoose.model("ModelName", nameSchema);

const ModelName = mongoose.model("ModelName", nameSchema);

/* ----------------------------------------------------------------------- */
