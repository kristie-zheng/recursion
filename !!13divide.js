// 13. Write a function that divides two numbers without using the / operator or
// Math methods.

var divide = function(x, y) {
    var numberOfDivisions= 1;
    if (x === y) {
        return numberOfDivisions;
    }
    else if (x < y) {
        //here is the case where a remainder exists
    }
    else {
        return numberOfDivisions + divide(x-y, y);
    }
};

console.log(divide(65, 4));

//input: two numbers (floats or integers)
//output: single value representing the number of times y is divisible by x+the calculated decimal therein
//edge: y cannot be zero
//constraint: none

//make a counter variable that keeps track of how many times you can divide
//subtract y from x and increment numberdivisions
//if x is less than y, stop 
//otherwise, keep subtracting y from x
//for remainder, which is the value of x when x < y
//divide that remainder by y, then add it to the  numberdivisions value 