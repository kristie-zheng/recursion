// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str) {
    var stringAsArray = [];
    if (str.length === 0) {
        return stringAsArray;
    }
    stringAsArray.push(str[0]);
    console.log(stringAsArray);
    str = str.slice(1, str.length);
    return stringAsArray.concat(createArray(str));
};

console.log(createArray('bunny'));

//create an empty array
//push string[0] into array
////slice string and pass to recursive
//when string length is zero return the array
