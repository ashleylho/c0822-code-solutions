/* exported capitalize */
// create space for output
// look at the whole word
// capitlize the first character of word
// set the rest of the characters in lowercase
// that new result becomes the output
// show the output

function capitalize(word) {
  var capitalizeResult = word[0].toUpperCase() + word.slice(1).toLowerCase();
  return capitalizeResult;
}
