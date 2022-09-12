/* exported truncate */
// create storage for output
// take all the letters from the beginning until the length of the string
// concatenate ellipsis to the string
// the result of that becomes the output

function truncate(length, string) {
  var truncateResult;
  for (var i = 0; i <= length; i++) {
    truncateResult = string.slice(0, length) + '...';
  }
  return truncateResult;
}
