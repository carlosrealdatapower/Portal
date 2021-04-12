"use strict";

const Bot = use("App/Models/Bot");
const CnpjClient = use("App/Models/CnpjClient");
const Yup = use("yup");

class BotController {
  async index() {
    const bots = await Bot.query().with("user").fetch();
    const cnpjClients = await CnpjClient.query().with("userclient").fetch();

    return { bots };
  }

  async store({ request, response, auth }) {
    const schema = Yup.object().shape({
      nome_da_empresa: Yup.string().required(),
      nome_radar: Yup.string().required(),
      atividade: Yup.string().required(),
      robo_servicos_tomados: Yup.string().required(),
      robo_notas_entrada: Yup.string().required(),
      robo_servicos_prestados: Yup.string().required(),
      sefaz_user: Yup.string().required(),
      sefaz_password: Yup.string().required(),
      ncms_revenda: Yup.string().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response
        .status(400)
        .json({ error: "Erro de validação nos dados inseridos" });
    }

    const data = request.only([
      "nome_da_empresa",
      "nome_radar",
      "atividade",
      "robo_servicos_tomados",
      "robo_notas_entrada",
      "robo_servicos_prestados",
      "sefaz_user",
      "sefaz_password",
      "ncms_revenda",
    ]);

    const bot = Bot.create({ ...data, user_id: auth.user.id });

    return bot;
  }

  async show({ params }) {
    const bot = await Bot.findOrFail(params.id);

    await bot.load("user");

    return bot;
  }

  async update({ params, request }) {
    const bot = await Bot.findOrFail(params.id);
    const data = request.all();

    bot.merge(data);

    await bot.save();

    return bot;
  }

  async destroy({ params }) {
    const bot = await Bot.findOrFail(params.id);

    await bot.delete();
  }
}

module.exports = BotController;
