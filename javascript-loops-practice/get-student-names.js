/* exported getStudentNames */
// 1. create storage for the output (array)
// 2. look at the first object in the array
// 3. look at the name property of that object
// 4. take the value of the name property
// 5. push it into the output
// 6. show the output

function getStudentNames(students) {
  var studentNames = [];
  for (var i = 0; i < students.length; i++) {
    var nameOfStudent = students[i].name;
    studentNames.push(nameOfStudent);
  }
  return studentNames;
}
