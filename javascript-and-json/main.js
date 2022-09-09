var books = [
  {
    isbn: '9781594133299',
    title: 'Twilight',
    author: 'Stephanie Meyer'
  },
  {
    isbn: '9780316032544',
    title: 'New Moon',
    author: 'Stephanie Meyer'
  },
  {
    isbn: '9780316027656',
    title: 'Eclipse',
    author: 'Stephanie Meyer'
  }
];

console.log('array of books:', books);
console.log('typeof books:', typeof books);

var jsonBooks = JSON.stringify(books);
console.log('JSON string of books:', jsonBooks);
console.log('typeof JSON string of books:', typeof jsonBooks);

var jsonStudent = '{"idNumber": "360940", "name": "Ashley Ho"}';

console.log('jsonStudent:', jsonStudent);
console.log('typeof jsonStudent:', typeof jsonStudent);

var studentObj = JSON.parse(jsonStudent);
console.log('studentObj:', studentObj);
console.log('typeof studentObj:', typeof studentObj);
