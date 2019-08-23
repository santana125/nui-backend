const express = require('express');
const UsuarioController = require('./controllers/UsuarioController');
const EstabelecimentoController = require('./controllers/EstabelecimentoController');
const routes = express.Router();

routes.post('/user', UsuarioController.store);
routes.post('/estabelecimento', EstabelecimentoController.store);
routes.get('/estabelecimentos', EstabelecimentoController.index);

module.exports = routes;
