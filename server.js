const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o app
const app = express();

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useUnifiedTopology: true, useNewUrlParser:  true });
require('./src/models/Products');

//Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);