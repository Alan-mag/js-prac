'use strict';

// Chapter 14

// Censored Keyboard
// get input value
var field = document.querySelector("input");
var val = field.value();

// check it input value contains q, w or x
for (var i = 0; i < val.length; i++) {
    if (val[i] == "Q" || "W" || "X") {
        event.preventDefault();
        console.log("reject");
    };
};

// Mouse Trail



// Tabs