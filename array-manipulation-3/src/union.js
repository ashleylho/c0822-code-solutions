/* exported union */
// create storage for output
// loop through first
// if first[i] is not found in output, push first[i] into output
// loop through second
// if second[j] is not found in output, push second[j] into output

function union(first, second) {
  var result = [];
  for (var i = 0; i < first.length; i++) {
    if (result.includes(first[i]) === false) {
      result.push(first[i]);
    }
  }
  for (var j = 0; j < second.length; j++) {
    if (result.includes(second[j]) === false) {
      result.push(second[j]);
    }
  }
  return result;
}
