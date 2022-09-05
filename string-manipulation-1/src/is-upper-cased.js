/* exported isUpperCased */
// create storage for output
// start at first letter in word
// look at every letter to check for capitalization
// if the letter is capitalized, the output is true
// if the letter is not, the output is false
// show output

function isUpperCased(word) {
  var isUpperCasedResult;
  for (var i = 0; i < word.length; i++) {
    if (word[i] === word.toUpperCase(word[i])) {
      isUpperCasedResult = true;
    } else {
      isUpperCasedResult = false;
    }
  }
  return isUpperCasedResult;
}
