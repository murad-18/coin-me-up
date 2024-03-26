const mongoose = require("mongoose");

const { Schema } = mongoose;

const commentSchema = new Schema(
  {
    content: { typeof: String, require: true },
    blog: { typeof: mongoose.SchemaType.ObjectId, ref: "blogs" },
    author: { typeof: mongoose.SchemaType.ObjectId, ref: "users" },
  },
  { timestamps: true }
);
