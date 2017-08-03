// install figlet npm
//
var figlet = require('figlet');
figlet.text("Hello World!", function(error, data) {
    if (error) {
        console.error(error);
    } else {
        console.log(data);
    }
});