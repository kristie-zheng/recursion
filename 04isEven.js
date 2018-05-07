// 4. Check if a number is even.
//input: number (interger)
//output: boolean if the number is even or not
//constraints: can be a negative number. take the absolute value

//method: if number is a decimal, automatically return false
//if number is an integer, repeatedly subtract two
//if number is 2 return true
//if number is less than 2, return false
var isEven = function(n) {
    if (n === 2) {
      return true;
    }
    else if (n < 2) {
      return false;
    }
   return isEven(n-2);
};


console.log(isEven(1080));