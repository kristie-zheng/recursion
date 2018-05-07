// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var total = 0;
var multiply = function(x, y) {
  if (y < 1) {
    return total + (x*y);
  }
  else {
    total += x;
    return multiply(x, y-1);
  }
};

console.log(multiply(75.5, 2.5));

//input: two numbers (ints and flaots)
//output: one value representing x multiplied by y
//edge: none
//constraints: none

//add x to x
//decrement y
//if y <1 return total + the "remainder", which is x*current decimal value of y
