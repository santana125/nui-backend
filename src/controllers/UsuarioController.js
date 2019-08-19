const Usuario = require('../models/Usuario');


module.exports ={
    async index(req, res){
        return res.json({error: "Não Implementado."});
    },
    async store(req, res){
        const {nome, 
               email,
               senha,
               cadastroPessoa,
               estabelecimentoId} = req.body;

        const emailInUse = await Usuario.findOne({email});
        if (emailInUse)
            return res.json({error: "Email já cadastrado."});

        const usuario = await Usuario.create({
            nome,
            email,
            senha,
            cadastroPessoa,
            estabelecimentoId,
        });

        return res.json(usuario);
    },
    async setEstabelecimento(usuarioId, estabelecimentoId){
        usuario = await Usuario.findOne({_id: usuarioId});

        if (usuario){
            usuario.estabelecimentoId = estabelecimentoId;
            await usuario.save();
            return true;
        } else {
            return false;
        }
    }
};


