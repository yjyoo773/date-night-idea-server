"use strict";

const User = require("../models/user");
const Dates = {};

Dates.addDate = async (req, res) => {
  const email = req.query.email;
  const date = req.body;
  await User.findOne({ email }, (err, entry) => {
    if (err) return console.error(err);
    entry.dates.push(date);
    entry.save();
    res.status(200).send(entry.dates);
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
  const date = req.body;
  await User.findOne({ email }, (err, entry) => {
    if (err) return console.error(err);
    entry.dates.splice(index, 1, date);
    console.log(entry.dates);
    entry.save();
    res.status(200).send(entry.dates);
  });
};

Dates.deleteDate = async (req, res) => {
  const index = parseInt(req, params.index);
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
