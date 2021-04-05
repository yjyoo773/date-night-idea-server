'use strict';

const { response, request } = require("express");

const FOOD_API_KEY = process.env.FOOD_API_KEY;

function getLocation(req, res) {
  const { lat, lon } = req.query;
  getLocation(lat, lon)
    .then(summaries => response.send(summaries))
    .catch((error) => {
      console.log(error);
      res.status(500).send('Something Went Wrong');
    });
};



function dateHandler(req, res) {
  const key = 'getLocation-' + req.query.lat + req.query.lon;
  const url = 'https://api.documenu.com/v2/restaurants/search/geo?lat={lat}&lon={lon}&distance=10&size=20&key={FOOD_API_KEY}'


  const queryParams = {
    key: FOOD_API_KEY,
    lat: this.query.lat,
    long: this.query.lon,
  };
}

class Restaurant {
  constructor(val) {
      this.lat = lat,
      this.long = lon,
      this.distance = distance,
      this.quizine = this.quizine
  };
}

module.exports = dateHandler;