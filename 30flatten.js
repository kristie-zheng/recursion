// 30. Flatten an array containing nested arrays.
// flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(array) {
  var flattenedArray = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === false) {
      flattenedArray.push(array[i]);
    }
    else {
      flattenedArray = flattenedArray.concat(flatten(array[i]));
    }
  }
  return flattenedArray;
};

console.log(flatten([1,[2],[3,[[4]]],5])); // [1,2,3,4,5]

//input: an array containing more arrays
//output: a non-nested array
//edge cases: undefined, null values

//create a flattenedArray variable
//use a for loop to iterate over the array
  //if the value is not an array
    //push that value into the flattedArray variable
  //else if the value is an array
    //call the flattedArray on it
//return the flattenedArray