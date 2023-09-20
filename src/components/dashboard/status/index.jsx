import React, { useState, useEffect } from "react";
import axios from "axios";

import "./style.css";

const Status = () => {
  let [totalcollection, settotalcollection] = useState();
  const [defaultstudents, setdefaultstudents] = useState();

  const gettotalcollection = async () => {
    try {
      await axios
        .get("https://ill-red-dress.cyclic.cloud/gettotalamount")
        .then((response) => settotalcollection(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  const getdefaulterstudents = async () => {
    try {
      await axios
        .get("https://ill-red-dress.cyclic.cloud/getdefaulter")
        .then((response) => setdefaultstudents(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    gettotalcollection();
    getdefaulterstudents();
  }, []);

  return (
    <div className="earning-section">
      <div className="earn-item first">
        <div className="icon-container">
          <img src="./assets/icons/money.png" className="item-icon" />
        </div>

        <div className="item-content">
          <span className="item-type">Collection till date</span>
          <h2 className="item-title">{totalcollection}Cr</h2>
          <div className="item-status">
            <span className="fa fa-arrow-up status"></span>
            <span className="status">10%</span>
            <span className="status-day"> in last 30 days</span>
          </div>
        </div>
      </div>

      <div className="earn-item middle">
        <div className="icon-container">
          <img src="./assets/icons/wallet.png" className="item-icon" />
        </div>

        <div className="item-content">
          <span className="item-type">Balance</span>
          <h2 className="item-title">₹2.4L</h2>
          <div style={{ fontSize: "0.8rem", height: "0.8rem" }} />
        </div>
      </div>

      <div className="earn-item last">
        <div className="icon-container">
          <img src="./assets/icons/chart.png" className="item-icon" />
        </div>

        <div className="item-content">
          <span className="item-type">Defaulters</span>
          <div style={{ display: "flex", alignItems: "center" }}>
            <h2 className="item-title">{defaultstudents}</h2>
            <span style={{ fontSize: "0.8rem", marginLeft: "5px" }}>
              {" "}
              / 1,049 Students
            </span>
          </div>
          <div className="item-status">
            <span className="fa fa-arrow-down status"></span>
            <span className="status">11%</span>
            <span className="status-day"> in last 30 days</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Status;
