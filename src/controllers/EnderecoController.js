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
      .then(() => {
        if (Estabelecimento.setEndereco(usuario_id, newEndereco._id))
          return res.json({message: "Endereço cadastrado."})
        else
          return res.status(400).json({message: "Endereço cadastrado."})


      })

  }
}
