import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { IoLogIn } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";

import { login } from "../../service/auth";

import "./LoginPage.css";
import logo from "../../assets/logo.svg";
import api from "../../service/api";

export default function LoginPage() {
  const [cpf, setCpf] = useState();
  const [password, setPassword] = useState("");
  const history = useHistory();

  async function handleLogin(event) {
    event.preventDefault();

    try {
      const data = await api.post("/session", { cpf, password });
      const { token } = data.data;
      const { isAdmin } = data.data;
      login(data.data.token.token);

      api.defaults.headers["Authorization"] = `Bearer ${token.token}`;

      if (isAdmin === true) {
        history.push({
          pathname: `/admin/${data.data.user_id}`,
          state: { idUser: data.data.user_id },
        });
      } else {
        history.push({
          pathname: `/dash/${data.data.user_id}`,
          state: { idUser: data.data.user_id },
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function handleForgotPassword() {
    history.push("/sendemail");
  }

  return (
    <>
      <div className="container-fluid">
        <div style={{ marginTop: "10%" }}>
          <form onSubmit={handleLogin}>
            <div className="wrapper fadeInDown">
              <div className="App-header">
                <div className="App-logo img-fluid">
                  <img src={logo} alt="" />
                </div>

                <div className="cardinput">
                  <div>
                    <IoLogIn size={16} color="#00499B" />
                    <input
                      type="text"
                      id="login"
                      className="fadeIn second"
                      name="cnpj"
                      placeholder="CPF"
                      value={cpf || ""}
                      onChange={(event) => {
                        setCpf(event.target.value);
                      }}
                    />
                  </div>
                  <div>
                    <RiLockPasswordFill size={16} color="#00499B" />
                    <input
                      autoComplete="false"
                      type="password"
                      id="password"
                      className="fadeIn third"
                      name="login"
                      placeholder="password"
                      value={password || ""}
                      onChange={(event) => {
                        setPassword(event.target.value);
                      }}
                    />
                  </div>

                  <button
                    className="btn btn-primary btn-block fadeIn fourth"
                    type="submit"
                  >
                    Entrar
                  </button>
                  <div style={{ justifyItems: "start", marginTop: "25px" }}>
                    <button
                      className="btn btn-link"
                      onClick={handleForgotPassword}
                    >
                      Esqueci senha
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
