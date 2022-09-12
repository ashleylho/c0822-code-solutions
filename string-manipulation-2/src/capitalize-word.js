/* exported capitalizeWord */
// create storage for output
// if the word is javascript, always change it to JavaScript
// take the first character and capitalize it
// lowercase all of the other characters and add them together
// show output

function capitalizeWord(word) {
  var capitalizeWordResult;
  var lowerCase = word.toLowerCase();
  if (lowerCase === 'javascript') {
    return 'JavaScript';
  } else {
    capitalizeWordResult = word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
  return capitalizeWordResult;
}
