const express = require('express');
const app = express();
let nextId = 1;
const grades = {};

app.get('/api/grades', (req, res) => {
  const gradesArray = Object.values(grades);
  res.json(gradesArray);
});

app.use(express.json());

app.post('/api/grades', (req, res) => {
  const newGrade = req.body;
  newGrade.id = nextId;
  grades[nextId] = newGrade;
  nextId++;
  res.status(201).json(newGrade);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});
