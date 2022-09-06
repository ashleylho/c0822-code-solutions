/* exported getKeys */
// create storage for output
// look into object at keys
// push each key name into the output
// show output

function getKeys(object) {
  var getKeysResult = [];
  for (var i in object) {
    getKeysResult.push(i);
  }
  return getKeysResult;
}
