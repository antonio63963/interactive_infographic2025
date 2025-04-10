import "../../common/ui/twoValuesRow/twoValuesRow.css";
// import "./engagementScience.css";

import { displayPopup, hidePopup, animatedCounter } from "../index/index";

const toEngagementScience = document.querySelector(".toEngagementScience");
const engagementScienceClose = document.querySelector(
  ".engagementScienceClose"
);
const engagementSciencePage = document.querySelector(".engagementSciencePage");

function onOpacity(e) {
  if (e.target.classList.contains("click-opacity")) {
    closeEngagementSciencePage();
  }
}

function showEngagementSciencePage(e) {
  displayPopup(engagementSciencePage);
  engagementSciencePage.addEventListener("click", onOpacity);

  animationEngagementScience();
}
function closeEngagementSciencePage() {
  reverseAnimation();
  hidePopup(engagementSciencePage);
  engagementSciencePage.removeEventListener("click", onOpacity);
}

toEngagementScience.addEventListener("click", showEngagementSciencePage);
engagementScienceClose.addEventListener("click", closeEngagementSciencePage);

//animation elements

const sidebarIcons = document.querySelectorAll(
  ".engagementSciencePage .sidebar-horizontal-item"
);
const barsBase = document.querySelectorAll(".engagementSciencePage .bar");
const sidebarValues = document.querySelectorAll(
  ".engagementSciencePage .bar-value"
);
const bineficMoblieCharts = document.querySelectorAll(
  ".engagementSciencePage .bar-graph"
);
const bineficVluesElements = document.querySelectorAll(
  ".engagementSciencePage .chart-graph .chart-value"
);
const barsValuesList = [100, 95, 80, 25, 8, 8, 3];
const bineficValuesList = [56, 17, 12, 3, 5, 7];

function animationEngagementScience() {
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
      sidebarValues[idx].style.marginLeft = "12px";
      clearTimeout(t);
    }, idx * 100);
  });
  bineficVluesElements.forEach((el, idx) => {
    animatedCounter({
      elem: el,
      numFrom: 0,
      numTo: bineficValuesList[idx],
      step: 3,
      interval: 100,
      isPercent: true,
    });
  });
}

function reverseAnimation() {
  sidebarIcons.forEach((item, idx) => {
    item.classList.add("moveToRight");
  });
  barsBase.forEach((item, idx) => {
    item.classList.add("scaleX");
    sidebarValues[idx].style.marginLeft = `-${barsValuesList[idx]}%`;
    bineficMoblieCharts[idx].classList.add("scaleX");
  });
}
