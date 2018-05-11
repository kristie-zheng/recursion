// 14. Find the greatest common divisor (gcd) of two positive numbers. The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// gcd(4,36); // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var xFactors = [];
var yFactors = [];
var currentVal;
var gcd = function(x, y) {
    if (currentVal < Math.sqrt(x))
    {
        return;
    }
};

var currentDividend = 1;
var findFactors = function(array, number) {
    if (currentDividend >= Math.sqrt(number)) {
        currentDividend = 1;
        return array;
    }   
    else {
        if (number % currentDividend === 0) {
            array.push(currentDividend);
            array.push(number/currentDividend);
        }
        currentDividend++;
        return findFactors(array, number);
  }
}

console.log(findFactors([], 25))
//input: two positive integers
//output single positive integer representing the GCF
//constraints: none
//edge case: if there is no gcf, return null? does 1 count as a GCF?

//create an array for each numbers factors xFactors and yFactors
//for all values between 1 and sqrt of x
    //modulo x by that number. if modulo is zero
        //push that into the storage array
        //also push the corresponding pair x-currentNum;
//repeat for y
//create a third array of x and y's common factors
//return the max (built in) of that array