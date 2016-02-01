const express = require('express');
const app     = express();
const server  = require('http').Server(app);
const io      = require('socket.io')(server);
const ot      = require('ot');

app.use('/', express.static('public/dist'));
app.use('/css', express.static('node_modules/codemirror/lib'));

const socketIOServer = new ot.EditorSocketIOServer('', [], 'demo');

io.on('connection', (socket) => {
  socketIOServer.addClient(socket);
});

server.listen(3000);
