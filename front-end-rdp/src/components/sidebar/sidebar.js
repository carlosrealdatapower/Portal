import React from "react";
import { useHistory } from "react-router-dom";

import { logout } from "../../service/auth";

import "./sidebar.css";
import logo from "../../assets/logo.svg";

export default function SideBar() {
  const history = useHistory();

  async function exitLogout() {
    logout();
    history.push("/");
  }

  return (
    <aside className="app-sidebar">
      <p>
        <img src={logo} alt="logo rdp" />
      </p>

      <footer>
        <button type="button" onClick={exitLogout}>
          Logout
        </button>
      </footer>
    </aside>
  );
}
