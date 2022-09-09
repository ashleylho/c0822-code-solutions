/* exported dropRight */
// create storage for output (array)
// if count > array.length --> return whole array into output
// slice from the start until (array.length - count)
// push result into output
// return output

function dropRight(array, count) {
  var dropRightResult = [];
  if (count > array.length) {
    dropRightResult.push(array);
  } else {
    dropRightResult.push(array.slice(0, (array.length - count)));
  }
  return dropRightResult;
}
