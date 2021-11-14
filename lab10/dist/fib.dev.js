"use strict";

//Create a memoized version of the following `fibonacci()` recursive method to improve its performance.
var fibonacci = function () {
  var memo = {};

  var calcFibo = function calcFibo(n) {
    var fib;

    if (n in memo) {
      fib = memo[n];
    } else {
      if (n == 0 || n == 1) fib = n;else fib = calcFibo(n - 1) + calcFibo(n - 2);
      memo[n] = fib;
    }

    return fib;
  };

  return calcFibo;
}();

var n = 8;
console.time("Excution time");
console.log("Recursively:The ".concat(n, "th fibonacci number is :").concat(fibonacci(n)));
console.timeEnd("Excution time");