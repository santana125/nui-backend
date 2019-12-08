const express = require('express');
const UsuarioController = require('./controllers/UsuarioController');
const EstabelecimentoController = require('./controllers/EstabelecimentoController');
const EnderecoController = require('./controllers/EnderecoController');
const authController = require('./controllers/authController');
const ServicoController = require('./controllers/ServicoController');
const AgendamentoController = require('./controllers/AgendamentoController');
const authMiddleware = require('./middlewares/auth');
const routes = express.Router();
const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

const multerConfig = {
    dest: path.resolve(__dirname, '..', 'public', 'imgs' ),
    storage: multer.diskStorage({
      destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, '..', 'public', 'imgs' ));
      },
      filename: (req, file, cb) => {
        crypto.randomBytes(16, (err, hash) => {
          if(err) cb(err);
          const nowDate = Date.now();
          const fileName = `${hash.toString('hex')}_${nowDate}${path.extname(file.originalname)}`;
          file.url = `http://192.168.2.125:5000/imgs/${fileName}`
          cb(null, fileName);
        })
      },
    }),
    limits: {
      size: 4 * 1024 * 1024
    },
    fileFilter: (req, file, cb) => {
      const allowedMimes = [
        "image/png",
        "image/jpg",
        "image/jpeg",
      ];

      if (allowedMimes.includes(file.mimetype)){
        cb(null, true);
      } else {
        cb(new Error('Invalid File'));
      }
    },

}

routes.post('/usuario', multer(multerConfig).single('avatar'), UsuarioController.store);
routes.post('/me/finish', authMiddleware, UsuarioController.finishSignup);
routes.get('/me', authMiddleware, UsuarioController.index);
routes.patch('/concluirInscricao', authMiddleware, UsuarioController.finishSignup);
routes.post('/endereco', authMiddleware, EnderecoController.store);
routes.post('/servico', authMiddleware, ServicoController.store);
routes.patch('/endereco', authMiddleware, EnderecoController.update);
routes.post('/agendamento', authMiddleware, AgendamentoController.store);
routes.post('/horarioslivres', authMiddleware, AgendamentoController.index);
routes.post('/estabelecimento', multer(multerConfig).fields([{ name: 'avatar', maxCount: 1 }, { name: 'background', maxCount: 1 }]), authMiddleware, EstabelecimentoController.store);
routes.get('/estabelecimento/:id', authMiddleware, EstabelecimentoController.show);
routes.get('/estabelecimentos', authMiddleware, EstabelecimentoController.index);
routes.post('/login', authController.login);


module.exports = routes;
