const Estabelecimento = require('../models/Estabelecimento');

const UsuarioController = require('../controllers/UsuarioController');

module.exports = {
    async index(req, res){
        estabelecimentos = await Estabelecimento.find();

        return res.json(estabelecimentos);
    },
    async store(req, res){
        const { nome,
                telefone,
                cor,
                enderecoId, } = req.body;

        const { usuario_id } = req.headers;
        console.log(req.headers);
        console.log(usuario_id);
        const estabelecimento = await Estabelecimento.create({
                nome,
                telefone,
                cor,
                usuarioId: usuario_id,
                enderecoId });        
        
        UsuarioController.setEstabelecimento(usuario_id, estabelecimento._id);
        return res.json(estabelecimento);
    },
};
