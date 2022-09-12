/* exported swapChars */
// create storage for output
// go through every letter
// check to see if i = first index
// if so, make the new letter equal to string[secondIndex]
// add that to swapCharResult
// if i = 2nd index, make the new letter equal to string[firstIndex]
// add that to swapCharResult
// if neither, add string[i] to swapCharResult
// return output

function swapChars(firstIndex, secondIndex, string) {
  var swapCharResult = '';
  for (var i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      var newLetter = string[secondIndex];
      swapCharResult += newLetter;
    } else if (i === secondIndex) {
      newLetter = string[firstIndex];
      swapCharResult += newLetter;
    } else {
      swapCharResult += string[i];
    }
  }
  return swapCharResult;
}
