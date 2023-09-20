import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip);

export default function PieChart(props) {
  const data = {
    labels: props.data.map((item) => item.label),
    datasets: [
      {
        label: "rate",
        data: props.data.map((item) => item.value),
        backgroundColor: ["#4318FF", "#6AD2FF", "#EFF4FB"],
        borderWidth: 0,
      },
    ],
  };

  return <Pie data={data} />;
}
