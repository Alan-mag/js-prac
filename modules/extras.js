// Example 1 - Anonymous closure
(function() {
  var myGrades = [93, 90, 77, 80, 30];

  var average = function() {
    var total = myGrades.reduce(function(accumulator, item) {
      return accumulator + item;
    }, 0);

    return "Your average grade is " + total / myGrades.length + ".";
  };

  var failing = function() {
    var failingGrades = myGrades.filter(function(item) {
      return item < 70;
    });

    return "You failed " + failingGrades.length + " times.";
  };

  console.log(average());
  console.log(failing());
})();
