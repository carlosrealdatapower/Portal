'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ForgotPasswordSchema extends Schema {
  up () {
    this.create('forgot_passwords', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('forgot_passwords')
  }
}

module.exports = ForgotPasswordSchema
