// 32. Eliminate consecutive duplicates in a list. If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// compress([1,2,2,3,4,4,5,5,5]) // [1,2,3,4,5]
// compress([1,2,2,3,4,4,2,5,5,5,4,4]) // [1,2,3,4,2,5,4]
var compress = function(list) {
  var compressedArray = [];
  //console.log(list)
  if (list.length === 0) {
    return compressedArray;
  } else {
    var prevElement = list[0];
    list = list.slice(1);
    var currentElement = list[0];
    if (prevElement !== currentElement) {
      compressedArray.push(prevElement);
    } 
    return compressedArray.concat(compress(list));
  }
};

var myList = [1,2,2,3,4,4,2,5,5,5,4,4];
console.log(compress(myList))
//input: an array
//output: a copy of the array where consecutive duplicates are eliminated

//create a compressedArray variable
//base case: if the array's length is zero, return compressedArray
//else
//get element zero of the array and set it to variable prevElement
//slice the array from index 1 and beyond, call it currentElement
//if prevElement and currentElement are not equal
  //push prevElement into the compressedArray
//else, concat compressedArray to the recursive call of the compress function with the sliced array