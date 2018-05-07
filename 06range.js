//input: two integers 
//output: an array of integers between x and y (noninclusive of y)
//constraints: none
//edge cases: single integer

/*
Transformation steps
create an empty results array
push number into array
*/
var results = [];
var range = function(x, y) {
  console.log(x);
  if (x === y) {
    return results;
  }
  else
  {
    results.push(x);
    return range(x+1, y);
  }
}

console.log(range(1, 9));