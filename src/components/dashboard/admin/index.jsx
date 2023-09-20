import React from 'react';
import './style.css'

// This is the edmin component where we can get the list of all admins
const Admin = () => {
    const admins = [
          {
              name: "Prashant Kumar", role: "Super Admin"
          },
          {
              name: "Jasraj Singh Bhatia", role: "Admin"
          },
          {
              name: "Tarun Kheria", role: "Admin"
          },
          {
              name: "Aditya Mullay", role: "Management Staff"
          }
      ]
  
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
      )
  

}

export default Admin;