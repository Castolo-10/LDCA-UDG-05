var express = require('express');
var socket = require('socket.io');

// Configuración de la app

var app = express();
var server = app.listen(4000, () => {
  console.log('Escuchando peticiones en el puerto 4000');
});

// Archivos estáticos
app.use(express.static('public'));

// Configuración del socket
var io = socket(server);

io.on('connection', (socket) => {
  console.log('conexión con sockets realizada', socket.id);

  //Manejo del evento del chat
  socket.on('chat', (data) => {
    io.sockets.emit('chat', data);
  })

  socket.on('typing', (data) => {
    socket.broadcast.emit('typing', data);
  })
})
