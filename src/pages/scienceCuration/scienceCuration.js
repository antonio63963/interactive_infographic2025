import { displayPopup, hidePopup } from "../index/index.js";

const toScienceCuration = document.querySelector(".toScienceCuration");
const scienceCurationPage = document.querySelector(".scienceCurationPage");
const scienceCurationClose = document.querySelector(".scienceCurationClose");
const scienceCurationOpacity = scienceCurationPage.querySelector('.click-opacity');

const allCharts = [];

function initBineficsCharts() {
  const t = setTimeout(() => {
    clearTimeout(t);
  }, 500);
}

function onOpacity(e) {
  if (e.target.classList.contains("click-opacity")) {
    closeMathCurationPage();
  }
}

function showMathCurationPage(e) {
  displayPopup(scienceCurationPage);
  animationScienceCuration();
  scienceCurationOpacity.addEventListener("click", onOpacity);
}
function closeMathCurationPage() {
  reverseAnimation();
  hidePopup(scienceCurationPage);
  allCharts.forEach((b) => b.destroy());
  scienceCurationOpacity.removeEventListener("click", onOpacity);
}
toScienceCuration.addEventListener("click", showMathCurationPage);
scienceCurationClose.addEventListener("click", closeMathCurationPage);

//animation elements

const sidebarIcons = scienceCurationPage.querySelectorAll(
  ".sidebar-vertical-item"
);
const mobileBarsSinceCuration = document.querySelectorAll(
  ".scienceCurationPage .bar-graph"
);
const moveUpScienceCuration = document.querySelectorAll(
  ".scienceCurationPage .moveUp"
);
const chartBarsScienceCuration = document.querySelectorAll(
  ".binefic-item-s-cur"
);

function animationScienceCuration() {
  sidebarIcons.forEach((item, idx) => {
    const t = setTimeout(() => {
      item.classList.remove("moveToRight");
      clearTimeout(t);
    }, idx * 100 + 50);
  });
  mobileBarsSinceCuration.forEach((item, idx) => {
    const t = setTimeout(() => {
      item.classList.remove("scaleX");
      clearTimeout(t);
    }, idx * 100 + 50);
  });
  chartBarsScienceCuration.forEach((item, idx) => {
    const t = setTimeout(() => {
      item.classList.remove("scaleX");
      clearTimeout(t);
    }, idx * 100);
  });
  moveUpScienceCuration.forEach((item, idx) => {
    const t = setTimeout(() => {
      item.classList.remove("moveUp");
      clearTimeout(t);
    }, idx * 100);
  });
}

function reverseAnimation() {
  sidebarIcons.forEach((item, idx) => {
    item.classList.add("moveToRight");
  });
  mobileBarsSinceCuration.forEach((item, idx) => {
    item.classList.add("scaleX");
  });
  chartBarsScienceCuration.forEach((item, idx) => {
    item.classList.add("scaleX");
  });
  moveUpScienceCuration.forEach((item, idx) => {
    item.classList.add("moveUp");
  });
}
