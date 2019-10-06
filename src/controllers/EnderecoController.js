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

  }
}
