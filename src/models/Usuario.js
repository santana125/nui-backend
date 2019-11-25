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
				select: false,
        required: true,
    },
    cadastroPessoa: {
        type: String,
        required: true,
    },
    avatar: {
        type: String,
    },
    estabelecimento: {
        type: Schema.Types.ObjectId,
        ref: 'Estabelecimento',
    },
    status: {
        type: Number,
        default: 0
    }
},{timeStamps: true,});

module.exports = model('Usuario', UsuarioSchema);
