const Servico = require("../models/Servico");
const Usuario = require("../models/Usuario");
const Estabelecimento = require("../models/Estabelecimento");
const EstabelecimentoController = require("../controllers/EstabelecimentoController");

module.exports = {
  async store(req, res) {
    const { nome, descricao, categoria, preco, tempo } = req.body;
    const { usuario_id } = req;

    if (!nome || !descricao || !categoria || !preco || !tempo)
      return res.status(400).json({ message: "Faltam dados." });
    var usuario = await Usuario.findById(usuario_id);
    var estabelecimento = await Estabelecimento.findById(usuario.estabelecimento);
    const newServico = new Servico({
      nome,
      descricao,
      categoria,
      preco,
      tempo,
      estabelecimentoId: estabelecimento._id
    });
    await newServico.save()
    .then(async () => {
      const response = await EstabelecimentoController.setServico(usuario_id, newServico._id)
        if (response)
          return res.json({message: "Serviço cadastrado."})
        else
          return res.status(400).json({message: "Erro ao cadastrar serviço." })
    })
  },

};
