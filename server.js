const express = require('express');
const mongoose = require('mongoose');

//Iniciando o app
const app = express();

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useUnifiedTopology: true });

//Primeira rota
app.get('/', (request, response) => {
  response.send('Hello Rocketseat');
});

app.listen(3001);