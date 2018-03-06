let list = ['a', 'b', 'c'];

console.log(list.map((letter) => {
  return letter + 'poople'
}));


console.log(list.reduce((a, b) => {
  return a + b + ' op';
}));

console.log([1, 2 , 3, 4].reduce(function(a, b) {
  return a + b;
}, 0));