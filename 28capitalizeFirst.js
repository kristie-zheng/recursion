
// 28. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car','dog','banana']); // ['Car','Dog','Banana']
var capitalizeFirst = function(array) {
  var capitalizedWords = [];
   if (array.length === 0) {
    return capitalizedWords;
  }
  var currentWord = array[0];
  currentWord = currentWord[0].toUpperCase() + currentWord.slice(1);
  capitalizedWords.push(currentWord);
  array = array.slice(1);
  return capitalizedWords.concat(capitalizeFirst(array));
};

console.log(capitalizeFirst(['cat', 'dog', 'rabbit']));


//input: an array of strings
//output: an array of strings where each first letter is capitalized

//make a capitalizedWords array
//use string methods to get the first char of string at array[0]
  //capitalize the first letter and concat it to the rest of the string (sliced) in lowercase
  //set it to capital
  //push that first word into the array
//base case: if array length is zero
  //return that capitalizedWords array
//slice the first word out of the array
//recursive: return the caoitalizedWords array concatted to the result of calling the shortened array to capitalizeFirst


