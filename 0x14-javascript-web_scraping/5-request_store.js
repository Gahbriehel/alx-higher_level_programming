#!/usr/bin/node
/*
 * This script gets the contents of a webpage and stores it in a file.
 *
 * The first argument is the URL to request
 * The second argument is the file path to store the body response
 * The file is UTF-8 encoded
 * The module request is used
 *
 * Test with: ./5-request_store.js http://loripsum.net/api loripsum
 *
 */

const fs = require('fs');
const request = require('request');
const url = process.argv[2];
const file = process.argv[3];
request(url, function (err, res, body) {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile(file, body, 'utf-8', function (err) {
      if (err) {
        console.log(err);
      }
    });
  }
});
