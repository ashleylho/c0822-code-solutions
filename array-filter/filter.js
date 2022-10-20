function filter(array, predicate) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    if (predicate(array[i]) === true) {
      result.push(array[i]);
    }
  }
  return result;
}

const numbers1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const names1 = [
  'Ada',
  'Hedy',
  'Jean',
  'Grace',
  'Evelyn',
  'Joan',
  'Elizabeth',
  'Janese',
  'Donna'
];

const evenNumbers1 = filter(numbers1, number => number % 2 === 0);
console.log('evenNumbers1', evenNumbers1);

const overFive1 = filter(numbers1, number => number > 5);
console.log('overFive1', overFive1);

const startWithE1 = filter(names1, name => name.startsWith('E'));
console.log('startswithE1', startWithE1);

const haveD1 = filter(names1, name => name.toLowerCase().includes('d'));
console.log('haveD1', haveD1);
