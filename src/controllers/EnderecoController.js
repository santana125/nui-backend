const Endereco = require('../models/Endereco');
const Estabelecimento = require('../controllers/EstabelecimentoController');

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
        const response = await Estabelecimento.setEndereco(usuario_id, newEndereco._id)
        if (response)
          return res.json({message: "Endereço cadastrado."})
        else
          return res.status(400).json({message: "Erro ao cadastrar endereço."})
      })
  },
  async update(req, res) {
    const { endereco, cidade, numero, cep, estado } = req.body
    const {usuario_id} = req
    estabelecimento = await Estabelecimento.findOne({usuarioID: usuario_id})
    const enderecoAtual = Endereco.findById(estabelecimento.enderecoId)

    if(enderecoAtual){
      enderecoAtual.endereco = endereco
      enderecoAtual.cidade = cidade
      enderecoAtual.numero = numero 
      enderecoAtual.cep = cep
      enderecoAtual.estado = estado
      await enderecoAtual.save()
      .then (() =>{
        console.log('Worked')
      })
      .catch (() => {
        console.log('do not Worked')

      })

    }
  }
}
