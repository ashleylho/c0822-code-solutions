/* exported isPalindromic */
// remove all spaces by replacing all space characters of string with ''
// split new string into array
// find the reverse of the array
// join the reversed letters into a string
// compare the new string with the new reversed string
// if they are equal, return true
// if they are not equal, return false

function isPalindromic(string) {
  var newString = string.replace(' ', '');
  var array = newString.split('');
  var reverse = array.reverse();
  var reverseString = reverse.join('');
  if (newString !== reverseString) {
    return false;
  } else {
    return true;
  }
}
