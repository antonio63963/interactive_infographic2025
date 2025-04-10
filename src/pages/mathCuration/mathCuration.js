import { displayPopup, hidePopup } from "../index/index.js";
import { initBineficLogoChart } from "./components/bineficLogoChart/bineficLogoChart.js";
import { initGenderChart } from "../../common/ui/genderChart/genderChart.js";

const toMathCuration = document.querySelector(".toMathCuration");
const mathCurationPage = document.querySelector(".mathCurationPage");
const mathCurationClose = document.querySelector(".mathCurationClose");
const mathCurationOpacity = mathCurationPage.querySelector('.click-opacity'); 

const bineficChartsData = [
  {
    title: "KFAS",
    canvas: document.querySelector("#binefic_1"),
    num: 440,
    values: [205, 290],
    valuesColors: ["#F47D39", "#E0E0E0"],
  },
  {
    title: "google",
    num: 248,
    canvas: document.querySelector("#binefic_2"),
    values: [118, 340],
    valuesColors: ["#F47D39", "#E0E0E0"],
  },
  {
    title: "camp",
    num: 88,
    canvas: document.querySelector("#binefic_3"),
    values: [80, 340],
    valuesColors: ["#FFB455", "#E0E0E0"],
  },
  {
    title: "hackaton",
    num: 147,
    canvas: document.querySelector("#binefic_4"),
    values: [88, 340],
    valuesColors: ["#FFB455", "#E0E0E0"],
  },
  {
    title: "STEM",
    num: 14,
    canvas: document.querySelector("#binefic_5"),
    values: [14, 340],
    valuesColors: ["#569FD6", "#E0E0E0"],
  },
];

// compute % for charts by total num
const allBeneficsNum = bineficChartsData.reduce((acc, item) => {
  return acc += item.num;
}, 0);

const bPercent = 100 / allBeneficsNum;
bineficChartsData.forEach(item => {
  const percentDone = Math.round(item.num * bPercent);
  const percentRest = 100- percentDone;
  item.values = [percentDone, percentRest];
})


console.log("ALL BENEFICS: ", bineficChartsData)

const allCharts = [];

function initBineficsCharts() {
  const t = setTimeout(() => {
    bineficChartsData.forEach((b) =>
      allCharts.push(initBineficLogoChart(b.canvas, b.values, b.valuesColors))
    );
    allCharts.push(
      initGenderChart(
        document.querySelector("#gender_1"),
        [40, 60], ["#569FD6", "#F47D39"]
      )
    );
    clearTimeout(t);
  }, 500);
}

function onOpacity(e) {
  if(e.target.classList.contains('click-opacity')) {
    closeMathCurationPage();
  }
};

function showMathCurationPage(e) {
  displayPopup(mathCurationPage);
  initBineficsCharts();
  animationMathCuration();
  mathCurationOpacity.addEventListener("click", onOpacity);
}
function closeMathCurationPage() {
  reverseAnimation();
  hidePopup(mathCurationPage);
  allCharts.forEach((b) => b.destroy());
  mathCurationOpacity.removeEventListener("click", onOpacity);
}

toMathCuration.addEventListener("click", showMathCurationPage);
mathCurationClose.addEventListener("click", closeMathCurationPage);

//animation elements

const sidebarIcons = document.querySelectorAll(".mathCurationPage .sidebar-vertical-item");
const maleInfo = document.querySelectorAll(".male-info");

function animationMathCuration() {
  sidebarIcons.forEach((item, idx) => {
    const t = setTimeout(() => {
      item.classList.remove("moveToRight");
      clearTimeout(t);
    }, idx * 100 + 50);
  });
  maleInfo.forEach((item, idx) => {
    const t = setTimeout(() => {
      item.classList.remove("moveUp");
      clearTimeout(t);
    }, idx * 100 + 50);
  });
}

function reverseAnimation() {
  sidebarIcons.forEach((item, idx) => {
    item.classList.add("moveToRight");
  });
  maleInfo.forEach((item, idx) => {
    item.classList.add("moveUp");
  });
}
