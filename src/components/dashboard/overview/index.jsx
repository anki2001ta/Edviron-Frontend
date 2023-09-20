import React from "react";
import { BarChart } from "./BarChart";

import './style.css';

const Overview = () => (
    <div className="overview-container">

        <p className="overview-title">Overview</p>
        <p className="overview-desc">Monthly collection</p>
        <div className="chart">
            <BarChart />
        </div>

    </div>
)

export default Overview;