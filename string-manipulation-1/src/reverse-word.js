/* exported reverseWord */
// create storage for output
// start at the end of the string
// take that letter and concatenate it with the next letter
// show the output

function reverseWord(word) {
  var reverseWordResult = word[word.length - 1];
  for (var i = word.length - 2; i >= 0; i--) {
    reverseWordResult.push(word[i]);
  }
  return reverseWordResult;
}
