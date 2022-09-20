/* exported difference */
// create storage for output (array)
// loop through first
// if first[i] is not found in second, push first[i] into output
// loop through second
// if second[i] is not found in first, push second[i], into output

function difference(first, second) {
  var result = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i]) === false) {
      result.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (first.includes(second[j]) === false) {
      result.push(second[j]);
    }
  }
  return result;
}
