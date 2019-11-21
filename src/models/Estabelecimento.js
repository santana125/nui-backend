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
        default: 3
    },
    valor: {
        type: Number,
        default: 3
    },
    avatar: {
        type: String,
    },
    background: {
        type: String,
    },
    is_opened: {
        type: Boolean,
        default: true
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
