const Endereco = require('../models/Endereco');

module.exports = {
    async store(req, res){
      const { endereco, cidade, numero, cep, estado } = req.body
      const {usuario_id} = req
      
      const endereco = new Endereco({
        endereco,
        cidade,
        estado,
        cep,
        numero,
      })
      await endereco.save()
      .then(() => {
        return res.json({message: `${usuario_id}`})
      })

  }
}
