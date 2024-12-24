const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World! This is a Node.js app running inside Docker.');
});

app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
});

