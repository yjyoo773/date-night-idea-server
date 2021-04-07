"use strict";

const mongoose = require("mongoose");

// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function () {
//   console.log("connected to the database!");
// });

const dateSchema = new mongoose.Schema({
  restaurant_name: { type: String },
  restaurant_phone: { type: String },
  restaurant_website: { type: String },
  price_range: { type: String },
  cuisines: { type: Array },
  hours: { type: String },
  address: { type: Object },
  rating: { type: Number },
});

const drinkSchema = new mongoose.Schema({
    drink_name: {type:String},
    drink_img:{type:String},
    drink_inst:{type:String}
})

const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  dates: [dateSchema],
  drinks:[drinkSchema]
});

const User = mongoose.model("user", userSchema);
module.exports = User;
