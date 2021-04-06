'use strict';

const FOOD_API_KEY = process.env.FOOD_API_KEY;
const superagent = require("superagent");

class Restaurant {
  constructor(val) {
    this.restaurant_name= val.restaurant_name,
    this.restaurant_phone= val.restaurant_phone,
    this.restaurant_website= val.restaurant_website,
    this.price_range= val.price_range,
    this.cuisines=val.cuisines,
    this.hours=val.hours,
    this.address= val.address
  };
}

function dateHandler(req, res) {
  const { lat, lon } = req.query;

  const url = `https://api.documenu.com/v2/restaurants/search/geo`

  const queryParams = {
    key: FOOD_API_KEY,
    lat: lat,
    lon: lon,
    distance: 10,
    size: 30
  };
  superagent.get(url).query(queryParams).then((results) => {
    let data = results.body.data;
    let restArr = data.map((rest) => new Restaurant(rest))
    res.status(200).send(restArr);
  }) 
}


module.exports = dateHandler;