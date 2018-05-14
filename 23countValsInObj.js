// 23. Write a function that counts the number of times a value occurs in an object.
// var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
// countValuesInObj(obj, 'r') // 2
// countValuesInObj(obj, 'e') // 1

//input: an object of objects and a target value
//output: an integer representing the number of times the value occurs in the obj
//edge cases: return zero if none match

//create a count variable
//use a for-in loop to iterate over the object
//if the value is matched with the target === 
  //increment counter
//if the value is another object
  // call the function again on that nested obj
//return the count outside the for loop
var countValuesInObj = function(obj, value) {
  var numberOccurrences = 0;
  for (var key in obj) {
    if (obj[key] === value) {
      numberOccurrences++;
    }
    else if (typeof obj[key] === 'object') {
      numberOccurrences += countValuesInObj(obj[key], value);
    }
  }
  return numberOccurrences;
};

var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
console.log(countValuesInObj(obj, 'r'));