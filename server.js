const express = require('express');
const app = express();
const server = require('http').createServer(app);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

server.listen(3000, () => {
  console.log('listening on http://localhost:3000');
});
