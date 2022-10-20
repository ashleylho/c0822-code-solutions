function reduce(array, reducer, initialValue) {
  if (initialValue || initialValue === 0) {
    let result = initialValue;
    for (let i = 0; i < array.length; i++) {
      result = reducer(result, array[i]);
    }
    return result;
  } else {
    let result = array[0];
    for (let i = 1; i < array.length; i++) {
      result = reducer(result, array[i]);
    }
    return result;
  }
}

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const account1 = [
  { type: 'deposit', amount: 150 },
  { type: 'deposit', amount: 20 },
  { type: 'withdrawal', amount: 5 },
  { type: 'deposit', amount: 100 },
  { type: 'withdrawal', amount: 25 },
  { type: 'withdrawal', amount: 60 }
];

const traits1 = [
  { color: 'yellow' },
  { type: 'electric' },
  { name: 'pikachu' },
  { level: 15 },
  { trainer: 'ash' }
];

const sum1 = reduce(numbers1, (previousValue, currentValue) => {
  return previousValue + currentValue;
});
console.log('sum1:', sum1);

const product1 = reduce(numbers1, (previousValue, currentValue) => {
  return previousValue * currentValue;
});
console.log('product1:', product1);

let totalAmount1 = 0;
const balance1 = reduce(account1, (previousValue, currentValue) => {
  if (currentValue.type === 'deposit') {
    totalAmount1 += currentValue.amount;
  } else if (currentValue.type === 'withdrawal') {
    totalAmount1 -= currentValue.amount;
  }
  return totalAmount1;
}, totalAmount1);
console.log('balance1:', balance1);

const objectResult1 = {};
const composite1 = reduce(traits1, (previousValue, currentValue) => {
  const result = Object.assign(objectResult1, currentValue);
  return result;
}, objectResult1);
console.log('composite1:', composite1);
