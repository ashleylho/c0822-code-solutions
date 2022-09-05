/* exported isVowel */
// create storage for output
// look at the character
// check to see if the character is 'a', 'e', 'i', 'o', 'u' OR 'A', 'E', 'I', 'O', 'U'
// if character is either of those letters, the output will equal true
// show the output

function isVowel(char) {
  var isVowelResult;
  if (char === 'a' || char === 'A') {
    isVowelResult = true;
  } else if (char === 'e' || char === 'E') {
    isVowelResult = true;
  } else if (char === 'i' || char === 'I') {
    isVowelResult = true;
  } else if (char === 'o' || char === 'O') {
    isVowelResult = true;
  } else if (char === 'u' || char === 'U') {
    isVowelResult = true;
  } else {
    return false;
  }
  return isVowelResult;
}
