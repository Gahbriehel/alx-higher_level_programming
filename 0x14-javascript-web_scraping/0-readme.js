#!/usr/bin/node
/*
 * This script reads and prints the content of a file.
 *
 * The first argument is the file path
 * The content of the file must be read in utf-8
 * If an error occurred during the reading, print the error object
 *
 * Test with: 
 * 	cat cisfun
 * C is super fun!
 * 	./0-readme.js cisfun
 * C is super fun!
 *
 */

const fs = require('fs');
const file = process.argv[2];

fs.readFile(file, 'utf-8', function (err, data) {
  if (err) {
    console.log(err);
  } else {
    console.log(data);
  }
});
