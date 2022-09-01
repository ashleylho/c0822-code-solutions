/* exported findIndex */
// create variable for the result
// look at the first number in the array
// compare that number with the value
// if the number is strictly equal to the value, then use that index number and exit the loop
// the index number is the result
// if the number is not strictly equal to the value, the result is -1
function findIndex(array, value) {
  var findIndexResult = -1;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      findIndexResult = i;
      break;
    }
  }
  return findIndexResult;
}
