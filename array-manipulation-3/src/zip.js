/* exported zip */
// create storage for output (array)
// compare the length of first and second
// if first < second, loop through first
// create subarray
// push values of first & second at i into subarray
// push subarray into output
// if second < first, loop through second
// create subarray
// push values of first & second at i into subarray
// push subarray into output
// return output

function zip(first, second) {
  var result = [];
  var length = Math.min(first.length, second.length);
  for (var i = 0; i < length; i++) {
    var subArray1 = [];
    subArray1.push(first[i]);
    subArray1.push(second[i]);
    result.push(subArray1);
  }
  return result;
}
