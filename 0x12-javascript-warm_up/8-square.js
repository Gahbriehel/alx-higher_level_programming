#!/usr/bin/node
/*
 * script that prints a square
 *
 * The first argument is the size of the square
 * If the first argument can’t be converted to an integer, print “Missing size”
 * You must use the character X to print the square
 */
let arg = process.argv[2];
arg = parseInt(arg);
if (!arg) {
	console.log('Missing size');
} else {
	for (var i = 0; i < arg; i++) {
		for (var j = 0; j < arg; j++) {
			console.log('X');
		}
		console.log()
	}
}
