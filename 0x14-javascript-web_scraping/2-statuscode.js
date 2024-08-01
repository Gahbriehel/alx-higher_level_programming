#!/usr/bin/node
/*
 * This script display the status code of a GET request
 *
 * The first argument is the URL to request (GET)
 * The status code must be printed like this: |code: <status code>|
 * The module request is used
 *
 * Test with:
 * 	./2-statuscode.js https://alx-intranet.hbtn.io/status
 * code: 200
 * 	./2-statuscode.js https://alx-intranet.hbtn.io/doesnt_exist
 * code: 404
 *
 */

const request = require('request');
const url = process.argv[2];
request(url, function (err, res, body) {
  if (err) {
    console.log(err);
  } else {
    console.log('code:', res.statusCode);
  }
});
