//input: an integer
//output: integer representing the multiplication of n * n-1 * ... 1
//constraints: must be positive
//edge cases: no

var total = 1;
var factorial = function (n) {
  if (n === 1 || n === 0) {
    return 1;
  }
  else {
    return n * factorial(n-1);
  }
}

console.log(factorial(3))