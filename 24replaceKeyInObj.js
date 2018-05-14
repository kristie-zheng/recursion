// 24. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, oldKey, newKey) {
  for (var property in obj) {
    if (property === oldKey) {
      //console.log(obj[property])
      obj[newKey] = obj[property];
      delete obj[property];
    }
    if (typeof obj[property] === 'object') {
      //console.log(obj[property])
      replaceKeysInObj(obj[property], oldKey, newKey)
    } 
  }
    return obj;
};


var obj = {'c':{'x':'y'},'a':{'r':{'fixme':'r'},'t':{'y':'r'}},'fixme':'e'};
console.log(replaceKeysInObj(obj, 'fixme', 'CHANGE'));
//input: an object, a value representing the old key (target) and a value representing the new key
//output: the same object, but with the oldKey replaced by the newKey
//edge cases: if the old key does not exist in the object, return the exact same object
//if the old key and new key are the same, return the exact same object

//iterate over the object using for-in loop
  //if the key matches oldKey
    //set obj[newKey] = obj[property to add a new k-v pair 
    //remove the old key-value pair
  //then, check if the value at that key is another object
    //if so, pass to recursive function
//return obj
