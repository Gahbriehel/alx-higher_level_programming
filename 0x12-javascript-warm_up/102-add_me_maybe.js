#!/usr/bin/node
exports.addMeMaybe = function (number, theFunction) {
	result = number + 1;
	theFunction(result);
}
