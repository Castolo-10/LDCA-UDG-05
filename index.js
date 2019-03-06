var express = require('express');

// Configuración de la app

var app = express();
var server = app.listen(4000, () => {
  console.log('Escuchando peticiones en el puerto 4000');
});

app.use(express.static('public'));
