"use strict";

const mongoose = require("mongoose");

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connected to the database!");
});

const dateSchema = new mongoose.Schema({
  name: { type: String },
  phone: { type: String },
  website: { type: String },
  hours: { type: String },
  address: { type: String },
  notes: { type: String },
});

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  dates: [dateSchema],
});

const User = mongoose.model("user", userSchema);
module.exports = User;
