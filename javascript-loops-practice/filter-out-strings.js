/* exported filterOutStrings */
// 1. create storage for output (array)
// 2. look at 1st value of array
// 3. check the data type
// 4. if it's a string, don't do anything
// 5. if it's a number, take that value and add it to output
// 6. show the output

function filterOutStrings(values) {
  var filterOutStringsResults = [];
  for (var i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      filterOutStringsResults.push(values[i]);
    }
  }
  return filterOutStringsResults;
}
