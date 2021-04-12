import React from "react";
import { useHistory } from "react-router-dom";

import ClientModalComponent from "../../components/modal_clients_admin/index";
import EmpresasModalComponent from "../../components/modal_empresas_admin/index";

import { logout } from "../../service/auth";

import "./admsidebar.css";
import logo from "../../assets/logo.svg";

export default function AdmSideBar() {
  const history = useHistory();

  async function exitLogout() {
    logout();
    history.push("/");
  }

  return (
    <aside className="app-sidebar">
      <p>
        <img src={logo} alt="logo rdp" />
        <div className="buttonCadastro">
          <ClientModalComponent />
          <div className="buttonCadastro">
            <EmpresasModalComponent />
          </div>
        </div>
      </p>

      <footer>
        <button type="button" onClick={exitLogout}>
          Logout
        </button>
      </footer>
    </aside>
  );
}
