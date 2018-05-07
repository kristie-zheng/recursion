// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
var total = 0;
// var arraySum = function(array) {
//     if (typeof array[0] === 'number') {
//         total += array[0];  
//     }
//     else if (Array.isArray(array[0]) === true) {
//         arraySum(array[0]);
//     }
//     array = array.slice(1, array.length);
//     if (array.length > 0) {
//         arraySum(array);
//     }
//     return total;
// };

var arraySum = function(array) {
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            total += array[i];
        }
        else {
            arraySum(array[i]);
        }
    }
    return total;
};

console.log(arraySum([1,[2,3],[[4]],5]));
//input: array where some values are integers, and some are nested with array of integers
//output: sum (single value integer)
//constraints: none
//edge cases: empty array

//make a total var
//add the first value to the total
    //if first value is array, enter the array and get each element in the array
    //else, add that value to the running total
//slice off the first value in the array
//call the function again for the now-shortened array
//return total
