/* exported flatten */
// create output for result (array)
// loop through the array
// test whether value is an array
// if it's an array, loop through that array and push each value into the result
// if it's not, push the value to the result

function flatten(array) {
  var result = [];
  for (var i = 0; i < array.length; i++) {
    if (Array.isArray(array[i]) === true) {
      for (var j = 0; j < array[i].length; j++) {
        result.push(array[i][j]);
      }
    } else {
      result.push(array[i]);
    }
  }
  return result;
}
