import React from 'react';
import PieChart from './PieChart'

import './style.css'
//This is the dynamic payment component using pie charts.
// Harshit tumko ye jo Admin ka array of obj banaya hai uski jagha api call krna using useState and effect and karne ke baad comment hatadena ui meh kuch change ni hoga
const Payment = () => {
    const data = [
        {
            label: "Online",
            value: 63
        },
        {
            label: "Cash",
            value: 25
        },
        {
            label: "Cheque",
            value: 11
        },
    ];

    const className = ["first", "second", "third"];

    return (<div className="payment-container">
        <p className="payment-title">Payment Mode</p>
        <p className="payment-subtitle">Split between Online, Cash
            and Cheque for collections till date</p>
        <div className="circled-chart">
            <div className="circled-chart-img">
                <PieChart data={data} />
            </div>
            <div className="chart-state">
                {data.map((item, idx) => (
                    <div className={`state-item ${className[idx]}`} key={idx}>
                        <p className="item-description"><span className="fa fa-circle"></span>{item.label}</p>
                        <p className="item-value">{item.value}%</p>
                    </div>
                ))}
            </div>
        </div>
    </div>)
}

export default Payment;