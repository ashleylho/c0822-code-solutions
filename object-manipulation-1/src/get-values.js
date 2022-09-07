/* exported getValues */
// create storage for output (array)
// look into object keys
// grab the value associated with each key
// push each value into the output
// show the output

function getValues(object) {
  var getValuesResult = [];
  for (var i in object) {
    getValuesResult.push(object[i]);
  }
  return getValuesResult;
}
