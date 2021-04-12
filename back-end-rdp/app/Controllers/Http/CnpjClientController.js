"use strict";

const ClientCnpj = use("App/Models/CnpjClient");
const Yup = use("yup");

class CnpjClientController {
  async index() {
    const data = await ClientCnpj.all();

    return data;
  }

  async store({ request, response, auth }) {
    const schema = Yup.object().shape({
      cnpj: Yup.string().required(),
      email: Yup.string().required(),
      name: Yup.string().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response
        .status(400)
        .json({ error: "Erro de validação nos dados inseridos" });
    }

    const data = request.only(["cnpj", "email", "name"]);
    const userClient = ClientCnpj.create({
      ...data,
      cnpj_client_id: auth.user.id,
    });
    return userClient;
  }
}

module.exports = CnpjClientController;
