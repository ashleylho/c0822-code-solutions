/* exported addSuffixToAll */
// 1. create storage for output (array)
// 2. take each word in the array and add the suffix to the end
// 3. the result that is added to the output
// 4. continue until there are no more words
// 5. show the output

function addSuffixToAll(words, suffix) {
  var array = [];
  for (var i = 0; i < words.length; i++) {
    var newWord = words[i] + suffix;
    array.push(newWord);
  }
  return array;
}
