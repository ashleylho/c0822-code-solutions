/* exported invert */
// create storage for output (empty object)
// go into the object
// look at the property and set it as the new value
// get the original value and set it as the new property
// add the new property/value pair to the output
// return output

function invert(source) {
  var invertResult = {};
  for (var i in source) {
    invertResult[source[i]] = i;
  }
  return invertResult;
}
