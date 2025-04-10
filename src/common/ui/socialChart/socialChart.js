import { Chart, elements, plugins } from "chart.js/auto";
import { callback } from "chart.js/helpers";

function initSocialChart(canvas, settings) {
  const {values, range, borderColor, step} = settings || {};

  const labels = [
    null,
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
    null
  ];

  const options = {
    type: "line",
    data: {
      showLine: false,
      labels: labels,
      datasets: [
        {
          data: [null, ...values],
          fill: false,
          borderColor: borderColor || "#F47D39",
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      elements: {
        point: {
          radius: 0,
          backgroundColor: 'rgba(0,0,0,0)',
          borderWidth: 0,
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          min: range.min || 0,
          max: range.max || 100000,
          ticks: {
            stepSize: step || 20000,
          },
          grid: {
            drawOnChartArea: false,
          },
          
        },
        x: {
          grid: {
            drawOnChartArea: false,
            // color: 'rgba(0,0,0,0)',
          }
        }
      },
      plugins: {
        legend: {
          display: false,
          font: {
            size: 18,
            family: 'Arabic'
          }
        },
        
      },
    },
  };

  Chart.overrides.line.spanGaps = true;
  Chart.defaults.font.family = "Arabic";
  Chart.defaults.color = "#000";
  Chart.defaults.font.size = 12;

  return new Chart(canvas, options);
}

export { initSocialChart };
