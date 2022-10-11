/* exported unique */
// create storage for output (array)
// loop through array
// if array[i] is not included in output, push array[i] into output
// return output

function unique(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (result.includes(array[i]) === false) {
      result.push(array[i]);
    }
  }
  return result;
}
