"use strict";

// Libraries ==========================================================================

const express = require("express");
const cors = require("cors");

const request = require("request");
require("dotenv").config();

const app = express();
app.use(cors());
const PORT = process.env.PORT || 3002;

// Modules ==========================================================================
const dateHandler = require('./modules/dateIdeas');
const Dates = require('./modules/dates')


// Routes  ==========================================================================
app.get("/", function (req, res) {
  res.send("hi!");
});
app.get("/dateIdeas",dateHandler)


app.get("/date",Dates.getDate)
app.post("/date",Dates.addDate)
app.delete("/date/:index",Dates.deleteDate)
app.put("/date/:index",Dates.updateDate)


// STUFF NEEDED
// get data from api (need to query location) => refer to city explorer

// Create CRUD adding data into user account => refer to best books


// ===========================================================================

app.listen(PORT, () => console.log(`listening on ${PORT}`));
