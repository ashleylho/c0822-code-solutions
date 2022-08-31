/* exported getNumbersToTen,
            getEvenNumbersToTwenty,
            repeatWord,
            logEachCharacter,
            doubleAll,
            getKeys,
            getValues
 */
function getNumbersToTen() {
  var numbers = [];
  var currentNumber = 1;
  var i = currentNumber;
  while (i <= 10) {
    numbers.push(i);
    i++;
  }
  return numbers;
}

function getEvenNumbersToTwenty() {
  var evenNumbers = [];
  var currentNumber = 2;
  var i = currentNumber;
  while (i <= 20) {
    evenNumbers.push(i);
    i += 2;
  }
  return evenNumbers;
}

function repeatWord(word, times) {
  var count = 1;
  var repeated = '';
  var i = count;
  while (i <= times) {
    repeated = repeated + word;
    i++;
  }
  return repeated;
}

function logEachCharacter(string) {
  for (var i = 0; i < string.length; i++) {
    console.log(string[i]);
  }
}

function doubleAll(numbers) {
  var doubled = [];
  for (var i = 0; i < numbers.length; i++) {
    var result = numbers[i] * 2;
    doubled.push(result);
  }
  return doubled;
}

function getKeys(object) {
  var keys = [];
  for (var i in object) {
    keys.push(i);
  }
  return keys;
}

function getValues(object) {
  var values = [];
  for (var i in object) {
    var valueOfKey = object[i];
    values.push(valueOfKey);
  }
  return values;
}
