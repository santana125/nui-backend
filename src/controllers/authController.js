const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config({path: './src/config/.env'});

module.exports = {
	async login(req, res){
		const {email, senha} = req.body;

		const usuario = await Usuario.findOne({email}).select('+senha');

		if (!usuario)
			return res.status(400).send({message: "Usuario não encontrado."});
		else{
			//Comparação de senhas
			const matchSenha = await bcrypt.compare(senha, usuario.senha);
			if(!matchSenha)
				return res.status(401).send({message: "Senha Incorreta."});
			else {
				usuario.senha = undefined;
                const token = jwt.sign({ id: usuario._id }, process.env.SECRET, {
					expiresIn:1000,
				});
				return res.json({token});				
			}
		}
	}

}
