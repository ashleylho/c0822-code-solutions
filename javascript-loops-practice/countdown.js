/* exported countdown */
// 7
// 7, 6, 5, 4, 3, 2, 1, 0
// 1. create storage output
// 3. check if that number is greater than 0
// 4. add number to output
// 5. subtract 1 from number and repeat until number becomes negative
// 6. give back list of numbers
function countdown(number) {
  var array = [];
  for (var i = number; i >= 0; i--) {
    array.push(i);
  }
  return array;
}
