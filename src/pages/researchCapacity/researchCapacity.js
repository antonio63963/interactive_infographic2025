import "../../common/ui/twoValuesRow/twoValuesRow.css";

import { displayPopup, hidePopup, animatedCounter } from "../index/index";

const toResearchCapacity = document.querySelector(".toResearchCapacity");
const researchCapacityClose = document.querySelector(".researchCapacityClose");

const researchCapacityPage = document.querySelector(".researchCapacityPage");

function onOpacity(e) {
  if (e.target.classList.contains("click-opacity")) {
    closeResearchCapacityPage();
  }
}

function showResearchCapacityPage(e) {
  displayPopup(researchCapacityPage);
  animationResearchCapacity();
  researchCapacityPage.addEventListener("click", onOpacity);
}
function closeResearchCapacityPage() {
  reverseAnimation();
  hidePopup(researchCapacityPage);
  researchCapacityPage.removeEventListener("click", onOpacity);
}
toResearchCapacity.addEventListener("click", showResearchCapacityPage);
researchCapacityClose.addEventListener("click", closeResearchCapacityPage);

const doubleBarValues = [[100, 34], [40, 6], [7, 5], [4, 3]]

//animation elements

const sidebarIcons = document.querySelectorAll(
  ".researchCapacityPage .sidebar-horizontal-item"
);
const capacityChartItems = document.querySelectorAll(
  ".research-capacity-content .chart-item"
);
const theBigestFirstNum = Array.from(capacityChartItems)
  .map((item) => parseInt(item.dataset.val1, 10))
  .sort((a, b) => a > b)[0];

const percent = 100 / theBigestFirstNum;
console.log("Percent: ", percent)
function animationResearchCapacity() {
  Array.from(sidebarIcons)
    .reverse()
    .forEach((item, idx) => {
      const t = setTimeout(() => {
        item.classList.remove("moveToRight");
        clearTimeout(t);
      }, idx * 100 + 50);
    });

  capacityChartItems.forEach((item, idx) => {
    const val1 = +item.getAttribute('data-val1');
    const val2 = +item.getAttribute('data-val2');
    // const val1 = item.dataset.val1;
    // const val2 = item.dataset.val2;

    const values = doubleBarValues[idx];

    const firstBar = item.querySelector(".first-bar");
    const secondBar = item.querySelector(".second-bar");

    const firstResult = firstBar.querySelector(".first-result");
    const secondResult = firstBar.querySelector(".second-result");
    console.log('val1 : ', val1,": ", val1*percent)
    console.log('val2 : ', val2,": ", val2*percent)
    const t = setTimeout(() => {
      firstBar.style.width = `${values[0]}%`;
      secondBar.style.width = `${values[1]}%`;

      animatedCounter({
        elem: firstResult,
        numFrom: 0,
        numTo: val1,
        step: 6,
        interval: 100,
        isPercent: false,
      });
      animatedCounter({
        elem: secondResult,
        numFrom: 0,
        numTo: val2,
        step: 2,
        interval: 100,
        isPercent: false,
      });
      clearTimeout(t);
    }, idx * 500 + 50);
  });
}

function reverseAnimation() {
  sidebarIcons.forEach((item) => {
    item.classList.add("moveToRight");
  });
  capacityChartItems.forEach((item, idx) => {
    item.querySelector(".first-bar").style.width = 0;
    item.querySelector(".second-bar").style.width = 0;
  });
}
