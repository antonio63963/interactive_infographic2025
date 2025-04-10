import "../../common/ui/twoValuesRow/twoValuesRow.css";
import "./mediaMathGrants.css";
import Chart from "chart.js/auto";
import { displayPopup, hidePopup } from "../index/index";

const canvas = document.querySelector("#grant-chart");
const mathGrants = {
  values: [62, 25, 25, 7, 7, 7],
  valuesColor: [
    "#F47D39",
    "#FFB455",
    "#FFB455",
    "#569FD6",
    "#569FD6",
    "#569FD6",
  ],
};

const options = {
  type: "doughnut",
  data: {
    // labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: "Beneficiaries",
        borderColor: "#ffffff",
        data: mathGrants.values,
        backgroundColor: mathGrants.valuesColor,
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
    cutout: 80,
    borderColor: "#ffffff",
  },
};

let mathBineficChart;
function initMathGrantChart() {
  const t = setTimeout(() => {
    mathBineficChart = new Chart(canvas, options);
    clearTimeout(t);
  }, 500);
}

const toMathGrant = document.querySelector(".toMathGrant");
const mathGrantClose = document.querySelector(".mathGrantClose");
const mathGrantPage = document.querySelector(".mathGrantPage");
const mathGrantOpacity = mathGrantPage.querySelector(".click-opacity");

function onOpacity(e) {
  if (e.target.classList.contains("click-opacity")) {
    closeMathGrantPage();
  }
}

function showMathGrantPage(e) {
  displayPopup(mathGrantPage);
  initMathGrantChart();
  animationMathGrant();
  mathGrantOpacity.addEventListener("click", onOpacity);
}
function closeMathGrantPage() {
  reverseAnimation();
  hidePopup(mathGrantPage);
  mathBineficChart.destroy();
  mathGrantOpacity.removeEventListener("click", onOpacity);
}
toMathGrant.addEventListener("click", showMathGrantPage);
mathGrantClose.addEventListener("click", closeMathGrantPage);

//animation elements

const sidebarIcons = document.querySelectorAll(".mathGrantPage .moveToRight");
const binefitItems = document.querySelectorAll(".binefic__list-item");
const mathGender = document.querySelectorAll(".gender-breakdown-values");

function animationMathGrant() {
  sidebarIcons.forEach((item, idx) => {
    const t = setTimeout(() => {
      item.classList.remove("moveToRight");
      clearTimeout(t);
    }, idx * 100 + 50);
  });
  binefitItems.forEach((item, idx) => {
    const t = setTimeout(() => {
      item.classList.remove("moveToLeft");
      clearTimeout(t);
    }, idx * 100);
  });
  mathGender.forEach((item, idx) => {
    const t = setTimeout(() => {
      item.classList.remove("moveUp");
      clearTimeout(t);
    }, idx * 110);
  });
}

function reverseAnimation() {
  sidebarIcons.forEach((item, idx) => {
    item.classList.add("moveToRight");
  });
  binefitItems.forEach((item, idx) => {
    item.classList.add("moveToLeft");
  });
  mathGender.forEach((item, idx) => {
    item.classList.add("moveUp");
  });
}
