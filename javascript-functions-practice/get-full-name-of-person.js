/* exported getFullNameOfPerson */
function getFullNameOfPerson(person) {
  var firstNameOfPerson = person.firstName;
  var lastNameOfPerson = person.lastName;
  var fullNameOfPerson = firstNameOfPerson + ' ' + lastNameOfPerson;
  return fullNameOfPerson;
}
