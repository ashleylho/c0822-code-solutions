/* exported includesSeven */
// 1. create variable for the boolean result
// 2. look at first number in the array
// 3. check to see if any of the numbers are a 7
// 4. if it's true at any point, then exit the loop the result is true
// 5. if no numbers are 7, the result is false
// 6. show the result

function includesSeven(array) {
  var result = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === 7) {
      result = true;
    }
  }
  return result;
}
