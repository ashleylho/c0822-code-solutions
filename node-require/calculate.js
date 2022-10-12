const add = require('./add');
const subtract = require('./subtract');
const multiply = require('./multiply');
const divide = require('./divide');

const x = Number(process.argv[2]);
const y = Number(process.argv[4]);

if (process.argv.includes('plus') || process.argv.includes('+')) {
  console.log('result:', add(x, y));
} else if (process.argv.includes('minus') || process.argv.includes('-')) {
  console.log('result:', subtract(x, y));
} else if (process.argv.includes('x') || process.argv.includes('times')) {
  console.log('result:', multiply(x, y));
} else if (process.argv.includes('over') || process.argv.includes('/')) {
  console.log('result:', divide(x, y));
} else {
  console.log('invalid operation');
}
