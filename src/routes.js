const express = require('express');
const UsuarioController = require('./controllers/UsuarioController');
const EstabelecimentoController = require('./controllers/EstabelecimentoController');
const authController = require('./controllers/authController');
const authMiddleware = require('./middlewares/auth');
const routes = express.Router();

routes.post('/usuario', UsuarioController.store);
routes.post('/estabelecimento', EstabelecimentoController.store);
routes.get('/estabelecimentos', authMiddleware,EstabelecimentoController.index);
routes.get('/login', authController.login);


module.exports = routes;
