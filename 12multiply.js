// 12. Write a function that multiplies two numbers without using the * operator or
// Math methods.

var multiply = function(x, y) {
    if (y === 1) {
        return x;
    }
    else if (y<1) {
        return x*y;
    }
    else {
        return x + multiply(x, y-1);
    }
};

console.log(multiply(103.26, 20.5));

//input: two numbers (ints and flaots)
//output: one value representing x multiplied by y
//edge: none
//constraints: none

//add x to x
//decrement y
//if y <1 return total + the "remainder", which is x*current decimal value of y
