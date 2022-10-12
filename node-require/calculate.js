const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const x = Number(process.argv[2]);
const y = Number(process.argv[4]);
const operation = process.argv[3];

if (operation === 'plus') {
  console.log('result:', add(x, y));
} else if (operation === 'minus') {
  console.log('result:', subtract(x, y));
} else if (operation === 'times') {
  console.log('result:', multiply(x, y));
} else if (operation === 'over') {
  console.log('result:', divide(x, y));
} else {
  console.log('invalid operation');
}
