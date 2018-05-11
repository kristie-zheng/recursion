// 20. Count the occurence of a value in a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  var numberOccur = 0;
  if (array.length === 0) {
    return numberOccur;
  } else {
    if (array[0] === value) {
      numberOccur++;
    }
    array = array.slice(1);
    return numberOccur + countOccurrence(array, value);
  }
};

console.log(countOccurrence([2,'banana',4,4,1,'banana'], 'banana'));
console.log(countOccurrence([2,7,4,4,1,4], 4));

//input: an array (mixed type possible) and a target value
//output: an integer representing the number of times the value occurs in the array
//edge cases: if target does not occur, return 0

//make a counter variable
//base case is when array is length of zero, then return counter
//compare array[0] to value
  //if true, increment counter
//slice first value off the array
//return result of counter + calling count occurrence on newly sliced array