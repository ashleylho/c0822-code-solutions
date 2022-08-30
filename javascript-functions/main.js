function convertMinutesToSeconds(minutes) {
  var seconds = minutes * 60;
  return seconds;
}

var numberOfSeconds = convertMinutesToSeconds(5);
console.log('numberOfSecondsResult:', numberOfSeconds);

function greet(name) {
  var greeting = '"Hey, ' + name + '"';
  return greeting;
}

var greetingResult = greet('Ashley');
console.log('greetingResult:', greetingResult);

function getArea(width, height) {
  var area = width * height;
  return area;
}

var areaResult = getArea(17, 42);
console.log('areaResult:', areaResult);

function getFirstName(person) {
  var name = person.firstName;
  return name;
}

var firstNameResult = getFirstName({ firstName: 'LeLouche', lastName: 'Lamperouge' });
console.log('firstNameResult:', firstNameResult);

function getLastElement(array) {
  var lastElement = array[array.length - 1];
  return lastElement;
}

var LastElementResult = getLastElement(['propane', 'and', 'propane', 'accessories']);
console.log('LastElementResult:', LastElementResult);
