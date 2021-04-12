const express = require("express");
const mongoose = require('mongoose');

const app = express();

//Configuração do banco de dados
const db = require('./config/keys').mongoURI;

//Conectando ao banco de dados
mongoose.connect(db).then(() => console.log('Banco de dados conectado com sucesso!')).catch(err => console.log(err));

app.get("/", (req, res) => res.send("Olá mundo!"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));