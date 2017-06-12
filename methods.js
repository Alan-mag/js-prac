// Methods //

// Array methods //
var a = ['a', 'b', 'c'];
var b = ['x', 'y', 'z'];

var c = a.concat(b, true);
console.log(c);

a.push('d');
var d = a.join('');

console.log(d);


var e = a.pop();
console.log(e);

var f = a.push(b, true);
console.log(a);

var g = a.reverse();
console.log(a);

var h = a.shift();
console.log(a);

var i = a.slice(2);
console.log(i);

// sort

var m = ['aa', 'bb', 'a', 4, 8, 15, 16, 23, 42];
m.sort(function (a, b) {
	if (a===b) {
		return 0;
	}

	if (typeof a === typeof b) {
		return a < b ? -1 : 1;
	}
	return typeof a < typeof b ? -1 : 1;
});

console.log(m);

// splice
var w = ['a', 'b', 'c'];

var r = w.splice(1,1, 'ache', 'bug');
console.log(r);
console.log(w);

// unshift

var u = w.unshift('ikio', 'beoobo');
console.log(w);

// function method apply

// Number methods

console.log(Math.PI.toExponential(12));

console.log(Math.PI.toFixed(4)); // converted to string in decimal form

console.log(Math.PI.toPrecision(3)); // number to string parameter controls number of digits of precision

console.log(Math.PI.toString(2));

// Object methods

var z = {member: true};
var t = z.hasOwnProperty('member');
console.log(t);

// String Methods
var name = 'Milkman';
var initial = name.charAt(0);
console.log(initial);

code = name.charCodeAt(0);
console.log(code);

var s = 'C'.concat('a', 't');
console.log(s);

var p = name.indexOf('a');
console.log(p);

var l = name.lastIndexOf(name);
console.log(l);

console.log(name);
var replacing = name.replace('M', 'S');
console.log(replacing);


// split
var names = "Johnny ricko susan";
var rio = names.split(' ');
console.log(rio);

