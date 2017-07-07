// Regular Expressions

// Regexp Golf


// car and cat
var re1 = new RegExp("car|cat")
console.log(re1.test("popsicle"));
console.log(re1.test("cat's pajamas"));
console.log(re1.test("car to go"));

// Quoting Style
var text = "'I'm the cook,' he said, 'it's my job.'";

var re2 = /(^|\W)'|'(\W|$)/g; // if single quote followed by space --> replace with single quotes

console.log(text);
console.log(text.replace(re2, '$1"$2'));
///console.log(text.replace(/(^|\W)'|'(\W|$)/g, '$1"$2'));

// Numbers Again
// come back and review this question
// Fill in this regular expression.
var number = /^(\+|-|)(\d+(\.\d*)?|\.\d+)([eE](\+|-|)\d+)?$/;

// Tests:
["1", "-1", "+15", "1.55", ".5", "5.", "1.3e2", "1E-4",
 "1e+12"].forEach(function(s) {
  if (!number.test(s))
    console.log("Failed to match '" + s + "'");
});
["1a", "+-1", "1.2.3", "1+1", "1e4.5", ".5.", "1f5",
 "."].forEach(function(s) {
  if (number.test(s))
    console.log("Incorrectly accepted '" + s + "'");
});