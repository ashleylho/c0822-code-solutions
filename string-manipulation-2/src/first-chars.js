/* exported firstChars */
// create storage for output
// loop each letter of string until the length
// take the value of each result and assign it as the new result
// return output

function firstChars(length, string) {
  var firstCharsResult = '';
  for (var i = 0; i < length; i++) {
    firstCharsResult += string[i];
    // if (length > string.length) {
    //   break;
    // }
  }

  return firstCharsResult;
}
