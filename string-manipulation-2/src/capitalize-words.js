/* exported capitalizeWords */
// create storage for output
// split the string into individual words // look for the ' ' pattern
// for each word, capitalize the first letter
// then add the word into the output
// return output

function capitalizeWords(string) {
  var capitalizeWords = '';
  var splitString = string.split(' ');
  for (var i = 0; i < splitString.length; i++) {
    var words = splitString[0].toUpperCase() + splitString.slice(1).toLowerCase();
    capitalizeWords += words;
  }
  return capitalizeWords;
}
