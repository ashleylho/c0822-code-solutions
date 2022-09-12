/* exported capitalizeWords */
// create storage for output
// make all letters in lowercase
// split the string into individual words // look for the ' ' pattern
// for each word, capitalize the first letter then add that to the rest of the letters
// combine all of the words into one string
// return output

function capitalizeWords(string) {
  var capitalizeWords = '';
  var lowerCase = string.toLowerCase();
  var words = lowerCase.split(' ');
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].substr(1);
  }
  capitalizeWords = words.join(' ');
  return capitalizeWords;
}
