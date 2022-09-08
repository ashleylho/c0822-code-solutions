/* exported capitalizeWord */
// create storage for output
// take the first character and capitalize it
// lowercase all of the other characters and add them together
// if the word is javascript, always change it to JavaScript
// show output

function capitalizeWord(word) {
  var capitalizeWordResult;
  // if (word === 'javascript') {
  //   capitalizeWordResult = word[0].toUpperCase() + word.slice(1, 4).toLowerCase() + word[4].toUpperCase() + word.slice(5);
  // } else {
  capitalizeWordResult = word[0].toUpperCase() + word.slice(1).toLowerCase();
  // }
  return capitalizeWordResult;
}
