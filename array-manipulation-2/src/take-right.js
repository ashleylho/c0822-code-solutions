/* exported takeRight */
// create storage for output
// if count > length of array --> return array into output
// if not... cut from length - count until end
// push the result into output
// return output

function takeRight(array, count) {
  var takeRight = [];
  for (var i = array.length - 1; i < array.length; i++) {
    takeRight = (array.slice(-count));
  }
  return takeRight;
}
