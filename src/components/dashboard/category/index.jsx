import React, { useState, useEffect } from "react";
import axios from "axios";
import "./style.css";
// This section refer to the category component

const Category = () => {
  const [students, setstudents] = useState([]);

  const [collection, setcollection] = useState();
  const [fineamount, setfineamount]= useState();

  const getstudents = async () => {
    try {
      await axios
        .get('https://ill-red-dress.cyclic.cloud/students')
        .then((response) => setstudents(response.data.students));
    } catch (error) {
      console.log(error);
    }
  };

  const getcollectionsinmonth = async () => {
    try {
      await axios
        .get('https://ill-red-dress.cyclic.cloud/getmonthtotal')
        .then((response) => setcollection(response.data.totals));
    } catch (error) {
      console.log(error);
    }
  };

  const getfineamount = async () => {
    try {
      await axios
        .get('https://ill-red-dress.cyclic.cloud/getfineamount')
        .then((response) => setfineamount(response.data));
    } catch (error) {
      console.log(error);
    }
  };
  

  useEffect(() => {
    getstudents();
    getcollectionsinmonth();
    getfineamount();
  }, []);

  return (
    <div className="tab-section">
      <div className="tab-item">
        <p className="category-title">Students</p>
        <p className="category-desc">{students.length}</p>
      </div>

      <div className="tab-item">
        <p className="category-title">Sections</p>
        <p className="category-desc">
          18
          <span> in 12 classes</span>
        </p>
      </div>

      <div className="tab-item">
        <p className="category-title">Collection this month</p>
        <p className="category-desc">{collection}</p>
      </div>

      <div className="tab-item">
        <p className="category-title">Fine Collected till date</p>
        <p className="category-desc">₹{fineamount}L</p>
      </div>
    </div>
  );
};

export default Category;
