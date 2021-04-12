import React from "react";

import AdmSideBar from "../../components/sidebar_adm/admsidebar";
import LineGraph from "../../components/graficos/line/line_graph";
import BarGraph from "../../components/graficos/bar/bar_graph";
import LineBarArea from "../../components/graficos/area/line_bar_area";
import RadarArea from "../../components/graficos/radar_area/radar_area";

import "./index_admin.css";

export default function UserSelect() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <AdmSideBar />
        </div>
        <div className="graph-container">
          <LineGraph />
          <BarGraph />
        </div>
        <div className="graph-container">
          <LineBarArea />
          <RadarArea />
        </div>
      </div>
    </>
  );
}
