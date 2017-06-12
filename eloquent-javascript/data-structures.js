'use strict';

console.log("//////// Chapter Problems \\\\\\\\\\\\\\\\");

function range(start, end, increment) {
    if (increment == null) increment = 1;
    var array = [];
    
    if (increment < 0) {
        for (var i = start; i >= end; i+=increment)
            array.push(i);
    } else {
        for (var i = start; i <= end; i+=increment)
            array.push(i);
    }
    return array;
}

function sum(arrayOfNumbers) {
    var total = 0;
    for (var i = 0; i < arrayOfNumbers.length; i++) {
        total+=arrayOfNumbers[i];
    }
    return total;
}


console.log(range(1, 10));
console.log(range(1, 10, 3));
console.log(range(5, 2, -1));
console.log(sum(range(1, 10)));
