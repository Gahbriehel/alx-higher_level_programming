#!/usr/bin/node
const fs = require('fs');

const arg1 = process.argv[2];
const arg2 = process.argv[3];
const destination = process.argv[4];

let file1 = fs.readFile('arg1', (err, data) => {
	if (err) {
		throw (err);
	}
})
let file2 = fs.readFile('arg2', (err, data) => {
        if (err) throw err;
});
console.log(file1);
/*
file1.toString();
file2.toString();
result = file1 + file2;
fs.writeFile('destination', result, (err) => {
	if (err) throw err;
})
