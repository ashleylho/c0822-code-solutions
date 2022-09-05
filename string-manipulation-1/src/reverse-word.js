/* exported reverseWord */
// create storage for output
// start at the end of the string
// take that letter and concatenate it with the next letter
// show the output

function reverseWord(word) {
  var reverseWordResult;
  for (var i = word.length - 1; i > 0; i--) {
    var reverse = word[i];
    reverseWordResult = reverse + word[i];
  }
  return reverseWordResult;
}
