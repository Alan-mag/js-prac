'use strict';

var directionModule = require('./direction');
console.log(directionModule);

// console.log(directionModule.randomElement(["4","5","6"]));


var testModule = (function() {
    console.log(directionModule.randomElement(["4","5","6"]));
}());