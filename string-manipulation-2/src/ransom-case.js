/* exported ransomCase */
// create storage for output
// every other (odd) letter is lower case
// every even letter is uppercase
// check for odd/even with modulus
// add each letter to the output
// show output

function ransomCase(string) {
  var ransomCaseResult = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) {
      ransomCaseResult += string[i].toLowerCase();
    } else {
      ransomCaseResult += string[i].toUpperCase();
    }
  }
  return ransomCaseResult;
}
