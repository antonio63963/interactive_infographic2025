import './genderChart.css';

import { Chart } from "chart.js/auto";

function initGenderChart(canvas, values, valuesColors) {
  const options = {
    type: "doughnut",
    data: {
      datasets: [
        {
          label: "Gender",
          borderColor: "#ffffff",
          data: values,
          backgroundColor: valuesColors,
          hoverOffset: 6,
        },
      ],

      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
    options: {
      cutout: "70%",
      borderColor: "#ffffff",
    },
  };
  Chart.defaults.borderColor = "#ffffff";
  return new Chart(canvas, options);
}

export { initGenderChart };