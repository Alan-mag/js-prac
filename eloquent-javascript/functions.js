'use strict';

var power = function (base, exponent) {
    var result = 1;
    for (var count = 0; count < exponent; count++) {
        result = result * base;
    }
    return result;
};

var hideRandomLetter = function(string) {
    var rand = Math.floor(Math.random() * string.length);
    var letters = [];
    for (var i = 0; i < string.length; i++) {
        letters.push(string[i]);
    }
    var splicedLetter = letters.splice(rand, 1);
    var stringf = letters.join("");
    return stringf;
};

// closure
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}
var twice = multiplier(2);
console.log(twice(12));

// recursion
function findSolution(target) {
    function find(start, history) {
        if (start == target)
            return history;
        else if (start > target)
            return null;
        else 
            return find(start + 5, "(" + history + " + 5)") ||
                   find(start * 3, "(" + history + " * 3)");
    }
    return find(1, "1");
}

console.log(findSolution(24));
console.log(findSolution(88));
console.log(findSolution(34));


console.log(power(3,4));
console.log(hideRandomLetter("Basketball"));

console.log("//////// Chapter Problems \\\\\\\\\\\\\\\\");
// chapter problems

function min(a, b) {
    if (a < b)
        return a;
    else (b < a)
        return b
};
console.log(min(12,6));

function isEven(n) {
    function iterate(start) {
        if (start == 0)
            return true;
        else if (start == 1)
            return false;
        else 
            return iterate(start-2);
    }
    return iterate(Math.abs(n));
}

function isEvenBookAnswer(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
}

console.log(isEven(71));
console.log(isEven(72));
console.log(isEven(73));
console.log(isEven(74));
console.log(isEven(-1));


function countBs(string) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) == "B") {
            count++;
        }
    }
    return count;
}

console.log(countBs("BBC"));

function countChar (string, character) {
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        if (string.charAt(i) == character) {
            count++;
        }
    }
    return count;
}

console.log(countChar("Mississippi", "M"));
console.log(countChar("Mississippi", "p"));
console.log(countChar("Mississippi", "s"));
console.log(countChar("Mississippi", "i"));