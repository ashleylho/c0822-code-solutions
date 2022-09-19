/* exported chunk */
// create storage for output (array)
// loop at the size & slice it every i + size
// push the result into the output
//
//
// show the output

function chunk(array, size) {
  var chunkResult = [];
  for (var i = 0; i < array.length; i += size) {
    chunkResult.push(array.slice(i, i + size));
  }
  return chunkResult;
}
