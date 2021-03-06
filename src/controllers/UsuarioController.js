const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Usuario = require("../models/Usuario");

module.exports = {
  async index(req, res) {
    const { usuario_id } = req;
    const user = await Usuario.findById(usuario_id);
    return res.json(user);
  },
  async store(req, res) {
    const { nome, email, senha, senha2, cadastroPessoa } = req.body;

    const emailInUse = await Usuario.findOne({ email });
    if (emailInUse) return res.json({ message: "Email já cadastrado." });
    if (senha !== senha2) return res.json({ message: "Senhas não coincidem." });

    const usuario = new Usuario({
      nome,
      email,
      senha,
      cadastroPessoa
    });

    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(senha, salt, async (err, hash) => {
        if (err) throw err;

        usuario.senha = hash;
        await usuario
          .save()
          .then(() => {
            usuario.senha = undefined;
            const token = jwt.sign({ id: usuario.id }, "secret", {
              expiresIn: 1000
            });
            return res.json({ message: `Bearer ${token}` });
          })
          .catch(() => {});
      });
    });
  },
  async setEstabelecimento(usuarioId, estabelecimentoId) {
    usuario = await Usuario.findById(usuarioId);

    if (usuario) {
      usuario.estabelecimento = estabelecimentoId;
      await usuario.save();
      return true;
    } else {
      return false;
    }
  },
  async finishSignup(req, res) {
    const { usuario_id } = req;
    const response = await Usuario.updateOne(
      { _id: usuario_id },
      { status: 1 }
    );
    return res.json(response);
  }
};
