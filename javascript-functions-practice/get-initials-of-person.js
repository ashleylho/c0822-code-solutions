/* exported getInitialsOfPerson */
function getInitialsOfPerson(person) {
  var firstNameOfPerson = person.firstName;
  var firstInitialOfPerson = firstNameOfPerson[0];
  var lastNameOfPerson = person.lastName;
  var lastInitialOfPerson = lastNameOfPerson[0];
  var InitialsOfPerson = firstInitialOfPerson + lastInitialOfPerson;
  return InitialsOfPerson;
}
