#!/usr/bin/node
/*
 * This script prints the title of a Star Wars movie where the episode number matches a given integer.
 *
 * The first argument is the movie ID
 * Using the Star wars API with the endpoint https://swapi-api.alx-tools.com/api/films/:id
 * The module request is used
 *
 * Test with:
 *     ./3-starwars_title.js 1
 * A New Hope
 *     ./3-starwars_title.js 5
 * Attack of the Clones
 *
 */

const request = require('request');
const id = parseInt(process.argv[2]);
const url = 'https://swapi-api.alx-tools.com/api/films/' + id;
let data;
request(url, function (err, res, body) {
  if (err) {
    console.log(err);
  } else {
    data = JSON.parse(body);
    console.log(data.title);
  }
});
