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
  if (first.length <= second.length) {
    for (var i = 0; i < first.length; i++) {
      var subArray1 = [];
      subArray1.push(first[i]);
      subArray1.push(second[i]);
      result.push(subArray1);
    }
  } else if (second.length < first.length) {
    for (var j = 0; j < second.length; j++) {
      var subArray2 = [];
      subArray2.push(first[j]);
      subArray2.push(second[j]);
      result.push(subArray2);
    }
  }
  return result;
}
