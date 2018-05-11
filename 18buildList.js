// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  var results = [];
  if (length === 0) {
    return results;
  } else {
    results.push(value);
    return results.concat(buildList(value, length-1));
  }
};

console.log(buildList('dolly', 9));
//input: a value (any) and an integer represeting the length of the resulting list
//output: an array of a certain length populated by the value
//edge cases: none

//have a result array
//base case: when length = 0, return the array
//push value into the array
//concat the array to the result of invoking the function with a decremented length