// 3. Sum all numbers in an array containing nested arrays.
// arraySum([1,[2,3],[[4]],5]); // 15
//input: array where some values are integers, and some are nested with array of integers
//output: sum (single value integer)
//constraints: none
//edge cases: empty array


//use a for loop to iterate over the outer array
//if the current element is a number
    //add it to the total
//else if the current element is an array
    //call the arraySum function on that element
//return total

//[[1,2,3], 2, 3]

var arraySum = function(array) {
    var total = 0;
    for (var i = 0; i < array.length; i++) {
        if (typeof array[i] === 'number') {
            total+=array[i];
        }
        else if (Array.isArray(array[i]) === true) {
            //pass this inner array into the arraySum function
            total += arraySum(array[i]);
        }
    }
    return total;
};

console.log(arraySum([[1,2,3], 2, 3]));
