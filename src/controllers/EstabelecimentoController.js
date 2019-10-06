const Estabelecimento = require('../models/Estabelecimento');
const Endereco = require('../models/Endereco');
const Usuario = require('../models/Usuario');

const UsuarioController = require('../controllers/UsuarioController');

module.exports = {
    async show(req, res){
        const { id } = req.params;
        estabelecimento = await Estabelecimento.findById(id);
        if (!estabelecimento)
          return res.status().json({error: "Estabelecimento não encontrado"});
        return res.json(estabelecimento);
    },
    async index(req, res){
        estabelecimentos = await Estabelecimento.find().select('_id nome');

        estabelecimentos.map( async (estabelecimento) => {
            estabelecimento.endereco = await Endereco.findById(estabelecimento.EnderecoId);
        });

        return res.json(estabelecimentos);
    },
    async store(req, res){
        const { nome,
                telefone,
                cor,
                enderecoId, } = req.body;

        const { usuario_id } = req.headers;
        const estabelecimento = await Estabelecimento.create({
                nome,
                telefone,
                cor,
                usuarioId: usuario_id,
                enderecoId });        
        
        UsuarioController.setEstabelecimento(usuario_id, estabelecimento._id);
        return res.json(estabelecimento);
    },
    async setEndereco(usuarioId, enderecoId){
        usuario = await Usuario.findOne({_id: usuarioId});
        if (usuario){
            var estabelecimento = await Estabelecimento.findById(usuario.estabelecimentoId);
            if(estabelecimento){
                estabelecimento.enderecoId = enderecoId;
                await estabelecimento.save();
            return true;
        } else {
            return false;
        }
      }
};
