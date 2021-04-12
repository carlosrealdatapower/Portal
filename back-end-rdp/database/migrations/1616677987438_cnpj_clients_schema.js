"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CnpjClientsSchema extends Schema {
  up() {
    this.create("cnpj_clients", (table) => {
      table.increments();
      table
        .integer("cnpj_client_id")
        .unsigned()
        .references("id")
        .inTable("users")
        .onUpdate("CASCADE")
        .onDelete("SET NULL");

      table.string("cnpj");
      table.string("email");
      table.string("name");
      table.timestamps();
    });
  }

  down() {
    this.drop("cnpj_clients");
  }
}

module.exports = CnpjClientsSchema;
