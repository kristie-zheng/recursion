// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4

/*
input: two integers, one is the divisor and one is the dividend
output: integer representing the modulo
edge: divide by zero
constraint: none
*/

//subtract y from x
//base case is when x is less than y

var modulo = function(x, y) {
  if (x < y) {
    return x;
  }
  else {
    x = x - y;
    return modulo(x, y);
  }
};

console.log(modulo(5,2))