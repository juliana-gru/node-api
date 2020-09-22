const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o app
const app = express();

//Middlewares
app.use(cors()); //allow cross origin access
app.use(express.json());//Permite que eu envie dados da app no formato de json

//Iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useUnifiedTopology: true, useNewUrlParser:  true });
requireDir('./src/models');

//Rotas
app.use('/api', require('./src/routes'));

app.listen(3001);