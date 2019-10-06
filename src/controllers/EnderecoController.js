const Endereco = require('../models/Endereco');
const EstabelecimentoController = require('../controllers/EstabelecimentoController');
const Estabelecimento = require('../models/Estabelecimento');

module.exports = {
    async store(req, res){
      const { endereco, cidade, numero, cep, estado } = req.body
      const {usuario_id} = req
      
      const newEndereco = new Endereco({
        endereco,
        cidade,
        estado,
        cep,
        numero,
      })
      await newEndereco.save()
      .then(async () => {
        const response = await EstabelecimentoController.setEndereco(usuario_id, newEndereco._id)
        if (response)
          return res.json({message: "Endereço cadastrado."})
        else
          return res.status(400).json({message: "Erro ao cadastrar endereço."})
      })
  },
  async update(req, res) {
    const { endereco, cidade, numero, cep, estado } = req.body
    const {usuario_id} = req
    console.log(usuario_id)
    const estabelecimento = await Estabelecimento.findOne({usuarioId: usuario_id})
    if (estabelecimento)
      console.log("found")
    else{
      console.log("error")
      return res.status(400).json({message: "Erro ao atualizar endereço."})
    }
    const enderecoAtual = Endereco.findById(estabelecimento.enderecoId)

    if(enderecoAtual){
      enderecoAtual.endereco = endereco
      enderecoAtual.cidade = cidade
      enderecoAtual.numero = numero 
      enderecoAtual.cep = cep
      enderecoAtual.estado = estado

      await enderecoAtual.save(function(err, task) {
      if(err) {
        res.send(err);
      }
      res.json(task);)
      return res.json({message: "Endereço atualizado."})
    }
  }
}
