// Regular Expressions Regexp //

var parse_number = /^-?\d+(?:\.\d*)?(?:e[+\-]?\d+)?$/i;

var test = function (num) {
	console.log(parse_number.test(num));
};

test('1');
test('number');
test('98.6');
test('132.21.86.100');
test('123.45E-67');
test('123.45D-67');


// Regexp group

// Capturing //
// ()
// characters that match the group will be captured

// Noncapturing //
// prefix (?:
// simply matches, does not capture matched text

// Positive lookahead //
// prefix (?=
// like noncapturing group, but text is rewound to where the group started, 
// effectively matching nothing.

// Negative lookahead //
// prefix (?!
// positive lookahead group, except it matches only if it fails to match.

