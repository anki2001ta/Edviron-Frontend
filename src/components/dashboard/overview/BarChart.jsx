import React, { useState, useEffect } from "react";
import axios from "axios";
// This is the Dynamic Barchart Component
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip);

export const options = {
  maintainAspectRatio: false,
  aspectRatio: 1,
  barBorderRadius: 5,
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
  },
  scales: {
    y: {
      display: false,
      beginAtZero: false,
      ticks: {
        min: 100,
      },
      grid: {
        display: false,
      },
    },
    x: {
      ticks: {
        font: {
          family: "Poppins, sans-serif",
        },
      },
      grid: {
        display: false,
      },
    },
  },
};

export function BarChart() {
  const [thickness, setThickness] = useState(
    window.innerWidth > 1220
      ? 30
      : window.innerWidth > 768
      ? 20
      : window.innerWidth > 550
      ? 8
      : 4
  );
  const [monthlydata, setmonthlydata] = useState([]);

  const getmonthlydata = async () => {
    try {
      await axios
        .get("https://ill-red-dress.cyclic.cloud/getmonthtotal")
        .then((response) => setmonthlydata(response.data.months));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getmonthlydata();
  }, []);

  const labels = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const datas = [100, 100, 90, 80, 70, 60, 50, 40, 30, 20, 10, 0];

  for (let i = 0; i < monthlydata.length; i++) {
    labels[i] = monthlydata[i].month;
    datas[i] = monthlydata[i].totalAmount;
  }

  const data = {
    labels,
    datasets: [
      {
        label: "rate",
        data: datas,
        backgroundColor: "#F2EFFF",
        barThickness: thickness,
      },
    ],
  };

  window.onresize = () => {
    setThickness(
      window.innerWidth > 1220
        ? 30
        : window.innerWidth > 768
        ? 20
        : window.innerWidth > 550
        ? 8
        : 4
    );
  };
  return <Bar options={options} data={data} />;
}
