/* exported isAnagram */
// remove all spaces in both strings by using replace method
// split both strings into arrays
// sort the arrays --> array.sort();
// join the arrays into a string
// check if new strings are equal
// if they are equal, return true
// if they are not, return false

function isAnagram(firstString, secondString) {
  var string1 = firstString.replaceAll(' ', '');
  var string2 = secondString.replaceAll(' ', '');
  var newString1 = string1.split('').sort().join();
  var newString2 = string2.split('').sort().join();
  if (newString1 === newString2) {
    return true;
  } else {
    return false;
  }
}
