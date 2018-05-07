// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.
var total = 0;
var multiply = function(x, y) {
  if (y === 0) {
    return total;
  }
  else {
    total += x;
    return multiply(x, y-1);
  }
};

console.log(multiply(100,2))

//input: two ints
//output: one int
//edge: none
//constraints: none

//add x to x
//decrement y
//if y = 0 return 
