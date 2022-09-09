/* exported take */
// create storage for output (array)
// create for loop that runs through the count #
// grab each value in the array
// push the value into the output
// return the output

function take(array, count) {
  var takeResult = [];
  for (var i = 0; i < count; i++) {
    takeResult.push(array[i]);
  }
  return takeResult;
}
