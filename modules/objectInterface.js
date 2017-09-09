myCheckBook = (function() {
  // Current balance
  var balance = 1200;

  // functions to be exposed from the outside
  return {
    getBalance: function() {
      return balance;
    },

    depositMoney: function(deposit) {
      balance += deposit;
    },

    withdrawMoney: function(withdraw) {
      if (withdraw < balance && balance > 0) {
        balance -= withdraw;
      }
    }
  };
})();

console.log(myCheckBook.getBalance());
myCheckBook.depositMoney(1000);
console.log(myCheckBook.getBalance());
myCheckBook.withdrawMoney(400);
console.log(myCheckBook.getBalance());
