import React from "react";

import Status from "./status";
import Category from "./category";
import Overview from "./overview";
import Payment from "./payment";
import Admin from "./admin";
import Disbural from "./disbural";

import "./style.css";
//Main Dashboard component
const Dashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <h2 style={{ marginLeft: "20px" }}>DAV Public School, Bhilai</h2>

      <Status />
      <Category />

      <div className="overview-section">
        <Overview />
        <Payment />
        <Admin />
        <Disbural />
      </div>
    </div>
  );
};

export default Dashboard;
