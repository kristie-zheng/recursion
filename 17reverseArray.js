// 17. Reverse the order of an array
var reverseArr = function(array) {
  var results = [];
  if (array.length === 0) {
    return [];
  }
  else {
    results.push(array[array.length-1]);
    array = array.slice(0, array.length-1);
    return results.concat(reverseArr(array));
  }
};

console.log(reverseArr([1,2,3]))
console.log(reverseArr(['j','a','m','e','s']))
//input: an array
//output: a new array
//edge cases: none

//make a results array
//base case: when the array's length is 0, return empty array
//push the last letter into that array
//slice the last letter
//concatenate that array to the recusive call of the now-sliced array