#!/usr/bin/node
/*
 * script that prints the addition of 2 integers
 *
 * The first argument is the first integer
 * The second argument is the second integer
 * You have to define a function with this prototype: function add(a, b)
 */
let num1 = process.argv[2];
let num2 = process.argv[3];
num1 = parseInt(num1);
num2 = parseInt(num2);
function add (a, b) {
  a = num1;
  b = num2;
  const result = a + b;
  console.log(result);
}
add(num1, num2);
