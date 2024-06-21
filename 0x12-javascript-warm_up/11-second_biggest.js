#!/usr/bin/node
/*
 * script that searches the second biggest integer in the list of arguments.
 * You can assume all arguments can be converted to integer
 * If no argument passed, print 0
 * If the number of arguments is 1, print 0
 */
const args = process.argv.slice(2).map(Number);
if (args.length === 0 || args.length === 1) {
	console.log(0);
} else {
	const max = Math.max(...args);
	const secondBiggest = Math.max(...args.filter(x => x < max));
	console.log(secondBiggest);
}
