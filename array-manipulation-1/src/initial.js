/* exported initial */
// create storage for output (array)
// look into array
// ignore the last element in the array
// take every element and push it into the output
// show output

function initial(array) {
  var initialResult = [];
  for (var i = 0; i < array.length - 1; i++) {
    initialResult.push(array[i]);
  }
  return initialResult;
}
