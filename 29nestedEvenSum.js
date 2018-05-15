// 29. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
  var sum = 0;
  for (var property in obj) {
    if (typeof obj[property] === 'number') {
      if (obj[property] % 2 === 0) {
        sum += obj[property];
      }
    }
    else if (typeof obj[property] === 'object') {
      sum += nestedEvenSum(obj[property]);
    } 
  }
  return sum;
};

var obj1 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};
console.log(nestedEvenSum(obj1));
//input: a nested object with numerical values
//output: a numerical value representing the sum of even numbers

//create a sum variable
//use a for-in loop to iterate over the obj
//if the value is a number
  //if the value is even
    //add that value to the sum
//else if the value is an object (typeof)
  //add the running total and call the function on that value
//return sum 