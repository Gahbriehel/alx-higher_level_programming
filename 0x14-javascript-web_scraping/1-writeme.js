#!/usr/bin/node
/*
 * This script writes a string to a file
 *
 * The first argument is the file path
 * The second argument is the string to write
 * The content of the file must be written in utf-8
 * If an error occurred during while writing, print the error object
 *
 * Test with: ./1-writeme.js my_file.txt "Python is cool"
 *
 */

const fs = require('fs');
const file = process.argv[2];
const string = process.argv[3];

fs.writeFile(file, string, 'utf-8', function (err) {
  if (err) {
    console.log(err);
  }
});
