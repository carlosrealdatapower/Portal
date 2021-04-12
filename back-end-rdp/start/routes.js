"use strict";

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

//! Removendo index de usuarios
// Route.get("/user", "UserController.index");
Route.get("/", function ({ response }) {
  response.send("Serviço rodando, entre em contado com seu administrador.");
});
Route.post("/user", "UserController.store");

Route.post("/passwords", "ForgotPasswordController.store");
Route.put("/passwords", "ForgotPasswordController.update");

Route.get("/session/:id", "SessionController.index");
Route.post("/session", "SessionController.store");

Route.group(() => {
  Route.resource("/bots", "BotController").apiOnly();
  Route.resource("/clientcnpj", "CnpjClientController").apiOnly();
}).middleware(["auth"]);
