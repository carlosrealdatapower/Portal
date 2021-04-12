"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CnpjSchema extends Schema {
  up() {
    this.create("bots", (table) => {
      table.increments();
      table
        .integer("user_id")
        .unsigned()
        .references("id")
        .inTable("cnpj_clients")
        .onUpdate("CASCADE")
        .onDelete("SET NULL");

      table.string("nome_da_empresa").notNullable();
      table.string("nome_radar").notNullable();
      table.string("atividade").notNullable();
      table.string("robo_servicos_tomados").notNullable();
      table.string("robo_notas_entrada").notNullable();
      table.string("robo_servicos_prestados").notNullable();
      table.string("sefaz_user").notNullable();
      table.string("sefaz_password").notNullable();
      table.string("ncms_revenda").notNullable();
      table.timestamps();
    });
  }

  down() {
    this.drop("bots");
  }
}

module.exports = CnpjSchema;
