/* exported omit */

function omit(source, keys) {
  var omitResult = {};
  for (var i in source) {
    if (source[keys] !== undefined) { omitResult[keys] = [i]; }
  }
  return omitResult;
}
