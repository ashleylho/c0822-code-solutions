/* exported omit */
// create storage for output (empty object)
// look into keys of object(source)
// assign a counter = 0
// look into array of keys: if the key does not equal keys[i], move on.
// if it does, add 1 to counter
// if the counter is equal to keys.length, add the key-value pair to the output
// return output

function omit(source, keys) {
  var omitResult = {};
  for (var key in source) {
    var counter = 0;
    for (var i in keys) {
      if (key === keys[i]) {
        break;
      } else {
        counter++;
      }
      if (counter === keys.length) {
        omitResult[key] = source[key];
      }
    }
  }
  return omitResult;
}
