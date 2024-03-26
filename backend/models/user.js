const mongoose = require("mongoose");

const { Schema } = mongoose;

const userSchema = new Schema(
  {
    name: { typeof: String, require: true },
    username: { typeof: String, require: true },
    email: { typeof: String, require: true },
    password: { typeof: String, require: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema, "users");
