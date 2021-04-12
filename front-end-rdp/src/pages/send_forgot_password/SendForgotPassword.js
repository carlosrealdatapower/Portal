import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./SendForgotPassword.css";
import logo from "../../assets/logo.svg";
import api from "../../service/api";

export default function SendForgotPassword() {
  const [email, setEmail] = useState();
  const history = useHistory();

  async function handleChangePassword(event) {
    event.preventDefault();
    try {
      const data = api
        .post("/passwords", { email })
        .then(history.push("/forgotpassword"));
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="container-fluid">
        <div style={{ marginTop: "20%" }}>
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
                      name="email"
                      placeholder="Email de cadastro"
                      value={email || ""}
                      onChange={(event) => {
                        setEmail(event.target.value);
                      }}
                    />
                  </div>

                  <button
                    style={{ marginTop: "55px" }}
                    className="btn btn-success btn-block fadeIn fourth"
                    type="submit"
                  >
                    Enviar
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
