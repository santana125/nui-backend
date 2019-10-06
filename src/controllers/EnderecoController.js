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
        Estabelecimento.setEndereco(usuario_id, newEndereco._id)

      })

  }
}
