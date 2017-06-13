// abstraction of function on a loop
// Example:

// function logEach(array) {
//     for (var i = 0; i < array.length; i++) {
//         console.log(array[i]);
//     }
// }

function forEach(array, action) {
    for (var i = 0; i < array.length; i++)
        action(array[i]);
}

forEach(["Wampeter", "Foma", "Granfalloon"], console.log);


// filter function on arrays
function filter(array, test) {
  var passed = [];
  for (var i = 0; i < array.length; i++) {
    if (test(array[i]))
      passed.push(array[i]);
  }
  return passed;
}

var numbers = ["4","5","6","4"];

console.log(numbers.filter(function(number) {
    return number == 4;
}));



// The map method transforms an array by applying a function to all of its 
// elements and building a new array from the returned values. The new array 
// will have the same length as the input array, but its content will 
// have been “mapped” to a new form by the function.

function map(array, transform) {
    var mapped = [];
    for (var i = 0; i < array.length; i++) {
        mapped.push(transform(array[i]));
    return mapped;
    }
}

var overFive = numbers.filter(function(number) {
    return number > 5;
});

console.log(map(overFive, function(number) {
    return number;
}));

// reduce method
function reduce(array, combine, start) {
    var current = start;
    for (var i = 0; i < array.length; i++) 
        current = combine(current, array[i]);
    return current;
}

console.log([1, 2 , 3, 4].reduce(function(a, b) {
    return a + b;
}, 0));

// get unique elements from array
// -- make this abstract --
var unique = numbers.filter(function(elem, index, self) {
    return index == self.indexOf(elem);
});

function unique(elem, index, self) {
    return index == self.indexOf(elem);
}

console.log(unique);

// Chapter questions
var arrays = [[1, 2, 3], [4, 5], [6]];

console.log(arrays.reduce(function(a, b){
    return a.concat(b);
}, []));

var differences = ancestry.filter(function(person) {
    return byName[person.mother] != null; 
}).map(function(person) {
    return person.born - byName[person.mother].born;
});

console.log(average(differences));
