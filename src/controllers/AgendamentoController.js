const Agendamento = require("../models/Agendamento");
const Servico = require("../models/Servico");
const Usuario = require("../models/Usuario");
const Estabelecimento = require("../models/Estabelecimento");
const horarios = ['08:00', '08:30',
                  '09:00', '09:30',
                  '10:00', '10:30',
                  '11:00', '11:30',
                  '13:00', '13:30',
                  '14:00', '14:30',
                  '15:00', '15:30',
                  '16:00', '16:30',
                  '17:00', '17:30',
                  '18:00', '18:30' ]
module.exports = {
  async index(req, res){
    const {estabelecimentoId, dataMarcada} = req.body
    const appointments = await Agendamento.find({estabelecimentoId, dataMarcada}, 'horarioMarcado')
    let horariosLivres = horarios
    appointments.map(item => {
      horariosLivres.splice(horariosLivres.indexOf(item.horarioMarcado), 1)
    })
    return res.json({horariosLivres})
  },
  async store(req, res) {
    const { dataMarcada, horarioMarcado, servicoId } = req.body;
    const { usuario_id } = req;
    const servico = await Servico.findById(servicoId)
    if(horarios.indexOf(horarioMarcado) === -1) return res.status(400).json({message: "Horario invalido" })
    if(!servico) return res.status(404).json({message: "Servico não encontrado!" })
    var estabelecimento = await Estabelecimento.findById(servico.estabelecimentoId);
    const verifyService = await Agendamento.findOne({estabelecimentoId: servico.estabelecimentoId, dataMarcada, horarioMarcado})
    if(verifyService) return res.status(409).json({message: "Horario já agendado!" })
    const newAgendamento = new Agendamento({
      dataMarcada,
      horarioMarcado,
      servicoId,
      estabelecimentoId: estabelecimento._id,
      usuarioId: usuario_id
    });
    await newAgendamento.save()
    .then(async () => {
          return res.json({message: "Agendamento cadastrado."})
    })
    .catch((err) => {
      console.log(err)
    return res.status(500).json({message: "Erro ao cadastrar Agendamento." })})
  },
  async update(req, res){
    const {agendamentoId, novoStatus} = req.body

    const agendamento = await Agendamento.findById(agendamentoId)
    if(!agendamento) return res.status(409).json({message: "Agendamento não encontrado" })

    agendamento.status = novoStatus
    agendamento.save()
    .then(() => {
      return res.json({message: "Agendamento atualizado."})
    })
    .catch(() => {
      return res.status(500).json({message: "Erro ao cadastrar Agendamento." })
    })

  }

};
