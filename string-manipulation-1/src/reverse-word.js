/* exported reverseWord */
// create storage for output
// start at the end of the string
// take that letter and concatenate it to the output
// show the output

function reverseWord(word) {
  var reverseWordResult = '';
  for (var i = word.length - 1; i >= 0; i--) {
    reverseWordResult += word[i];
  }
  return reverseWordResult;
}
