"use strict";

const User = require("../models/user");
const Drinks = {};
// User.collection.drop()

Drinks.addDrink = async (req, res) => {
  const email = req.query.email;
  const drink = req.body;
  await User.findOne({ email }, (err, entry) => {
    if (err) return console.error(err);
    if (!entry) {
      let newUser = new User({ email: email, drinks: drink });
      newUser.save();
      res.status(200).send(newUser.drinks);
    } else {
      entry.drinks.push(drink);
      console.log("addDrink", entry.drinks);
      entry.save();
      res.status(200).send(entry.drinks);
    }
  });
};

Drinks.getDrink = async (req, res) => {
  try {
    const email = req.query.email;
    let items = await User.find({ email });
    res.status(200).send(items[0].drinks);
  } catch (err) {
    console.error(err);
  }
};

Drinks.updateDrink = async (req, res) => {
  const index = parseInt(req.params.index);
  const email = req.query.email;
  const date = req.body.drink;
  console.log("req.body is", drink);
  await User.findOne({ email }, (err, entry) => {
    if (err) return console.error(err);
    entry.drinks.splice(index, 1, drink);
    entry.save();
    res.status(200).send(entry.drinks);
  });
};

Drinks.deleteDrink = async (req, res) => {
  const index = parseInt(req.params.index);
  const email = req.query.email;
  await User.findOne({ email }, (err, entry) => {
    if (err) return console.error(err);
    const newDrinks = entry.drinks.filter((drink, i) => {
      return i != index;
    });
    entry.drinks = newDrinks;
    entry.save();
    res.status(200).send(entry.drinks);
  });
};

module.exports = Drinks;
