
// adding random function to array prototype object
"use strict";

Array.prototype.randomElement = function () {
    return this[Math.floor(Math.random() * this.length)]
}

//var myRandomElement = myArray.randomElement()


var characteristics_vocab = ['humorous', 'sociable', 'mean', 'awkward', 'shy', 'responsible', 'brave', 'energetic', 'honest', 'helpful', 'goofy', 'Hard-working', 'Humble'];

var pick_words = function (array) {
    // set variables
	var i; 
	var words =[];
	var numberofwordstopick = 3;
	var rand;

    if (numberofwordstopick >= array.length) {
    	throw {
			name: 'NumberError',
			message: 'Number of words to randomly select exceeded limit of array'
		};
	}
		for (i = 0; i < numberofwordstopick; i++) {
			var index = [Math.floor(Math.random() * array.length)];
			rand = array[index];
			words+=rand;
			array.splice(index - 1, index);  // Splicing causes array to cut out elements in array
		}
	console.log(words);
	return words;
}

pick_words(characteristics_vocab);

