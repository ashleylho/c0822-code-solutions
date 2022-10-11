/* exported intersection */
// create storage for output (array)
// loop through first
// if first[i] is found in second, push first[i] into output
// return output

function intersection(first, second) {
  var result = [];
  for (var i = 0; i < first.length; i++) {
    if (second.includes(first[i]) === true) {
      result.push(first[i]);
    }
  }
  return result;
}
