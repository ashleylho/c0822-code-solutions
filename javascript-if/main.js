/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro
 */
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string) {
  var firstCharacter = string[0];
  if (firstCharacter === 'J') {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person) {
  var ageOfPerson = person.age;
  if (ageOfPerson >= 21) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrive(person) {
  var ageOfPerson = person.age;
  if (ageOfPerson >= 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person) {
  var age0fPerson = person.age;
  if (age0fPerson > 0) {
    return false;
  } else {
    return false;
  }
}

function categorizeAcidity(pH) {
  if (pH === 7) {
    return 'neutral';
  } else if (pH > 0 && pH < 7) {
    return 'acid';
  } else if (pH > 7 && pH < 14) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name) {
  if (name === 'yakko' || name === 'wakko') {
    return "We're the warner brothers!";
  } else if (name === 'dot') {
    return "I'm cute";
  } else {
    return 'Goodnight everybody!';
  }
}
