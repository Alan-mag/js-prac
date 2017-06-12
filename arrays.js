// Arrays //

// array literals
var empty = [];
var numbers = [
    'zero', 'one', 'two', 'three', 'four',
    'five', 'six', 'seven', 'eight', 'nine'
];

console.log(empty[1]);
console.log(numbers[1]);

console.log(empty.length);
console.log(numbers.length);

// object literal 
var numbers_object = {
	'0': 'zero', 
	'1': 'one', 
	'2': 'two',
	'3': 'three', 
	'4': 'four', 
	'5': 'five',
	'6': 'six', 
	'7': 'seven', 
	'8': 'eight',
	'9': 'nine'
};

// Js allows a mixture of element types in an array
var misc = [
    'string', 98.6, true, false, null, undefined, ['nested', 'array'],
    {object: true}, NaN, Infinity    
];
console.log('misc array length is ', misc.length);


// Length
var myArray = [];
console.log(myArray.length);

myArray[10000] = true;
console.log(myArray.length) // 100001
// myArray contains one property

// new element can be appeneded to end of array with either length or push
numbers[numbers.length] = 'shi'; // appeneded to end of numbers
console.log(numbers.toString());

numbers.push('go') // appended to numbers
console.log(numbers.toString());

// Delete from array leaves a whole
delete numbers[2];
console.log(numbers.toString());

// splice can take an element out, and moves the rest in position
numbers.splice(2,1);
console.log(numbers.toString());

// When to use array vs object
// RULE:
// When the property names are small sequential integers
// you should use an array. Otherwise, use an object.


// create method for detecting array 

var is_array = function (value) {
	return Object.prototype.toString.apply(value) === '[object Array]';
};

// Methods

// adding array method that will allow computation on an array
Array.method('reduce', function (f, value) {                // NEED TO FIX THIS
	var i;
	for (i = 0; i < this.length; i += 1) {
		value = f(this[i], value);
	}
	return value;
});

// creating array of numbers
var data = [4, 8, 15, 16, 23, 42];

// Define function add and mult that will add and multiply 
// numbers in an array

var add = function(a, b) {
	return a + b;
};

var mult = function (a, b) {
	return a * b;
};

// invoke data's reduce method, passing in 
// add function

var sum = data.reduce(add, 0);
console.log(sum);

var product = data.reduce(mult, 1);
console.log(product);

// Give the data array a total function
data.total = function () {
	return this.reduce(add, 0);
};

total = data.total();
console.log(total);


// Dimensions

Array.dim = function (dimension, initial) {
	var a = [], i;
	for (i = 0; i < dimensions; i += 1){ 
	    a[i] = initial;
	}
	return a;
};

// make an array containing 10 zeros
var myArray = Array.dim(10, 0);

var matrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
];

console.log(matrix[2][1]);

// making a two dimensional array 
for (i = 0; i < n; i += 1) {
	my_array[i] = [];
}

Array.matrix = function (m, n, initial) {
	var a, i, j, mat = [];
	for (i = 0; i < m; i += 1) {
		a = [];
		for (j = 0; j < n; j += 1) {
			a[j] = initial;
		}
		mat[i] = a;
	}
	return mat;
};

// 4 * 4 array filled with zeros
var myMatrix = Array.matrix(4, 4, 0);

console.log(myMatrix[3][3]);

// method to make identity matrix

Array.identity = function (n) {
	var i, mat = Array.matrix(n, n, 0);
	for (i = 0; i < n; i += 1) {
		mat[i][i] = 1;
	}
	return mat;
};

myMatrix = Array.identity(4);

console.log(myMatrix[3][3]);

