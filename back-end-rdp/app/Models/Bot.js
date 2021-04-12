"use strict";

// Bots
/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class Bot extends Model {
  user() {
    return this.belongsTo("App/Models/User");
  }

  userclient() {
    return this.belongsTo("App/Models/CnpjClient");
  }
}

module.exports = Bot;
