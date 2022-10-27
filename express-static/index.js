const express = require('express');
const path = require('node:path');
const app = express();

var absolutePath = path.join(__dirname, 'public');
console.log(absolutePath);

var staticMiddleware = express.static(absolutePath);

app.use(staticMiddleware);

app.listen(3000, (req, res) => {
  // eslint-disable-next-line no-console
  console.log('listening on port 3000');
});
