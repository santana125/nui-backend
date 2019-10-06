const {Schema, model} = require('mongoose');

const EstabelecimentoSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    telefone: {
        type: String,
        required: true,
    },
    cor: {
        type: String,
        required: true,
    },
    nota: {
        type: Number,
    },
    valor: {
        type: Number,
    },
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
        select: false
    },
    endereco: {
        type: Schema.Types.ObjectId,
        ref: 'Endereco'
    },
    servicos: [{
        type: Schema.Types.ObjectId,
        ref: 'Servico'
    }],
},{timeStamps: true,});

module.exports = model('Estabelecimento', EstabelecimentoSchema);
