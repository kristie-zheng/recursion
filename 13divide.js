// 13. Write a function that divides two numbers without using the / operator or
// Math methods.
var numberDivisions = 0;
var divide = function(x, y) {
    if (x < y) {
        var remainderAmt = x/y;
        return numberDivisions + remainderAmt;
    }
    else {
        x = x - y;
        numberDivisions++;
        return divide(x, y);
    }
};

console.log(divide(22, 7));

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