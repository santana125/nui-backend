const {Schema, model} = require('mongoose');


const UsuarioSchema = new Schema({
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    senha: {
        type: String,
        required: true,
    },
    cadastroPessoa: {
        type: String,
        required: true,
    },
    estabelecimentoId: {
        type: Schema.Types.ObjectId,
        ref: 'Estabelecimento',
    },
},{timeStamps: true,});

module.exports = model('Usuario', UsuarioSchema);
