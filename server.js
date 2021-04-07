"use strict";

// Libraries ==========================================================================

const express = require("express");
const cors = require("cors");

const request = require("request");
require("dotenv").config();

const MongoClient = require("mongodb").MongoClient;

const app = express();
app.use(cors());
app.use(express.json());
const PORT = process.env.PORT || 3002;

// Modules ==========================================================================
const dateHandler = require("./modules/dateIdeas");
const Dates = require("./modules/dates");
const Drinks = require("./modules/drinks");
// Mongoose =========================================================================

const mongoose = require("mongoose");

const PASSWORD = process.env.PASSWORD;

// const db= mongoose.connect(`mongodb+srv://newUser:${PASSWORD}@cluster0.dq1tt.mongodb.net/test?retryWrites=true&w=majority`, {
const db = mongoose
  .connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`listening on ${PORT}`));
    console.log("connected to the Database");
  })
  .catch((e) => {
    console.log(e);
  });

// console.log(db);

// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function () {
//   console.log("connected to the database!");
// });

// const client = new MongoClient(process.env.MONGODB_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
// Routes  ==========================================================================
app.get("/", function (req, res) {
  res.send("hi!");
});
app.get("/dateIdeas", dateHandler);

app.get("/date", Dates.getDate);
app.post("/date", Dates.addDate);
app.delete("/date/:index", Dates.deleteDate);
app.put("/date/:index", Dates.updateDate);

app.get("/drink", Drinks.getDrink);
app.post("/drink", Drinks.addDrink);
app.delete("/drink/:index", Drinks.deleteDrink);
app.put("/drink/:index", Drinks.updateDrink);

// STUFF NEEDED
// get data from api (need to query location) => refer to city explorer

// Create CRUD adding data into user account => refer to best books

// ===========================================================================
