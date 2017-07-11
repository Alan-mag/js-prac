'use strict';

// Build a Table
function buildTable(arr) {
    // Loop through number of objects in arr
    for (var i = 0; i < arr.length; i++) {
        // build table element
        var table = document.createElement(table);
        // build tr tag
        var tr = document.createElement(tr);
        // loop through object properties and set
        // table cells to property values
        arr.forEach(function(obj) {
            // use Object.keys in here somehow
        }, this);
        // end tr
        // end table
    }
};