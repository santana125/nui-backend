const Usuario = require('../models/Usuario');
const bcrypt = require('bcryptjs');

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
				return res.send(usuario);				
			}
		}
	}

}
