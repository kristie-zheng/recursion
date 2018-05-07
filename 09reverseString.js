// 9. Write a function that reverses a string.
  var reversedString = '';
var reverse = function(string) {
  if (string.length === 0) {
    return reversedString;
  }
  else if (string.length > 0){
    reversedString += string[string.length-1];
    string = string.slice(0, string.length-1)
    return reverse(string);
  }
};

console.log(reverse('halsey'));
/*
input: string
output: string where chars are reversed
constraints: none
edge cases: empty string
*/

//create am empty string variable
//add the character at str.length-1 to that variable
//slice the last char off, then pass the newly shortened string to the function again
//when the string's length is zero stop passing it to the function
//return reversed string