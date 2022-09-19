/* exported includes */
// create storage for output = false
// go through each value in array
// check to see if the value @ index is equal to value
// if it is, output becomes true
// return output

function includes(array, value) {
  var includesResult = false;
  for (var i = 0; i < array.length; i++) {
    if (array[i] === value) {
      includesResult = true;
    }
  }
  return includesResult;
}
