/* exported pick */
// create storage for output (object)
// go through the list of keys
// if source[i] === undefined, ignore it
// if keys is in the object, add the key/valaue to the output.
// return output

function pick(source, keys) {
  var pickResult = {};
  for (var i of keys) {
    if (source[i] !== undefined) { pickResult[i] = source[i]; }
  }
  return pickResult;
}
