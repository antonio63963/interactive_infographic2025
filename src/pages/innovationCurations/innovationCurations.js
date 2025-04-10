import { displayPopup, hidePopup, animBarsStack } from "../index/index";
import { initGenderChart } from "../../common/ui/genderChart/genderChart";

const toInnovationCurations = document.querySelector(".toInnovationCurations");
const innovationCurationsClose = document.querySelector(
  ".innovationCurationsClose"
);
const innovationCurationsPage = document.querySelector(
  ".innovationCurationsPage"
);

function onOpacity(e) {
  if (e.target.classList.contains("click-opacity")) {
    closeInnovationCurationsPage();
  }
}

function showInnovationCurationsPage(e) {
  displayPopup(innovationCurationsPage);
  animationInnovationCurations();
  innovationCurationsPage.addEventListener("click", onOpacity);
}
function closeInnovationCurationsPage() {
  reverseAnimation();
  hidePopup(innovationCurationsPage);
  innovationCurationsPage.removeEventListener("click", onOpacity);
}
toInnovationCurations.addEventListener("click", showInnovationCurationsPage);
innovationCurationsClose.addEventListener(
  "click",
  closeInnovationCurationsPage
);

//animation elements

const sidebarIcons = document.querySelectorAll(
  ".innovationCurationsPage .sidebar-vertical-item"
);
const barsBase = document.querySelectorAll(".innovationCurationsPage .bar");
const bineficMoblieCharts = document.querySelectorAll(
  ".innovationCurationsPage .bar-graph"
);
const canvas = document.querySelector("#innovation-curations-gender-1");
const beneficsBySector = Array.from(
  document.querySelectorAll(".innovation-curations-content .chart-item")
);

let innovationGrantCharts;
function initInnovationGrantChart() {
  const t = setTimeout(() => {
    innovationGrantCharts = initGenderChart(
      canvas,
      [63, 37],
      ["#569FD6", "#F47D39"]
    );

    clearTimeout(t);
  }, 500);
}

function animationInnovationCurations() {
  initInnovationGrantChart();
  Array.from(sidebarIcons)
    .reverse()
    .forEach((item, idx) => {
      const t = setTimeout(() => {
        item.classList.remove("moveToRight");
        clearTimeout(t);
      }, idx * 100 + 50);
    });
  barsBase.forEach((item, idx) => {
    const t = setTimeout(() => {
      item.classList.remove("scaleX");
      bineficMoblieCharts[idx].classList.remove("scaleX");
      clearTimeout(t);
    }, idx * 100);
  });

  animBarsStack(beneficsBySector);
}

function reverseAnimation() {
  innovationGrantCharts.destroy();

  sidebarIcons.forEach((item, idx) => {
    item.classList.add("moveToRight");
  });
  barsBase.forEach((item, idx) => {
    item.classList.add("scaleX");
    bineficMoblieCharts[idx].classList.add("scaleX");
  });
  beneficsBySector.forEach((item) => (item.style.width = 0));
}
