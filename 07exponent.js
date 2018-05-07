// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64. Here, 8 is the base and 2 is the exponent.

//input: two integer numbers, the first number represents the base and the second represents the exponent
//output: integer representing base^power
//edge cases: negatives, base zero = 0 and power of zero = 1 
//constraints: none

/*
Transformation steps:
to the first power = return just the number
create a total
while exponent > 1 multiply total * base
decrement exponent
return total
*/


var exponent = function(base, exp) {
  if (exp === 0) {
    return 1;
  }
  else {
    
    return base * exponent(base, exp-1);
  }
}

console.log(exponent(2,5))