// javascript practice

// Writing comments

// single line comments

/* 
   Multiple line
   comments is like this
 */

 // TIPS //
 console.log("TIPS");
 console.log("Always use === when comparing, not ==");

 /*************************GRAMMAR******************************/
 //some variables for playing with
var kiko = 2;
var bobo = 9;

 // Numbers //
console.log("Numbers");
var singleNuminjs = (1 == 1.0);

console.log("There is one int type in javascript, right? " + singleNuminjs);

 var numbExponent = (1e2 == 100);

 console.log("numbExponent = " + numbExponent);

 console.log("There are Math methods that work on numbers in js as well. \nFor example, math.floor 54.6 rounded down to nearest whole number is " + Math.floor(54.6));

 // Strings //
 console.log("Strings");
 console.log("\"\Strings can be in double quotes\"");

 console.log('\'\String can be in single quotes\'');


 var dog = 'd' + 'o' + 'g' === 'dog';

 console.log(dog);

 console.log("Strings also have methods - dog toUpperCase = ", "dog".toUpperCase());


 // Statements //
console.log("Statements");

	console.log("expression: x = 7 ");

		console.log("disruptive statement: break, continue, return");
		console.log("Ternary operators: condition ? expr1 : expr2 ");
			var stop = false;
			var age = 23;

			age > 18 ? (
			    console.log("OK, you can go.")
			) : (
			    stop = true,
			    console.log("Sorry, you are much too young!")
			);

	console.log("TRY");

		try {
			console.log(MogChathra);
		} catch(err) {
			console.log("MogChathra is not defined");
		}

	console.log("IF");

		if (kiko <= 2) {	
			console.log(Math.pow(kiko, 3));
		}
	console.log("SWITCH");
	//The getDay() method returns the weekday as a number between 0 and 6. (Sunday=0, Monday=1, Tuesday=2 ..)
		switch (new Date().getDay()) {
		    case 0:
		        day = "Sunday";
		        break;
		    case 1:
		        day = "Monday";
		        break;
		    case 2:
		        day = "Tuesday";
		        break;
		    case 3:
		        day = "Wednesday";
		        break;
		    case 4:
		        day = "Thursday";
		        break;
		    case 5:
		        day = "Friday";
		        break;
		    case 6:
		        day = "Saturday";
		        break;
		    default:
		    	day = "not possible";
		    	break
		}
			console.log(day);

	console.log("WHILE");
		var nibi = 3;
		while(bobo > nibi) {
			console.log("bob is bigger than nibi");
			nibi++;
		}
	console.log("FOR");
		for(i = 3; i <= 5; i++) {
			console.log(i);
		}
	console.log("DO");
		var j = 0;
		do {
		    console.log("The number is " + j);
		    j++;
		}
		while (j < 10);

/*********CHAPTER 3**************/

/**********Objects***************/

// Object Literals

var empty_object = {};

var stooge = {
	"first_name": "Peppy",
	"last_name": "Longstocking"
};


// Have to use comma to concatenate with string, otherwise string will attempt to add object (I believe)
console.log("Object printed ", stooge);

// Objects can nest into other objects
var flight = {
	airline: "Oceanic",
	number: 815,
	departure: {
		IATA: "SYD",
		time: "2003-09-23 14:55",
		city: "Sydney"
	},
	arrival: {
		IATA: "LAX",
		time: "2003-9-24 9:00",
		city: "Los Angeles"
	}
};

console.log("flight object and properties ", flight);

console.log(flight.departure.city);

// update airline property of flight object
flight['airline'] = 'Delta';

console.log(flight.airline);

// Object reference
var a = {}, b = {}, c = {}; // a, b and c objects refer to different empty ojects

a = b = c = {};              // a, b and c all refer to the same object


// Prototype

if (typeof Object.create !== 'function') {
	Object.create = function (o) {
		var F = function () {};
		F.prototype = o;
		return new F();
	};
}
var another_stooge = Object.create(stooge);
another_stooge['first_name'] = 'Billy';
another_stooge['nickname'] = 'Vicktorisko';

console.log("another_stooge name ", another_stooge.first_name);
console.log("another_stooge nickname ", another_stooge.nickname);
console.log("stooge name ", stooge.first_name);


// Reflection //
console.log(typeof flight.number);
console.log(typeof flight.airline);

// Any property of the prototype chain can produce a value
console.log(typeof flight.toString) // function
console.log(typeof flight.constructor) // function

// In order to fix this, use hasOwnProperty method
console.log(flight.hasOwnProperty('number'));
console.log(flight.hasOwnProperty('constructor'));


// Delete
delete another_stooge.nickname;
console.log("another_stooge nickname ", another_stooge.nickname);

// Global Abatement with single global variable for application

var MYAPP = {};

MYAPP.car = {
	"company": "Tesla",
	"model": "Model S"
};

console.log(MYAPP.car.model);


/*******Chapter 4************/
/****************Functions*********************/


// INVOCATION

// function literal add 
var add = function (a,b) { // notice it is anonymous function
	return a + b;
};

console.log(add(9,34));


// METHOD INVOCATION PATTERN
var myObject = {
	value: 0,
	increment: function (inc) {
		this.value += typeof inc === 'number' ? inc : 1;
	}
};

myObject.increment();
console.log(myObject.value);

myObject.increment(2);
console.log(myObject.value);

// FUNCTIONAL INVOCATION PATTERN
myObject.double = function () {
	var that = this;

	var helper = function () {
		that.value = add(that.value, that.value);
	};

	helper();
};

myObject.double();
console.log(myObject.value);


// CONSTRUCTOR INVOCATION PATTERN

// Creat constructor function called Quo.
// It makes an object with a status property

var Quo = function (string) {
	this.status = string;
};

// Give all instances of Quo a public method
// called get_status
Quo.prototype.get_status = function () {
	return this.status;
};

// Make instance of Quo.
var myQuo = new Quo("confused");
console.log(myQuo.get_status());

// APPLY INVOCATION PATTERN

// Make array of 2 numbers and add them

var array = [3,4];
var sum = add.apply(null, array); 

// Make an object with a status member
var statusObject = {
	status: 'A-OK'
};

var status = Quo.prototype.get_status.apply(statusObject);
console.log(status);

// Arguments
// functions can have unspecified number of parameters

var sum = function () {
	var i, sum = 0;
	for (i = 0; i < arguments.length; i += 1) {
		sum += arguments[i];
	}
	return sum;
};

console.log(sum(43,3,12,32,90,45,5,2,7,45,3,7,2,0)); // 296


// Dealing with errors and exceptions
var subtract = function (a,b) {
	if (typeof a !== 'number' || typeof b !== 'number') {
		throw {
			name: 'TypeError',
			message: 'One or more of the paramaters entered was not a number.'
		};
	}
	return a - b;
}


// console.log(subtract("apple", 423)); // this throws the error and outputs the message
console.log(subtract(423, 233));

// try catch applied to make error more clear
var try_it = function () {
	try {
		subtract("seven");
	} catch (e) {
		console.log(e.name + ": " + e.message);
	}
}

try_it();



// Augmenting Types

// augmenting function prototype so that we 
// no longer need to type prototype property
Function.prototype.method = function (name, func) {
	this.prototype[name] = func;
	return this;
};

// add integer method to Number.prototype
// method uses either Math.ceil or Math.floor 
// depending on the sign of the number.

Number.method('integer', function () {
	return Math[this < 0 ? 'ceil' : 'floor'](this);
});

console.log((-10 / 3).integer());

// Javascript lacks method that removes spaces from the end of a string,
// so let's write one. 
String.method('trim', function () {
	return this.replace(/^\s+|\s+$/g, ''); // uses regular expression
});

console.log("neat         ".trim() + " to be here.");


// Recursion //

var hanoi = function hanoi(disc, src, dst, aux) {
	if (disc > 0) {
		hanoi(disc - 1, src, dst, aux);
		console.log('Move disc ', disc, ' from ', src, ' ', dst);
		hanoi(disc - 1, aux, src, dst);
	}
};

hanoi(3, 'Src', 'Aux', 'Dst');

// Scope //

var foo = function () {
  var a = 3, b = 5;

  var bar = function () {
    var b = 7, c = 11;
// At this point, a is 3, b is 7, and c is 11
    a += b + c;
// At this point, a is 21, b is 7, and c is 11
  };
// At this point, a is 3, b is 5, and c is not defined
  bar();
// At this point, a is 21, b is 5
};


// Closure //

// myobject2 as closure

// we are assigning result of invoking
// myObject2 function
var myobject2 = (function () {  // function returns an object containing two methods, and those methods
	var value = 0;				// enjoy the privilege of access to the value variable

	return {
		increment: function (inc) {
			value += typeof inc === 'number' ? inc : 1;
		},
		getValue: function () {
			return value;
		}
	};
}());


// quo function using closure
// it makes an object with
// a get_status method and a private
// status property.

var quo = function(status) {
	return {
		get_status: function() {
			return status;
		}
	}
};

// make instance of quo.
var myQuo = quo("amazed");

console.log(myQuo.get_status());

// Callbacks //
// explaining asynchronous requests pg. 40

// Module //

var serial_maker = function() {

	// Produce an object that produces unique strings. a
	// unique string is made up of two parts: a prefix
	// and a sequence number. The object comes with 
	// methods for setting the prefix and sequence
	// number, and a gensym method that produces unique 
	// strings.

	var prefix = '';
	var seq = 0;
	return {
		set_prefix: function(p) {
			prefix = String(p);
		},
		set_seq: function (s) {
			seq = s;
		},
		gensym: function() {
			var result = prefix + seq;
			seq += 1;
			return result;
		}
	};
};


var seqer = serial_maker();
seqer.set_prefix('Q');
seqer.set_seq(1000);
var unique = seqer.gensym();
console.log(unique);
console.log(seqer);

// Cascade //
// example
/* getElement('myBoxDiv')
	.move(350,100)
	.width(100)
	.height(100)
	.color('red')
	.on('mousedown', function (m) {
		this.startDrag(m, this.getNinth(m));
	})
	etc....
*/


// Currying //
// allows us to produce a new function by combining a function and an argument

Function.method('curry', function () {
	var slice = Array.prototype.slice,
	args = slice.apply(arguments),
	that = this;
	return function () {
		return that.apply(null, args.concat(arguments));
	};
});

var add1 = add.curry(1);
console.log(add1(4));


// Memoization //

var memoizer = function (memo, formula) {
	var recur = function (n) {
		var result = memo[n];
		if (typeof result !== 'number') {
			result = formula(recur, n);
			memo[n] = result;
		}
		return result;
	};
	return recur;
};

// fibonacci using memoizer
var fibonacci = memoizer([0, 1], function (recur, n) {
	return recur(n - 1) + recur(n - 2);
});



// Dates //
var date = new Date();
console.log((date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear());
