/* exported drop */
// create storage for output (Array)
// start at the count # until end of array
// grab each value in array
// push the value into the output
// return output

function drop(array, count) {
  var dropResult = [];
  for (var i = count; i < array.length; i++) {
    dropResult.push(array[i]);
  }
  return dropResult;
}
