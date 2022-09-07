/* exported tail */
// create storage for output (array)
// look at array
// ignore the first element in the array
// take every following element and push it into the output
// show output

function tail(array) {
  var tailResult = [];
  for (var i = 1; i < array.length; i++) {
    tailResult.push(array[i]);
  }
  return tailResult;
}
