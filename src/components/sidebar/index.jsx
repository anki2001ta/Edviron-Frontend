import React, { useState, useEffect } from 'react';

import "./style.css"
// This component has the code for both versions of sidebar (minisidebar and Defaultsidebar)
const MenuItem = (props) => {
    return (
        props.visible && <div className='nav-link'>
            {props.name}
        </div>
    )
}

const Sidebar = () => {

    const [show, setShow] = useState(window.innerWidth >= 996 ? true : false);

    const Visible = () => {
        if (window.innerWidth < 996) {
            setShow(false);
        } else {
            setShow(true);
        }
    }

    window.addEventListener('resize', Visible);

    const link = [
        {
            name: "fee management",
            icon: "./assets/icons/fee.png"
        }, {
            name: "students",
            icon: "./assets/icons/students.png"
        }, {
            name: "disbural",
            icon: "./assets/icons/disbural.png"
        }, {
            name: "promote",
            icon: "./assets/icons/promote.png"
        }, {
            name: "help",
            icon: "./assets/icons/help.png"
        },
    ]

    return (
        <div className="sidebar-container" style={{ width: show ? "350px" : "90px" }}>

            <div className='sidebar-logo'>

                <img src="./assets/logo.png" className="logo-img" />

                {show && <div>
                    <span className="main-title">Edviron</span>
                    <span className="version">v.01</span>
                </div>}
            </div>

            <div className="sidebar">
                <div className="selected nav-item">

                    <img src="./assets/icons/dashboard.png" className="nav-item-img" />
                    <MenuItem visible={show} name="Dashboard" />
                    {show && <span style={{ color: "white", fontSize: "1rem", marginLeft: "auto", marginRight: "20px" }} className='fa fa-angle-right'></span>}

                </div>

                {
                    link.map((item, idx) => (
                        <div key={idx} className="nav-item">

                            <img src={item.icon} className="nav-item-img" />
                            <MenuItem visible={show} name={item.name} />
                            {show && <span className="fa fa-angle-right" style={{ color: "#9197B3", fontSize: "1rem", marginLeft: "auto", marginRight: "20px" }}></span>}

                        </div>
                    ))
                }

            </div>

            <div className="user-profile">

                <img src="assets/avatar.png" alt="avatar" className="avatar-img" />
                {show && <div className="user-info">
                    <span className='user-name'>Prashant Kumar</span>
                    <span className='user-role'>Super Admin</span>
                </div>}
                {show && <span className='fa fa-angle-down' style={{ marginLeft: "auto", marginRight: "20px" }}></span>}
            </div>

        </div>

    )

}

export default Sidebar;