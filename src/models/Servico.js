const {Schema, model} = require('mongoose');

const ServicoSchema = new Schema({
    titulo: {
        type: String,
        required: true,
    },
    descricao: {
        type: String,
        required: true,
    },
    categoria: {
        type: String,
        required: true,
    },
    tempoEstimado: {
        type: Number,
        required: true,
    },
},{timeStamps: true,});


module.exports = model('Servico', ServicoSchema);
