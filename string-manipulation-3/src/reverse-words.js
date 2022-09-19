/* exported reverseWords */
// create storage for output (string);
// split string into array of words without spaces
// loop through array to get to each word
// loop through each word, but start at the end and go backwards
// the result of each loop should be added to new array
// the new final array should be joined into a string with spaces in between
// return the string

function reverseWords(string) {
  var array = string.split(' ');
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    var word = array[i];
    var reverseWord = '';
    for (var j = word.length - 1; j >= 0; j--) {
      reverseWord += word[j];
    }
    newArray.push(reverseWord);
  }
  var result = newArray.join(' ');
  return result;
}
