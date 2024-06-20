#!/usr/bin/node
/*
 * script that computes and prints a factorial
 *
 * The first argument is integer (argument can be cast as integer) used for computing the factorial
 * Factorial of NaN is 1
 * You must do it recursively
 * You must use a function
 */
let arg = process.argv[2];
arg = parseInt(arg);
function factorial (num) {
  if (num === 0) {
    return (1);
  } else if (num > 1) {
    return (num * factorial(num - 1));
  } else {
    return (1);
  }
}
const number = factorial(arg);
console.log(number);
