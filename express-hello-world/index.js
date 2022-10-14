const express = require('express');

const app = express();

app.use(function (req, res) {
  res.send('howdy');
});

app.listen(3000, function () {
  // eslint-disable-next-line no-console
  console.log('Listening on port 3000!');
});
