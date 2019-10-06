const {Schema, model} = require('mongoose');


const EnderecoSchema = new Schema({
    cep: {
        type: String,
        required: true,
    },  
    estado: {
        type: String,
        required: true,
    },  
    cidade: {
        type: String,
        required: true,
    },  
    numero: {
        type: String,
        required: true,
    },  
    endereco: {
        type: String,
        required: true,
    },  
    lat: {
        type: Number,
    },  
    lon: {
        type: Number,
    },  

},{timeStamps: true,});


module.exports = model('Endereco', EnderecoSchema);
