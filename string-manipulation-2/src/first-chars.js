/* exported firstChars */
// create storage for output
// slice from start of string until length
// take the value and assign it as the output
// return output

function firstChars(length, string) {
  var firstCharsResult = string.slice(0, length);
  return firstCharsResult;
}
