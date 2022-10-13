const fs = require('fs');
const data = require('./data.json');
const input = process.argv[3];
const operation = process.argv[2];
const update = process.argv[4];

if (operation === 'read') {
  for (const i in data.notes) {
    console.log(`${i}: ${data.notes[i]}`);
  }
}

if (operation === 'create') {
  data.notes[data.nextId] = input;
  data.nextId++;
  const newData = JSON.stringify(data, null, 2);
  writeFile(newData);
}

if (operation === 'delete') {
  delete data.notes[input];
  const newData = JSON.stringify(data, null, 2);
  writeFile(newData);
}

if (operation === 'update') {
  data.notes[input] = update;
  const newData = JSON.stringify(data, null, 2);
  writeFile(newData);
}

function writeFile(data) {
  fs.writeFile('data.json', data, err => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
  });
}
