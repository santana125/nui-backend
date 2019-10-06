const Estabelecimento = require('../models/Estabelecimento');
const Endereco = require('../models/Endereco');
const Usuario = require('../models/Usuario');

const UsuarioController = require('../controllers/UsuarioController');

module.exports = {
    async show(req, res){
        const { id } = req.params;
        estabelecimento = await Estabelecimento.findById(id)
        .populate('endereco')
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
                cor} = req.body;
        if (!nome || !telefone || !telefone)
            return res.status(400).json({message: "Faltam dados."})

        const { usuario_id } = req.headers;
        const estabelecimento = await Estabelecimento.create({
                nome,
                telefone,
                cor,
                usuarioId: usuario_id,});        
        
        UsuarioController.setEstabelecimento(usuario_id, estabelecimento._id);
        return res.json(estabelecimento);
    },
    async setEndereco(usuarioId, enderecoId){
        usuario = await Usuario.findOne({_id: usuarioId});
        if (usuario){
            var estabelecimento = await Estabelecimento.findById(usuario.estabelecimento);
            if(estabelecimento){
                estabelecimento.endereco = enderecoId;
                await estabelecimento.save();
            }else
                return false
            return true;
        } else {
            return false;
        }
      }
};
