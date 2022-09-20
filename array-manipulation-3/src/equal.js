/* exported equal */
// create output for return (boolean value)
// compare the lengths of first & second --> if they are unequal, return false
// if they are equal, loop through first and compare first[i] to second[i]
// if they are unequal, the output becomes false and exit the loop
// if they are equal, the output stays as true
// return output

function equal(first, second) {
  var result = true;
  if (first.length !== second.length) {
    return false;
  } else {
    for (var i = 0; i < first.length; i++) {
      if (first[i] !== second[i]) {
        result = false;
        break;
      }
    }
  }
  return result;
}
