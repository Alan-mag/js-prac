// Inheritance //

var Mammal = function (name) {
	this.name = name;
};

Mammal.prototype.get_name = function () {
	return this.name;
};

Mammal.prototype.says = function () {
	return this.saying || '';
};

var myMammal = new Mammal('Herb the Mammal');
var name = myMammal.get_name();

var Cat = function (name) {
	this.name = name;
	this.saying = 'meow';
};


// Replace Cat.prototype with a new instance of Mammal
Cat.prototype = new Mammal();

// Augment the new prototype with
// purr and get_name methods.

Cat.prototype.purr = function (n) {
	var i, s = '';
	for (i = 0; i < n; i += 1) {
		if (s) {
			s += '-';
		}
		s += 'r';
	}
	return s;
};
Cat.prototype.get_name = function () {
	return this.says() + ' ' + this.name + ' ' + this.says();
};

var myCat = new Cat('Henry');
var says = myCat.says();
var purr = myCat.purr(5);
var name = myCat.get_name();

console.log(myCat.get_name());
console.log(purr);


// so far, looks a little odd
// add a method method and define an inherits method

/*Function.method('inherits', function (Parent) { // THIS NEEDS FIXING SOMEHOW *****
	this.prototype = new Parent();
	return this;
});*/


var Cat = function (name) {
	this.name = name;
	this.saying = 'meow';
}.
	inherits(Mammal).
	method('purr', function (n) {
		var i, s = '';
		for (i = 0; i < n; i += 1) {
			if (s) {
				s += '-';
			}
			s += 'r';
		}
		return s;
	}).
	method('get_name', function() {
		return this.says() + ' ' + this.name + this.says();
	});


var mammal = function (spec) {
	var that = {}

	that.get_name = function () {
		return spec.name;
	};

	that.says = function () {
		return spec.saying || '';
	};

	return that;
};

var myMammal = mammal({name:'Herb'});
console.log(myMammal);


// new cat object
var cat = function (spec) {
	spec.saying = spec.saying || 'meow';
	var that = mammal(spec);
	that.purr = function(n) {
		var i, s = '';
		for (i = 0; i < n; i += 1) {
			if (s) {
				s += '-';
			}
			s += 'r';
		}
		return s;
	};
	that.get_name = function () {
		return that.says() + ' ' + spec.name + ' ' +  that.says();
	};
	return that;
};

var myCat = cat({name:'Henry'});

// superior method

Object.method('superior', function (name) {
	var that = this,
	    method = that[name];
	    return function () {
	    	return method.apply(that, arguments);
	    };
});


var coolcat = function (spec) {
	var that = cat(spec),
	    super_get_name = that.superior('get_name');
	that.get_name = function (n) {
		return 'like ' + super_get_name() + ' baby';
	};
	return that;
};

var myCoolCat = coolcat({name: 'Bix'});
var name = myCoolCat.get_name();
//         'like meow Bix meow baby'