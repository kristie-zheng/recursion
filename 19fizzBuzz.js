// 19. Implement FizzBuzz. Given integer n, return an array of the string representations of 1 to n.
// For multiples of three, output 'Fizz' instead of the number.
// For multiples of five, output 'Buzz' instead of the number.
// For numbers which are multiples of both three and five, output “FizzBuzz” instead of the number.
// fizzBuzz(5) // ['1','2','Fizz','4','Buzz']
var fizzBuzz = function(n) {
  var result = [];
  if (n === 0) {
    return result;
  } else {
    if (n % 3 === 0 && n % 5 === 0) {
      result.push('FizzBuzz');
    } else if (n % 3 === 0) {
      result.push('Fizz');
    } else if (n % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push(n);
    }
    return result.concat(fizzBuzz(n-1));
  }
};

console.log(fizzBuzz(15))

//input: integer
//output: array of integers and strings
//edge cases: numbers must be integers. negative numbers can be integers

//create a result array
//base case is if n = 0; then return result array
//for current value of n, run it through the conditionals
  //if divisible by 3 and 5, push 'fizzbuzz' into array
  //else if divisible by 3 only, push fizz
  //else if divisible by 5 only, push buzz
  //else, push n
//return resultArray concat with the result of calling fizzbuzz with n-1