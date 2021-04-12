"use strict";

const User = use("App/Models/User");
const Yup = use("yup");

class SessionController {
  async index() {
    const data = await User.all();

    return data;
  }

  async store({ request, response, auth }) {
    const schema = Yup.object().shape({
      cpf: Yup.string().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response
        .status(400)
        .json({ error: "Erro de validação nos dados inseridos" });
    }

    const { cpf, password } = request.only(["cpf", "password"]);

    const token = await auth.attempt(cpf, password);
    const user = await User.findBy("cpf", cpf);
    const user_id = user.id;
    const isAdmin = user.admin;

    return { user_id, token, isAdmin };
  }
}

module.exports = SessionController;
