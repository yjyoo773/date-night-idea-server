"use strict";

const express = require("express");
const cors = require("cors");
const superagent = require("superagent");
const request = require("request");
require("dotenv").config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3002;

// ==========================================================================


// Routes
app.get("/", function (req, res) {
  res.send("hi!");
});


const dateHandler = require('./modules/dateIdeas');

app.get("/dateIdeas",dateHandler)


// app.get("/user",User.getSomething)
// app.post("/user",User.createSomething)
// app.delete("/user/:index",User.deleteSomething)
// app.put("/user/:index",User.updateSomething)

// STUFF NEEDED
// get data from api (need to query location) => refer to city explorer

// Create CRUD adding data into user account => refer to best books


// ===========================================================================

app.listen(PORT, () => console.log(`listening on ${PORT}`));
