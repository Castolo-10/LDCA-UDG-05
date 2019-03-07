// Crear conexión
var socket = io.connect('http://localhost:4000');

// Query DOM
var message = document.getElementById('message'),
    handle = document.getElementById('handle'),
    btn = document.getElementById('send'),
    output = document.getElementById('output');

// Emit events

btn.addEventListener('click', () => {
  socket.emit('chat', {
    message: message.value,
    handle: handle.value
  });
})

// Escuchar eventos

socket.on('chat', (data) =>{
  output.innerHTML +='<p><strong>' + data.handle + ': </strong>' + data.message + '</p>';
})
