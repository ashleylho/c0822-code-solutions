/* exported numVowels */
// create storage for count which starts at 0
// go through each letter:
//    set the letter to lowercase
//    compare the letter to each vowel
//    if it's a vowel, add 1 to the count
// return the count

function numVowels(string) {
  var count = 0;
  for (var i = 0; i < string.length; i++) {
    var lowerCase = string[i].toLowerCase();
    if (lowerCase.includes('a') || lowerCase.includes('e') || lowerCase.includes('i') || lowerCase.includes('o') || lowerCase.includes('u')) {
      count++;
    }
  }
  return count;
}
