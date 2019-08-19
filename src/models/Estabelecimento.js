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
    usuarioId: {
        type: Schema.Types.ObjectId,
        ref: 'Usuario',
    },
    enderecoId: {
        type: Schema.Types.ObjectId,
        ref: 'Endereco'
    },
    servicosId: [{
        type: Schema.Types.ObjectId,
        ref: 'Servico'
    }],
},{timeStamps: true,});

module.exports = model('Estabelecimento', EstabelecimentoSchema);
