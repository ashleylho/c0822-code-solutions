/* exported isLowerCased */
// create storage for output
// look at first letter of the word
// check to see if the letter is lowercase
// go through every letter and check
// if letter is uppercase, output becomes false
// show output

function isLowerCased(word) {
  var isLowerCasedResult = true;
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word.toUpperCase(word[i])) {
      isLowerCasedResult = false;
    }
  }
  return isLowerCasedResult;
}
