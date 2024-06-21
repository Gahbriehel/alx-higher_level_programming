#!/usr/bin/node
const oldArray = require('./100-data');
const list = oldArray.list;
const myList = list.map((index, x) => x * index);
console.log(list);
console.log(myList);
