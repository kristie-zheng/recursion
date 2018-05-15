
// 31. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {p:1, o:2, t:2, a:1}
var letterTally = function(str, obj) {
  if (str.length === 0) {
    return obj;
  }
  else if (obj[str[0]] === undefined) {
    obj[str[0]] = 1;
  }
  else {
    obj[str[0]] +=1;
  }
  str = str.slice(1);
  return letterTally(str, obj);
};

console.log(letterTally('lamborghini', {}))
//inputs: a string and a storage object
//output: the storage object as populated with char keys and count values

//for the first char in the string
//if the first char does not yet exist as a key in the obj
  //add to obj & set value as 1
//else if the first char already exists as a key in the obj
  //increment the value at that key by one
//slice off the first char of the string
//pass that new string to the letterTally function
//base case: if str length is zero, stop recursion