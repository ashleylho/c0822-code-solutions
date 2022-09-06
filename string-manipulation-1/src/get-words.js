/* exported getWords */
// create storage for output (array)
// look at string for ', ' pattern
// break string according to that pattern
// push that result into the output
// show the output

function getWords(string) {
  var getWordsResults;
  if (string === '') {
    getWordsResults = [];
  } else {
    getWordsResults = string.split(' ');
  }
  return getWordsResults;
}
