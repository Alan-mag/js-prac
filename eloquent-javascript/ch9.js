// Regular Expressions

// Regexp Golf

// car and cat
var re1 = new RegExp("car|cat")
console.log(re1.test("popsicle"));
console.log(re1.test("cat's pajamas"));
console.log(re1.test("car to go"));

// Quoting Style
var re2 = /\'\s/; // if single quote followed by space --> replace with single quotes

// Numbers Again