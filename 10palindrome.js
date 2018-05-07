// 10. Write a function that determines if a string is a palindrome.
var reversedString = '';
var palindrome = function(string) {
  var reverseOfString = reverse(string);
  if (reverseOfString === string) {
    return true;
  }
  return false;
};

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

console.log(palindrome('racecar'));

//input: string
//output: boolean
//constraint: none
//edge cases: empty string

//use reverse function to make a reversed version of the string
//compare the forward and reverse strings for equality
//if yes, return true. else false