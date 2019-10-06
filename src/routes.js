const express = require('express');
const UsuarioController = require('./controllers/UsuarioController');
const EstabelecimentoController = require('./controllers/EstabelecimentoController');
const EnderecoController = require('./controllers/EnderecoController');
const authController = require('./controllers/authController');
const authMiddleware = require('./middlewares/auth');
const routes = express.Router();

routes.post('/usuario', UsuarioController.store);
routes.patch('/concluirInscricao', authMiddleware, UsuarioController.finishSignup);
routes.post('/estabelecimento', EstabelecimentoController.store);
routes.post('/endereco', authMiddleware, EnderecoController.store);
routes.patch('/endereco', authMiddleware, EnderecoController.update);
routes.get('/estabelecimento/:id', authMiddleware,EstabelecimentoController.show);
routes.get('/estabelecimentos', authMiddleware,EstabelecimentoController.index);
routes.post('/login', authController.login);


module.exports = routes;
