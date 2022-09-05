/* exported getWords */
// create storage for output (array)
// look at string for ', ' pattern
// break string according to that pattern
// push that result into the output
// show the output

function getWords(string) {
  var getWordsResults = [];
  for (var i = 0; i < string.length; i++) {
    if (string[i] === ' ') {
      getWordsResults.push(string.split(' '));
    } else {
      getWordsResults.push(string);
    }
  }
  return getWordsResults;
}
