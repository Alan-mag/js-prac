"use strict";

//var worldModule = require("./world");

var directionModule = (function() {

    var directionObject = {};

    // var directions = {
    //     "n":  new Vector( 0, -1),
    //     "ne": new Vector( 1, -1),
    //     "e":  new Vector( 1,  0),
    //     "se": new Vector( 1,  1),
    //     "s":  new Vector( 0,  1),
    //     "sw": new Vector(-1,  1),
    //     "w":  new Vector(-1,  0),
    //     "nw": new Vector(-1, -1)
    // };

    var directionNames = "n ne e se s sw w nw".split(" ");
    
    function privateFunction() {
        console.log("This function is a private function");
    };

    directionObject.randomElement = function(array) {
        return array[Math.floor(Math.random() * array.length)];
    };

    directionObject.dirPlus = function(dir, n) {
        var index = directionNames.indexOf(dir);
        return directionNames[(index + n + 8) % 8];
    }
    return directionObject;
}());

module.exports = directionModule;

// var directionModule = (function() {

//     var directions = {
//         "n":  new Vector( 0, -1),
//         "ne": new Vector( 1, -1),
//         "e":  new Vector( 1,  0),
//         "se": new Vector( 1,  1),
//         "s":  new Vector( 0,  1),
//         "sw": new Vector(-1,  1),
//         "w":  new Vector(-1,  0),
//         "nw": new Vector(-1, -1)
//     };

//     var directionNames = "n ne e se s sw w nw".split(" ");
    
//     function privateFunction() {
//         console.log("This function is a private function");
//     };

//     return {
//         publicAccessFunction : function () {
//             console.log("This is an accessible function")
//         },

//         randomElement : function (array) {
//             return array[Math.floor(Math.random() * array.length)];
//         },

//         dirPlus : function(dir, n) {
//             var index = directionNames.indexOf(dir);
//             return directionNames[(index + n + 8) % 8];
//         }
//     }; // end functions scope
// }());

// module.exports = directionModule;

//console.log(directionModule.randomElement(["2", "33", "11"]));