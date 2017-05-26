function sum(a, b) {
	return a + b;
}

function subtract(a, b) {
	return a - b;
}

function multiply(a, b) {
	return a*b;
}

function divide(a, b) {
	
	if(b===0){
		if(a===0)
			return "Can't Perform";
		return "Infinity";
	}
	return a/b;
}

module.exports = {
	sum: sum ,
	subtract: subtract,
	multiply: multiply,
	divide: divide
}


/*exports.sum = function (a, b) {
  return a + b;
}*/
// exports.sum = (a, b) => a + b;
