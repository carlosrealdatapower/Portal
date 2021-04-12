"use strict";
const User = use("App/Models/User");
const Yup = use("yup");

class UserController {
  async index({ request }) {
    const data = await User.all();
    return data;
  }

  async store({ request, response }) {
    const schema = Yup.object().shape({
      cpf: Yup.string().required(),
      email: Yup.string().required(),
      password: Yup.string().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response
        .status(400)
        .json({ error: "Erro de validação nos dados inseridos" });
    }

    try {
      const data = request.only(["cpf", "email", "password", "admin"]);
      const user = await User.create(data);
      return user;
    } catch (error) {
      const { detail } = error;
      return response.send({ error: detail });
    }
  }
}

module.exports = UserController;
