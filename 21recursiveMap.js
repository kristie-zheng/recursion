
// 21. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]

//input: an array and a function (callback) that can be applied to the elements in the array
//output: a new, transformed version of the array 
//edge cases: if the callback is identity, return the same array

//take the array and pass the first element to the callback
//push it into results array
//slice the first element out of the array
//pass the now-shortened array into the rMap function
//return the results array + the results of the recursion

var rMap = function(array, callback) {
  var results = [];
  if (array.length === 0) {
    return results;
  }
  results.push(callback(array[0]));
  array = array.slice(1);
  return results.concat(rMap(array, callback));
};


var timesTwo = function(element) {
  return element * 2;
};

console.log(rMap([1,2,3], timesTwo));