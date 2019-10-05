const Endereco = require('../models/Endereco');

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
        return res.json({message: `${usuario_id}`})
      })

  }
}
