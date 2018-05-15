// 27. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(array) {
  var capitalizedWords = [];
  if (array.length === 0) {
    return capitalizedWords;
  }
  capitalizedWords.push(array[0].toUpperCase());
  array = array.slice(1);
  return capitalizedWords.concat(capitalizeWords(array));
};

var myArray = ['all', 'about', 'that', 'bass'];
console.log(capitalizeWords(myArray));

//input: array of strings
//output: array of capitalized strings
