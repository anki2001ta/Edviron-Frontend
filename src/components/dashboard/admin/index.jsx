import React, { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";

// This is the edmin component where we can get the list of all admins

const Admin = () => {
  //     // const admins = [
  //     //     {
  //     //         name: "Prashant Kumar", role: "Super Admin"
  //     //     },
  //     //     {
  //     //         name: "Jasraj Singh Bhatia", role: "Admin"
  //     //     },
  //     //     {
  //     //         name: "Tarun Kheria", role: "Admin"
  //     //     },
  //     //     {
  //     //         name: "Aditya Mullay", role: "Management Staff"
  //     //     }
  //     // ]

  const [admins, setadmins] = useState([]);
  const getadmins = async () => {
    try {
      const response = await axios.get(
        "https://ill-red-dress.cyclic.cloud/getadmins"
      );
      console.log(response, "success");
      setadmins(response.data.admins);
    } catch (error) {
      console.error("Error:", error); // Log the error for debugging
    }
  };

  useEffect(() => {
    getadmins();
  }, []);

  // console.log(admins);
  return (
    <div className="admin-container">
      <p className="admin-title">Admins</p>
      <table>
        <thead>
          <tr className="bordered">
            <th>Name</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((item, idx) => (
            <tr key={idx}>
              <td>{item.name}</td>
              <td>{item.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
