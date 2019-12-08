const {Schema, model} = require('mongoose');

const ServicoSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
    },
    categoria: {
        type: String,
        required: true,
    },
    tempo: {
        type: Number,
        required: true,
    },
    preco: {
        type: Number,
        required: true,
    },
    estabelecimentoId: {
        type: Schema.Types.ObjectId,
        ref: "Estabelecimento",
        required: true
      },
},{timeStamps: true,});


module.exports = model('Servico', ServicoSchema);
