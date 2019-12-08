const { Schema, model } = require("mongoose");

const AgendamentoSchema = new Schema(
  {

    horarioMarcado: {
      type: String,
      required: true
    },
    usuarioId: {
      type: Schema.Types.ObjectId,
      ref: "Usuario",
      required: true
    },
    estabelecimentoId: {
      type: Schema.Types.ObjectId,
      ref: "Estabelecimento",
      required: true
    },
    servicoId: {
      type: Schema.Types.ObjectId,
      ref: "Servico",
      required: true
    },
    status: { 
      type: String, 
      enum: ["concluido", "aguardando", "cancelado"],
      default: 'aguardando'
    },
    dataMarcada: {
      type: Date,
      required: true
    }
  },
  { timeStamps: true }
);

module.exports = model("Agendamento", AgendamentoSchema);
