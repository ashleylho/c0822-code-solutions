/* exported reverse */
// create storage for output (array)
// look into array
// start from the end of the array and move backwards
// push each element into the output
// show output

function reverse(array) {
  var reverseResult = [];
  for (var i = array.length - 1; i >= 0; i--) {
    reverseResult.push(array[i]);
  }
  return reverseResult;
}
