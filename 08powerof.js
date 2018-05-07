// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false

//input: integer
//output: boolean (if number is power of 2 or not)
// edge: none
// constraints: none 

/*
Transformation steps
repeatedly divide n by 2
if (n===2) return true
else return false
*/

// 2^1 = 2
// 2^2 = 4
// 2^3 = 8
// 2^4 = 16
// 2^5 = 32

var powerOfTwo = function(n) {
    if (n === 2 || n === 1) {
        return true;
    }
    else if (n < 2) {
        return false;
    }
    else {
      return powerOfTwo(n/2);
    }

};
console.log(powerOfTwo(32))
