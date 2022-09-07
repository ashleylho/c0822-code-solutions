/* exported compact */
// create storage for output
// look at each item in array
// if it is a value of false, NaN, null, 0, -0, undefined, ' ' remove from the array
// if it is neither of those, push into the output
// return output

function compact(array) {
  var compactResult = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i]) {
      compactResult.push(array[i]);
    }
  }
  return compactResult;
}
