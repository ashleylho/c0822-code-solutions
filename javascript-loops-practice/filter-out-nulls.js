/* exported filterOutNulls */
// 1. create storage for output (array)
// 2. look at first value of array
// 3. compare that value with null
// 4. if not strictly equal, push that value into the output
// 5. if equal strictly to null, don't do anything
// 6. show output

function filterOutNulls(values) {
  var filterOutNullsResult = [];
  for (var i = 0; i < values.length; i++) {
    if (values[i] !== null) {
      filterOutNullsResult.push(values[i]);
    }
  }
  return filterOutNullsResult;
}
