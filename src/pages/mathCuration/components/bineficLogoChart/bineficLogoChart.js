import "./bineficLogoChart.css";

import { Chart } from "chart.js/auto";

function initBineficLogoChart(canvas, values, valuesColors) {
  const options = {
    type: "doughnut",
    data: {
      datasets: [
        {
          label: "Beneficiaries",
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
      cutout: "80%",
      borderColor: "#ffffff",
    },
  };
  Chart.defaults.borderColor = "#ffffff";
  return new Chart(canvas, options);
}

export { initBineficLogoChart };
