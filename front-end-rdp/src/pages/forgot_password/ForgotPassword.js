import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./ForgotPassword.css";
import logo from "../../assets/logo.svg";
import api from "../../service/api";

export default function ForgotPassword() {
  const [token, setToken] = useState();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const history = useHistory();

  async function handleChangePassword(event) {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Senhas nao são iguais");
    } else {
      const data = api
        .put("/passwords", { token, password })
        .then(history.push("/"));
      return data;
    }
  }

  return (
    <>
      <div className="container-fluid">
        <div style={{ marginTop: "10%" }}>
          <form onSubmit={handleChangePassword}>
            <div className="wrapper fadeInDown">
              <div className="App-header">
                <div className="App-logo img-fluid">
                  <img src={logo} alt="" />
                </div>

                <div className="cardinput">
                  <div>
                    <input
                      type="text"
                      id="login"
                      className="fadeIn second"
                      name="cnpj"
                      placeholder="Token de Autorização"
                      value={token || ""}
                      onChange={(event) => {
                        setToken(event.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <input
                      autoComplete="false"
                      type="password"
                      id="password"
                      className="fadeIn third"
                      name="password"
                      placeholder="Nova Senha"
                      value={password || ""}
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
                    />
                  </div>

                  <div>
                    <input
                      autoComplete="false"
                      type="password"
                      id="password"
                      className="fadeIn third"
                      name="confirm_password"
                      placeholder="Confirmação da Senha"
                      value={confirmPassword || ""}
                      onChange={(event) => {
                        setConfirmPassword(event.target.value);
                      }}
                    />
                  </div>

                  <button
                    style={{ marginTop: "55px" }}
                    className="btn btn-success btn-block fadeIn fourth"
                    type="submit"
                  >
                    Alterar Senha
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
