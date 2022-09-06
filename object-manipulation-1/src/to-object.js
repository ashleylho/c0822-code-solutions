/* exported toObject */
// create storage for output (object)
// look into array
// grab both the key and value pair
// add them both into the ouput
// show output

function toObject(keyValuePair) {
  var toObjectResult = {};
  toObjectResult[keyValuePair[0]] = keyValuePair[1];
  return toObjectResult;
}
