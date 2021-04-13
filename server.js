const express = require("express");
const mongoose = require('mongoose');

const usuarios = require('./rotas/api/usuarios');
const pecas = require('./rotas/api/pecas');
const rotas = require('./rotas/api/rotas');
const tecnicos = require('./rotas/api/tecnicos');

const app = express();

//Configuração do banco de dados
const db = require('./config/chaves').mongoURI;

//Conectando ao banco de dados
mongoose.connect(db).then(() => console.log('Banco de dados conectado com sucesso!')).catch(err => console.log(err));

app.get("/", (req, res) => res.send("Olá mundo!"));

app.use('/api/usuarios', usuarios);
app.use('/api/pecas', pecas);
app.use('/api/rotas', rotas);
app.use('/api/tecnicos', tecnicos);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));