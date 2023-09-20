import React, { useState, useEffect } from "react";
import axios from "axios";
import PieChart from "./PieChart";

import "./style.css";
//This is the dynamic payment component using pie charts.

const Payment = () => {
  // const data = [
  //     {
  //         label: "Online",
  //         value: 63
  //     },
  //     {
  //         label: "Cash",
  //         value: 25
  //     },
  //     {
  //         label: "Cheque",
  //         value: 11
  //     },
  // ];

  const [data, setdata] = useState([]);
  const getpercentage = async () => {
    try {
      await axios
        .get("https://ill-red-dress.cyclic.cloud/getpercentage")
        .then((response) => setdata(response.data));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getpercentage();
  }, []);

  const className = ["first", "second", "third"];

  return (
    <div className="payment-container">
      <p className="payment-title">Payment Mode</p>
      <p className="payment-subtitle">
        Split between Online, Cash and Cheque for collections till date
      </p>
      <div className="circled-chart">
        <div className="circled-chart-img">
          <PieChart data={data} />
        </div>
        <div className="chart-state">
          {data.map((item, idx) => (
            <div className={`state-item ${className[idx]}`} key={idx}>
              <p className="item-description">
                <span className="fa fa-circle"></span>
                {item.label}
              </p>
              <p className="item-value">{item.value}%</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Payment;
