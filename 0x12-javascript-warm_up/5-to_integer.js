#!/usr/bin/node
/*
 * script that prints My number:
 * <first argument converted in integer>
 * if the first argument can be converted to an integer:
 *
 * If the argument can’t be converted to an integer,
 * print “Not a number”
 */
let arg = process.argv[2];
arg = parseInt(arg);
if (arg) {
  console.log(`My number: ${arg}`);
} else {
  console.log('Not a number');
}
