/* exported getIndexes */
// ['meow', 'woof', 'oink']
// [0, 1, 2]
// 1. create storage for output (array)
// 2. index number will always start at 0
// 3. every index number after that will be index number + 1
// 4. add each index number into the output
// 5. show the output

function getIndexes(array) {
  var indexArray = [];
  for (var i = 0; i < array.length; i++) {
    indexArray.push(i);
  }
  return indexArray;
}
