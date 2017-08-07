// chp 1 - 4
function range(start, end, step) {
  if (step == null) step = 1;
  var array = [];

  if (step > 0) {
    for (var i = start; i <= end; i += step)
      array.push(i);
  } else {
    for (var i = start; i >= end; i += step)
      array.push(i);
  }
  return array;
}

function sum(array) {
  var total = 0;
  for (var i = 0; i < array.length; i++)
    total += array[i];
  return total;
}

console.log(range(1, 10));

console.log(range(5, 2, -1));

console.log(sum(range(1, 10)));

console.log(sum(range(1, 100)));

function reverseArray(array) {
  var output = [];
  for (var i = array.length - 1; i >= 0; i--)
    output.push(array[i]);
  return output;
}

function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {  // array.length = 11
    var old = array[i];                                     // old = 0
    array[i] = array[array.length - 1 - i];                 // 0 = array[10]
    array[array.length - 1 - i] = old;                      // last element in array now 0 <-- first element
  }                                                         // array[10] = 0
  return array;
}

console.log(reverseArray(["A", "B", "C"]));
console.log(reverseArray(['Ben', 'Jerry', 'Batman', 'Robin']));
var arrayValue = [1, 2, 3, 4, 5];
console.log(reverseArrayInPlace(arrayValue));


// function arrayToList(array) {
//   var list = {};
//   for (var i = 0; i < array.length; i++) 
//   	var entry = {value: array[i], rest: {value: array[i + 1], rest: array[i + 2]}};
//   	list.push(entry);  
//   return list;
// }

function arrayToList(array) {
  var list = null;
  for (var i = array.length - 1; i >= 0; i--)
    list = {value: array[i], rest: list};
  return list;
}

function listToArray(list) {
  var array = [];
  for (var node = list; node; node = node.rest)
    array.push(node.value);
  return array;
}

function prepend(value, list) {
  return {value: value, rest: list};
}

function nth(list, n) {
  if (!list)
    return undefined;
  else if (n == 0)
    return list.value;
  else
    return nth(list.rest, n - 1);
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 1));
// 20

console.log(listToArray({value: 10, rest: {value: 20, rest: null}}));