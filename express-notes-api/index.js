const express = require('express');
const fs = require('fs');
const app = express();
let notes = {};

fs.readFile('data.json', 'utf-8', (err, data) => {
  if (err) {
    console.error(err);
    process.exit(1);
  } else {
    const parsedData = JSON.parse(data);
    notes = parsedData.notes;
  }
});

app.get('/api/notes', (req, res) => {
  const notesArray = Object.values(notes);
  res.status(202);
  res.json(notesArray);
});

// left off at this function
app.get('/api/notes/:id', (req, res) => {
  const notesArray = Object.values(notes);
  const id = Number(req.params.id);
  if (id < 0) {
    res.status(400);
  } else {
    for (let i = 0; i < notesArray.length; i++) {
      if (notesArray[i][id] === id) {
        res.json(notesArray[i]);
      }
    }
  }
});

// needs to show empty array if there are no notes

app.listen(3000, (req, res) => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});
