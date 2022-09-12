/* exported omit */
// create storage for output (empty object)
// compare keys to object properties
// if keys are found in source, ignore
// if keys are not found in source, add key and value to the object
// return output

function omit(source, keys) {
  var omitResult = {};
  for (var i in source) {
    if (source[keys] !== undefined) { omitResult[keys] = i; }
  }
  return omitResult;
}
