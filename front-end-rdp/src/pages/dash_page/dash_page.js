import React, { useState, useEffect } from "react";
import api from "../../service/api";
import "./dash_page.css";

import Sidebar from "../../components/sidebar/sidebar";
import ModalInsert from "../../components/modal/modal";
import ModalEditComponent from "../../components/edit_modal/edit_modal";
import LineGraph from "../../components/graficos/line/line_graph";
import BarGraph from "../../components/graficos/bar/bar_graph";
import LineBarArea from "../../components/graficos/area/line_bar_area";
import RadarArea from "../../components/graficos/radar_area/radar_area";

export default function Dashboard() {
  let [dataIndex, setDataIndex] = useState([]);
  useEffect(() => {
    dataClients();
  }, []);

  async function dataClients() {
    const clientList = await api.get(`/bots`);
    let data = clientList.data;
    const { bots } = data;
    setDataIndex(bots);
  }

  async function handleDelete(id, event) {
    event.preventDefault();
    await api.delete(`/bots/${id}`);
    await dataClients();
  }

  return (
    <>
      <div className="container-fluid" style={{ marginBottom: "25px" }}>
        <div className="row">
          <Sidebar />
          <div className="container"></div>
          <ModalInsert inserNewData={dataClients}/>
        </div>
        <div id="global">
          <div className="container-fluid">
            <div className="graph-container">
              <LineGraph />
              <BarGraph />
            </div>
            <div className="graph-container">
              <LineBarArea />
              <RadarArea />
            </div>
          </div>
        </div>

        <div className="table-responsive-sm tableContainerClients">
          <table className="table table-hover table-lg">
            <tbody>
              <tr className="thead-dark" id={api.user_id}>
                <th>Nome da Empresa</th>
                <th>Nome Radar</th>
                <th>Atividade</th>
                <th>Serviços Tomados</th>
                <th>Notas Entrada</th>
                <th>Serviços Prestados</th>
                <th>Sefaz User</th>
                <th>Sefaz Password</th>
                <th>NCMC Revenda</th>
              </tr>

              {dataIndex.map((data) => (
                <tr id={data.user_id}>
                  <td>{data.nome_da_empresa}</td>
                  <td>{data.nome_radar}</td>
                  <td>{data.atividade}</td>
                  <td>{data.robo_servicos_tomados}</td>
                  <td>{data.robo_notas_entrada}</td>
                  <td>{data.robo_servicos_prestados}</td>
                  <td>{data.sefaz_user}</td>
                  <td>{data.sefaz_password}</td>
                  <td>{data.ncms_revenda}</td>
                  <div style={{ display: "flex" }}>
                    <ModalEditComponent idBot={data.id} />
                    <button
                      className="btn btn-danger botao"
                      onClick={(event) => handleDelete(data.id, event)}
                    >
                      Deletar
                    </button>
                  </div>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
