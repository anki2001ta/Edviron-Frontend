import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
// This component refer the status and content of Disbural
const Disbural = () => {
  // const disburals = [
  //     {
  //         date: "July 11, 2023", amount: "₹5,03,123", status: "Pending"
  //     },
  //     {
  //         date: "July 10, 2023", amount: "₹5,03,123", status: "Successful"
  //     },
  //     {
  //         date: "July 9, 2023", amount: "₹5,03,123", status: "Successful"
  //     },
  //     {
  //         date: "July 8, 2023", amount: "₹5,03,123", status: "Successful"
  //     }
  // ]

  const [disburals, setdisburals] = useState([]);

  const getdisburals = async () => {
    try {
      await axios
        .get("https://ill-red-dress.cyclic.cloud/gettransaction")
        .then((response) => setdisburals(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getdisburals();
  }, []);

  return (
    <div className="disbural-container">
      <p className="disbural-title">Disburals</p>
      <table>
        <thead>
          <tr className="bordered">
            <th>Date</th>
            <th>Amount</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {disburals.map((item, idx) => (
            <tr key={idx}>
              <td>{item.date}</td>
              <td>{item.amount}</td>
              <td className="disbural-status">
                <span>
                  <img
                    src={`./assets/${
                      item.status === "Pending" ? "pending.png" : "success.png"
                    }`}
                  />
                </span>
                <span>{item.status}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Disbural;
