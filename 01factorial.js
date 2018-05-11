//input: an integer
//output: integer representing the multiplication of n * n-1 * ... 1
//constraints: must be positive int
//edge cases: no

var factorial = function (n) {
  if (n === 1) {
    return 1;
  }
  else {
    return n * factorial(n-1);
  }
}

console.log(factorial(150))