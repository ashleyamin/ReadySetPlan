const express = require('express');
const app = express();

const PORT = process.env.PORT || 7000;

app.get('/', (req, res) => {
  res.send('Things are working!');
});

app.listen(PORT, () => {
  console.log(`Up and running. Listening on port ${PORT}`);
});
