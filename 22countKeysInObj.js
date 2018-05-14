
// 22. Write a function that counts the number of times a key occurs in an object.
// var obj = {{},
 // {'e':{'x':'y'},
 // 't':{'r':{'e':'r'},
 // 'p':{'y':'r'}},
 // 'y':'e'};
// countKeysInObj(obj, 'r') // 1
// countKeysInObj(obj, 'e') // 2
var countKeysInObj = function(obj, key) {
  var numberOccurrences = 0;
  if (Object.keys(obj).length === 0) {
    return numberOccurrences;
  }
  for (var property in obj) {
    if (property === key) {
      numberOccurrences++;
    }
    if (typeof obj[property] === 'object') {
      numberOccurrences += countKeysInObj(obj[property], key);
    }
  }
  return numberOccurrences;
};


var obj = {'e':{'x':'y'},'t':{'r':{'e':'r'},'p':{'y':'r'}},'y':'e'};
console.log(countKeysInObj(obj, 'e'));
//input: an object and a target key
//output: an integer representing how many times the key is found in the object
//edge cases: if key never occurs in the object, return zero

//create a count variable
//check the first key in the object and do a === comparison 
  //how do we get the first key, can we use a for-in loop?
  //if true, increment the counter
  //check if the value at that key is another object
    //if yes, use recursive function
//remove the key-value pair from the object
//pass the now-shorter object into the recursive function
//base case: if obj.keys.length is zero means the obj is empty
  //return the counter variable
//return the counter + the recursive result