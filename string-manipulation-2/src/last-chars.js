/* exported lastChars */
// create storage for output
// start at end of string <-- becomes current result
// take each letter & concat in the front of the current result;
// stop at length
// return output

function lastChars(length, string) {
  var lastCharsResult = string.slice(-length);
  return lastCharsResult;
}
