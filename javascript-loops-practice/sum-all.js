/* exported sumAll */
// 10 + 3 + 5
// 8 + 5
// 13
// 1. Create storage output for current sum which is 0
// 2. add the current sum and first number of the array together
// 3. that number becomes the new sum
// 3. continue to add the next number to the sum until there are no more numbers
// 4. show the end results

function sumAll(numbers) {
  var sum = 0;
  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
