import React from 'react';
import './style.css';
// This section refer to the category section

import React from 'react'

const Category = () => (
    <div className="tab-section">

        <div className="tab-item">
            <p className="category-title">Students</p>
            <p className="category-desc">1,049</p>
        </div>

        <div className="tab-item">
            <p className="category-title">Sections</p>
            <p className="category-desc">18
                <span> in 12 classes</span>
            </p>
        </div>

        <div className="tab-item">
            <p className="category-title">Collection this month</p>
            <p className="category-desc">₹90.56L</p>
        </div>

        <div className="tab-item">
            <p className="category-title">Fine Collected till date</p>
            <p className="category-desc">₹11.20L</p>
        </div>

    </div>
)


export default Category