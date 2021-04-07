"use strict";

const User = require("../models/user");
const Dates = {};
// User.collection.drop()

Dates.addDate = async (req, res) => {
  const email = req.query.email;
  const date = req.body.item;
  await User.findOne({ email }, (err, entry) => {
    if (err) return console.error(err);
    if (!entry) {
      let newUser = new User({ email: email, dates: date });
      newUser.save();
      res.status(200).send(newUser.dates);
    } else {
      entry.dates.push(date);
      entry.save();
      res.status(200).send(entry.dates);
    }
  });
};

Dates.getDate = async (req, res) => {
  try {
    const email = req.query.email;
    let items = await User.find({ email });
    res.status(200).send(items[0].dates);
  } catch (err) {
    console.error(err);
  }
};

Dates.updateDate = async (req, res) => {
  const index = parseInt(req.params.index);
  const email = req.query.email;
  const date = req.body.data;
  console.log("req.body is", date);
  await User.findOne({ email }, (err, entry) => {
    if (err) return console.error(err);
    entry.dates.splice(index, 1, date);
    // console.log("all'em",entry.dates)
    // console.log(
    //   "entry.dates after findOne",
    //   entry.dates.splice(index, 1, date)

    entry.save();
    res.status(200).send(entry.dates);
  });
};

Dates.deleteDate = async (req, res) => {
  const index = parseInt(req.params.index);
  const email = req.query.email;
  await User.findOne({ email }, (err, entry) => {
    if (err) return console.error(err);
    const newDates = entry.dates.filter((date, i) => {
      return i != index;
    });
    entry.dates = newDates;
    entry.save();
    res.status(200).send(entry.dates);
  });
};

module.exports = Dates;
