#!/usr/bin/node

const args = process.argv.slice(2).map(Number);
if (args.length === 0 || args.length === 1) {
	console.log(0);
} else {
	const max = Math.max(...args);
	const secondBiggest = Math.max(...args.filter(x => x < max));
	console.log(secondBiggest);
}
