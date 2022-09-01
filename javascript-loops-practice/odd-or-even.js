/* exported oddOrEven */
// 60, 323, 55
// even (divide by 2 and get 0 remainder), odd (divide by 2 and get 1 rem), odd

// 1. create storage for output (array)
// 2. look at the first number of the array
// 3. take that number and divide by 2
// 4. if the remainder is 0, assign it as even
// 5. if the remainder is 1, assign it as odd
// 6. push that result into the output
// 7. show the output
function oddOrEven(numbers) {
  var oddOrEvenResult = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      oddOrEvenResult.push('even');
    } else {
      oddOrEvenResult.push('odd');
    }
  }
  return oddOrEvenResult;
}
