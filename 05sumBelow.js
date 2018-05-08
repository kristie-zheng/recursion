// 5. Sum all integers below a given integer NOT INCLUSIVE OF THAT INTEGER.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  if (n === 1) {
    return 0;
  }
  else {
    return n-1 + sumBelow(n-1);
  }
};


console.log(sumBelow(6))
//input: an integer
//output: an integer representing sum btween 1-n
//edge cases: negative ints
//constraints: none

//method
//make total variable
//if n is greater than zero, add to the total
//subtract 1 from n and call sumBelow again