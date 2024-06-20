#!/usr/bin/node
/*
 * script that prints x times “C is fun”
 *
 * Where x is the first argument of the script
 * If the first argument can’t be converted to an integer, print “Missing number of occurrences”
 */
let arg = process.argv[2];
arg = parseInt(arg);
if (!arg) {
  console.log('Missing number of occurrences');
} else {
  for (let i = 0; i < arg; i++) {
    console.log('C is fun');
  }
}
